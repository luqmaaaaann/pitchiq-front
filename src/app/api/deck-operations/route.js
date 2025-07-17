import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { createAnalysis } from "@/services/analysis";

// DELETE - Delete analysis by deckId
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const deckId = searchParams.get("deckId");

    if (!deckId) {
      return NextResponse.json(
        { error: "deckId is required" },
        { status: 400 }
      );
    }

    await prisma.analysis.deleteMany({ where: { deckId } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting analysis:", error);
    return NextResponse.json(
      { error: "Failed to delete analysis" },
      { status: 500 }
    );
  }
}

// POST - Create new analysis
export async function POST(request) {
  try {
    const { deckId, overallScore, response } = await request.json();

    if (!deckId || !overallScore || !response) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const analysis = await createAnalysis({ deckId, overallScore, response });

    return NextResponse.json({ success: true, data: analysis });
  } catch (error) {
    console.error("Error creating analysis:", error);
    return NextResponse.json(
      { error: "Failed to create analysis" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const { deckId, status } = await request.json();

    if (!deckId || !status) {
      return NextResponse.json(
        { error: "deckId and status are required" },
        { status: 400 }
      );
    }

    const deck = await prisma.deck.update({
      where: { id: deckId },
      data: { status },
    });

    return NextResponse.json({ success: true, data: deck });
  } catch (error) {
    console.error("Error updating deck status:", error);
    return NextResponse.json(
      { error: "Failed to update deck status" },
      { status: 500 }
    );
  }
}
