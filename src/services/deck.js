import prisma from "@/lib/prisma";

export async function createDeck(userId, deckData) {
  const { fileName, filePath, startupName, industry, summary } = deckData;

  return await prisma.deck.create({
    data: {
      userId,
      fileName,
      filePath,
      startupName,
      industry,
      summary,
      status: "PENDING",
    },
  });
}

export async function getDecksByUserId(userId) {
  return await prisma.deck.findMany({
    where: { userId },
    include: { analysis: true },
    orderBy: { createdAt: "desc" },
  });
}

export async function getDeckById(deckId, userId) {
  const deck = await prisma.deck.findUnique({
    where: { id: deckId },
    include: { analysis: true },
  });

  if (!deck || deck.userId !== userId) {
    throw new Error("Deck not found");
  }

  return deck;
}

export async function updateDeckStatus(deckId, status, errorMessage = null) {
  return await prisma.deck.update({
    where: { id: deckId },
    data: { status, ...(errorMessage && { errorMessage }) },
  });
}

export async function deleteDeck(deckId, userId) {
  const deck = await prisma.deck.findFirst({
    where: { id: deckId, userId },
  });

  if (!deck) {
    throw new Error("Deck not found");
  }

  await prisma.analysis.deleteMany({ where: { deckId } });

  return await prisma.deck.delete({
    where: { id: deckId },
  });
}

export async function updateDeck(deckId, userId, deckData) {
  const deck = await prisma.deck.findFirst({
    where: { id: deckId, userId },
  });

  if (!deck) {
    throw new Error("Deck not found");
  }

  return await prisma.deck.update({
    where: { id: deckId },
    data: deckData,
  });
}
