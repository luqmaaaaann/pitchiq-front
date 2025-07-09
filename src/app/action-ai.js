"use server";

import { openai } from "@/utils/openai";
import prisma from "@/lib/prisma";
import { createDeck } from "../services/deck"; // koreksi path jika perlu

export async function analyzePdfAction(formData) {
  try {
    console.log("🚀 Start analyzePdfAction");

    const file = formData.get("file");
    const startupName = formData.get("startupName");
    const industry = formData.get("industry");

    console.log("📥 Received form data:", {
      fileName: file?.name,
      startupName,
      industry,
    });

    if (!file) {
      console.log("🚫 No file uploaded");
      return "Gagal: File tidak ditemukan.";
    }

    const fileName = file.name;
    const filePath = `/uploads/${fileName}`;
    console.log("📝 Creating deck in database...");
    const newDeck = await createDeck("cmct87hch0000qpoz4as12ynq", {
      fileName,
      filePath,
      startupName,
      industry,
      summary: "",
    });

    console.log("📦 Deck created:", newDeck.id);

    console.log("🔄 Updating status to PROCESSING...");
    await prisma.deck.update({
      where: { id: newDeck.id },
      data: { status: "PROCESSING" },
    });

    console.log("📤 Uploading file to OpenAI...");
    const uploadedFile = await openai.files.create({
      file,
      purpose: "user_data",
    });

    console.log("✅ File uploaded to OpenAI:", uploadedFile.id);

    console.log("🧠 Sending prompt to OpenAI for analysis...");
    const response = await openai.responses.create({
      model: "gpt-4.1",
      input: [
        {
          role: "user",
          content: [
            {
              type: "input_file",
              file_id: uploadedFile.id,
            },
            {
              type: "input_text",
              text: `You are an expert startup mentor and investor. Evaluate the uploaded pitch deck with the following points:

1. What is the core idea and value proposition?
2. Who is the target market and how big is the opportunity?
3. Does the pitch clearly communicate the business model?
4. Are the go-to-market and monetization strategies convincing?
5. What are the strengths and weaknesses of the deck?
6. Would this be investable in early stage? Why or why not?

Please be objective and provide constructive feedback.
Jawabanmu harus dalam bahasa Indonesia.`,
            },
          ],
        },
      ],
    });

    const summary = response.output_text || "❗️ Tidak ada hasil dari AI.";
    console.log("📝 AI Summary received:");

    console.log("💾 Updating deck with summary and COMPLETED status...");
    await prisma.deck.update({
      where: { id: newDeck.id },
      data: {
        summary,
        status: "COMPLETED",
      },
    });

    console.log("✅ Analysis completed and saved to DB.");
    return summary;
  } catch (error) {
    console.error("❌ Error in analyzePdfAction:", error);

    console.log("⚠️ Updating all PROCESSING decks to FAILED (fallback)...");
    await prisma.deck.updateMany({
      where: { status: "PROCESSING" },
      data: { status: "FAILED" },
    });

    return "Terjadi kesalahan saat memproses pitch deck.";
  }
}
