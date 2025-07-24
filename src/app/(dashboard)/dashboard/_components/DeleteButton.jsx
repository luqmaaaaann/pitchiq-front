"use client";

import { useState } from "react";
import { deleteDeckAction } from "@/app/(dashboard)/action";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

export default function DeleteDeckButton({ deckId, deckName }) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  async function handleConfirmDelete() {
    setLoading(true);

    const result = await deleteDeckAction(deckId);

    if (result.success) {
      setOpen(false);
      toast.success("Deck deleted successfully!");
    } else {
      toast.error("Failed to delete deck: " + result.error);
    }

    setLoading(false);
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="sm" className="cursor-pointer">
          <Trash2 className="h-4 w-4 mr-1" />
          Delete
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Delete</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure to delete <strong>"{deckName}"</strong>?
            <br />
            All analysis data will be deleted and cannot be recovered.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading} className="cursor-pointer">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirmDelete}
            disabled={loading}
            className="bg-red-600 hover:bg-red-700 cursor-pointer"
          >
            {loading ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
