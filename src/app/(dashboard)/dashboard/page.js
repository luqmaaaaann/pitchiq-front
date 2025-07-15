import { getCurrentSession } from "@/services/auth";
import { getDecksByUserId } from "@/services/deck";
import DeckList from "./_components/DeckList";
import NewUserPage from "./_components/NewUserPage";

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

  return <DeckList decks={decks} />;
}
