"use server";

import { openai } from "@/lib/openai";
import prisma from "@/lib/prisma";
import { createDeck } from "../../services/deck";
import { createAnalysis } from "../../services/analysis";
import { s3Client } from "@/lib/r2";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { analyzeAiTask } from "@/trigger/tasks";

export async function analyzePdfAction(formData, deckId = null) {
  let deck = null;

  try {
    const startupName = formData.get("startupName");
    const industry = formData.get("industry");
    const summaryInput = formData.get("summary");

    let file, fileName, filePath;

    if (deckId) {
      //Edit
      deck = await prisma.deck.findUnique({ where: { id: deckId } });
      if (!deck) throw new Error("Deck not found.");
      fileName = deck.fileName;
      filePath = deck.filePath;
      //file = await fetch(deck.filePath).then((res) => res.blob());
      await prisma.deck.update({
        where: { id: deckId },
        data: {
          status: "PROCESSING",
          startupName,
          industry,
          summary: summaryInput,
        },
      });
    } else {
      // Create
      file = formData.get("file");
      if (!file) return "Gagal: File tidak ditemukan.";

      const { uniqueFileName, path } = await uploadToR2(file);
      fileName = uniqueFileName;
      filePath = path;

      deck = await createDeck("cmct87hch0000qpoz4as12ynq", {
        fileName,
        filePath,
        startupName,
        industry,
        summary: summaryInput,
        status: "PROCESSING",
      });
    }

    // Trigger AI analysis task
    const response = await analyzeAiTask.trigger({
      deckId: deck.id,
      filePath,
      fileName,
      startupName,
      industry,
      summaryInput,
    });

    console.log("response final", response);

    return response;
  } catch (error) {
    console.error(" Error in analyzePdfAction:", error);
    if (deck?.id) {
      await prisma.deck.update({
        where: { id: deck.id },
        data: { status: "FAILED" },
      });
    }
    return "❌ Terjadi kesalahan saat memproses pitch deck.";
  }
}
export async function uploadToR2(file) {
  const buffer = Buffer.from(await file.arrayBuffer());

  const originalName = file.name;
  const ext = originalName.split(".").pop();
  const baseName = originalName.replace(/\.[^/.]+$/, "").replace(/\s+/g, "-");
  const timestamp = Date.now();
  const uniqueFileName = `${baseName}-${timestamp}.${ext}`;

  const path = `https://pub-dee03cb33913487baac0cb1b03a98cf1.r2.dev/pitchdecks/${uniqueFileName}`;

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
