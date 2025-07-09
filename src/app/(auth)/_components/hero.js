import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-screen font-main flex flex-col justify-center items-center bg-[radial-gradient(circle_at_bottom_left,_rgba(96,165,250,0.9),_transparent_44%)] text-center px-4">
      <h1 className="text-7xl font-bold md:text-7xl tracking-tight text-black py-2">
        <div>
          <span className="text-blue-600">Analyze</span> your Pitchdeck
        </div>
        <div className="mt-2 md:mt-3">
          into software with a <span className="text-blue-600">click</span>
        </div>
      </h1>
      <p className="font-medium md:text-xl mt-4 text-base max-w-3xl text-gray-500">
        No more guessing. Our AI evaluates your pitchdeck, identifies gaps, and
        gives you clear guidance to refine your message, strengthen your vision,
        and pitch with confidence.
      </p>
      <Link href="/" className="mt-14 mx-4">
        <Button className="gap-2 px-12 py-6 min-w-[160px] text-base md:text-lg font-medium rounded-full bg-black shadow-lg me-2 mb-2 hover:scale-105 hover:bg-black">
          Get Started
        </Button>
      </Link>
    </div>
  );
}
