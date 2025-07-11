import prisma from "@/lib/prisma";

// ✅ Create Analysis
export async function createAnalysis({ deckId, overallScore, response }) {
  return await prisma.analysis.create({
    data: {
      deckId,
      overallScore,
      response,
    },
  });
}

// ✅ Get Analysis by Deck ID
export async function getAnalysisByDeckId(deckId) {
  return await prisma.analysis.findUnique({
    where: { deckId },
  });
}

// ✅ Update Analysis
export async function updateAnalysis(deckId, data) {
  return await prisma.analysis.update({
    where: { deckId },
    data,
  });
}

// ✅ Delete Analysis
export async function deleteAnalysisByDeckId(deckId) {
  return await prisma.analysis.delete({
    where: { deckId },
  });
}
