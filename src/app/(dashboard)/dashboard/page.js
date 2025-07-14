import { Button } from "@/components/ui/button";
import { getCurrentSession } from "@/services/auth";
import { getDecksByUserId } from "@/services/deck";
import DeckList from "./DeckList";
import NewUserPage from "./NewUserPage";

export default async function Page() {
  const session = await getCurrentSession();
  const decks = await getDecksByUserId(session.user.id);

  if (decks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <NewUserPage />
      </div>
    );
  }

  return (
    <DeckList />

    // History File
    // <div class="flex flex-col items-center justify-center py-16 px-4">
    //   <h2 class="text-xl font-semibold text-left w-full mb-6">History File</h2>
    //   <div class="w-full space-y-4">
    //     <div class="bg-gray-300 rounded-md px-4 py-3 flex justify-between items-center">
    //       <p class="text-left">File Pitchdeck.pdf</p>
    //       <Button class="text-sm font-medium text-black hover:underline">
    //         Detail
    //       </Button>
    //     </div>

    //     <div class="bg-gray-300 rounded-md px-4 py-3 flex justify-between items-center">
    //       <p class="text-left">File Bismillahfix.pdf</p>
    //       <Button class="text-sm font-medium text-black hover:underline">
    //         Detail
    //       </Button>
    //     </div>

    //     <div class="bg-gray-300 rounded-md px-4 py-3 flex justify-between items-center">
    //       <p class="text-left">File Bismillahfix.pdf</p>
    //       <Button class="text-sm font-medium text-black hover:underline">
    //         Detail
    //       </Button>
    //     </div>

    //     <div class="bg-gray-300 rounded-md px-4 py-3 flex justify-between items-center">
    //       <p class="text-left">File Bismillahfix.pdf</p>
    //       <Button class="text-sm font-medium text-black hover:underline">
    //         Detail
    //       </Button>
    //     </div>
    //   </div>
    // </div>
  );
}
