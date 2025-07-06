import Image from "next/image";
import { analyzePdfAction } from "./action-ai";

export default function Home() {
  return (
    <div>
      <main className="max-w-2xl m-auto my-12">
        <form action={analyzePdfAction} className="space-y-2">
          <input name="file" type="file" accept=".pdf" />
          <button>Start Process</button>
        </form>
      </main>
    </div>
  );
}
