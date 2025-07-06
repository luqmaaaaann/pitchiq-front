"use server";

import { openai } from "@/utils/openai";

export async function analyzePdfAction(formData) {
  try {
    console.log("🔍 Start analyzePdfAction");

    const file = formData.get("file");
    if (!file) {
      console.log("🚫 No file found in formData");
      return;
    }

    console.log("📤 Uploading file to OpenAI...");
    const uploadedFile = await openai.files.create({
      file,
      purpose: "user_data",
    });

    console.log("✅ File uploaded:", uploadedFile.id);

    console.log("💬 Creating analysis request...");
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

    console.log("📝 Analysis result:", response.output_text);
  } catch (error) {
    console.error("❌ Error in analyzePdfAction:", error);
  }
}
