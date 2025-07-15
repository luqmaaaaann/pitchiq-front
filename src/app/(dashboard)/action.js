"use server";

import { getCurrentSession } from "@/services/auth";
import { deleteDeck, updateDeck } from "@/services/deck";
import { revalidatePath } from "next/cache";

export async function deleteDeckAction(deckId) {
  const session = await getCurrentSession();
  if (!session) {
    return { success: false, error: "Unauthorized" };
  }

  try {
    await deleteDeck(deckId, session.user.id);
  } catch (error) {
    return { success: false, error: "Failed to delete deck" };
  }

  revalidatePath("/dashboard");
  return { success: true, message: "Deck deleted successfully" };
}

export async function updateDeckAction(deckId, formData) {
  const session = await getCurrentSession();
  if (!session) {
    return { success: false, error: "Unauthorized" };
  }

  const updatedData = {
    startupName: formData.get("startupName"),
    industry: formData.get("industry"),
    summary: formData.get("summary"),
  };

  try {
    await updateDeck(deckId, session.user.id, updatedData);
  } catch (error) {
    return { success: false, error: "Failed to update deck" };
  }

  revalidatePath("/dashboard");
  return { success: true, message: "Deck updated successfully" };
}
