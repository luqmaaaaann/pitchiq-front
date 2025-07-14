import { logger, task, wait } from "@trigger.dev/sdk/v3";

import { openai } from "@/lib/openai";
import prisma from "@/lib/prisma";
import { createAnalysis } from "../services/analysis";

export const analyzeAiTask = task({
  id: "analyze-pitchdeck",
  maxDuration: 300,
  run: async (payload, { ctx }) => {
    logger.log("Start background task", { payload, ctx });

    const { deckId, filePath, fileName, startupName, industry, summaryInput } =
      payload;

    try {
      logger.log("📥 Fetching file for AI analysis");
      const blob = await fetch(filePath).then((res) => res.blob());
      const file = new File([blob], fileName, { type: blob.type });

      logger.log("📤 Uploading to OpenAI");

      const uploadedFile = await openai.files.create({
        file,
        purpose: "user_data",
      });

      const aiResponse = await openai.responses.create({
        model: "gpt-4.1",
        input: [
          {
            role: "user",
            content: [
              { type: "input_file", file_id: uploadedFile.id },
              {
                type: "input_text",
                text: `You are an expert startup mentor and investor. A startup has submitted a pitch deck for evaluation.

Startup details:
- Name: ${startupName}
- Industry: ${industry}
- Summary (provided by founder): ${summaryInput}

Evaluate based on:

1. What is the core idea and value proposition?
2. Who is the target market?
3. Business model clarity?
4. GTM and monetization strategy?
5. Strengths and weaknesses?
6. Early stage investability?

Return only JSON:

{
  "overallScore": 1-10,
  "summary": "Ringkasan dalam Bahasa Indonesia (Markdown format)"
}`,
              },
            ],
          },
        ],
      });

      let raw = aiResponse.output_text || "{}";
      raw = raw
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();
      const parsed = JSON.parse(raw);
      const overallScore = parseInt(parsed.overallScore);

      if (isNaN(overallScore)) throw new Error("Invalid score");

      // Delete previous analysis (if exists)
      await prisma.analysis.deleteMany({ where: { deckId } });

      // Create analysis
      await createAnalysis({ deckId, overallScore, response: parsed });

      // Mark as completed
      await prisma.deck.update({
        where: { id: deckId },
        data: { status: "COMPLETED" },
      });

      logger.log("✅ Analysis saved, ini parsed", parsed);
      return parsed.summary;
    } catch (err) {
      logger.error("❌ Failed to analyze deck", err);
      await prisma.deck.update({
        where: { id: payload.deckId },
        data: { status: "FAILED" },
      });
    }
  },

  onSuccess: async (payload, { ctx }) => {
    logger.log("AI Analysis generated", { payload, ctx });
  },
  onError: async (payload, { ctx }) => {
    logger.log("AI Analysis  failed", { payload, ctx });
  },
});
