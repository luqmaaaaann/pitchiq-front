"use server";

import { openai } from "@/lib/openai";
import prisma from "@/lib/prisma";
import { createDeck } from "../../services/deck";
import { createAnalysis } from "../../services/analysis";
import { s3Client } from "@/lib/r2";
import { PutObjectCommand } from "@aws-sdk/client-s3";

export async function analyzePdfAction(formData) {
  let newDeck = null;

  try {
    const file = formData.get("file");
    const startupName = formData.get("startupName");
    const industry = formData.get("industry");
    const summaryInput = formData.get("summary");

    if (!file) {
      console.log("🚫 No file uploaded");
      return "Gagal: File tidak ditemukan.";
    }

    const { path: filePath, uniqueFileName: fileName } = await uploadToR2(file);

    console.log("📝 Creating deck in database (status: PROCESSING)...");
    newDeck = await createDeck("cmct87hch0000qpoz4as12ynq", {
      fileName,
      filePath,
      startupName,
      industry,
      summary: summaryInput,
      status: "PROCESSING",
    });

    console.log("📤 Uploading file to OpenAI...");
    const uploadedFile = await openai.files.create({
      file,
      purpose: "user_data",
    });

    console.log("✅ File uploaded to OpenAI:", uploadedFile.id);

    console.log("🧠 Sending prompt to OpenAI for analysis...");
    const aiResponse = await openai.responses.create({
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
              text: `You are an expert startup mentor and investor. A startup has submitted a pitch deck for evaluation.

Startup details:
- Name: ${startupName}
- Industry: ${industry}
- Summary (provided by founder): ${summaryInput}

Please evaluate the uploaded pitch deck based on the following 6 criteria:

1. What is the core idea and value proposition?
2. Who is the target market and how big is the opportunity?
3. Does the pitch clearly communicate the business model?
4. Are the go-to-market and monetization strategies convincing?
5. What are the strengths and weaknesses of the deck?
6. Would this be investable in early stage? Why or why not?

Return only a **valid JSON** object in the following format:

{
  "overallScore": 1-10, // Integer score between 1 and 10
  "summary": "Tuliskan ringkasan evaluasi dalam bahasa Indonesia dengan format Markdown. Gunakan bullet list jika perlu."
}

Important:
- Jawaban dalam bahasa Indonesia.
- Jangan tambahkan penjelasan di luar JSON.
- Penilaian harus berdasarkan isi pitch deck dan informasi startup di atas.`,
            },
          ],
        },
      ],
    });

    const aiRaw = aiResponse.output_text || "{}";
    console.log("📝 AI response received:", aiRaw);

    const parsed = JSON.parse(aiRaw);
    const overallScore = parseInt(parsed.overallScore);

    if (isNaN(overallScore)) {
      throw new Error("Invalid or missing overallScore");
    }

    console.log("✅ Parsed AI response:", parsed);

    await createAnalysis({
      deckId: newDeck.id,
      overallScore,
      response: parsed,
    });

    await prisma.deck.update({
      where: { id: newDeck.id },
      data: { status: "COMPLETED" },
    });

    console.log("✅ Analysis completed and saved to DB.");
    return parsed.summary || "✅ Analisis berhasil, tapi tidak ada ringkasan.";
  } catch (error) {
    console.error("❌ Error in analyzePdfAction:", error);

    if (newDeck?.id) {
      await prisma.deck.update({
        where: { id: newDeck.id },
        data: { status: "FAILED" },
      });
    }

    return "❌ Terjadi kesalahan saat memproses pitch deck.";
  }
}

export async function uploadToR2(file) {
  //const file = formData.get("file");
  const buffer = Buffer.from(await file.arrayBuffer());

  const originalName = file.name;
  const ext = originalName.split(".").pop();
  const baseName = originalName.replace(/\.[^/.]+$/, "");
  const timestamp = Date.now();
  const uniqueFileName = `${baseName}-${timestamp}.${ext}`;

  const path = `https://pub-dee03cb33913487baac0cb1b03a98cf1.r2.dev/${uniqueFileName}`;

  console.log("before send to s3", uniqueFileName, path);

  await s3Client.send(
    new PutObjectCommand({
      Bucket: "pitchdecks",
      Key: `${uniqueFileName}`,
      Body: buffer,
      ContentType: file.type,
    })
  );

  console.log("✅ Upload successful:", path, uniqueFileName);

  return { path, uniqueFileName };
}
