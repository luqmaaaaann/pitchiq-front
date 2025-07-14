import { Button } from "@/components/ui/button";
import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen font-main flex flex-col justify-center items-center bg-[radial-gradient(circle_at_bottom_left,_rgba(96,165,250,0.9),_transparent_46%)] text-center px-4">
      <h1 className="text-7xl font-semibold md:text-7xl tracking-tight text-black py-2">
        Page <span className="text-blue-600">404</span> Not Found
      </h1>
      <p className="text-muted-foreground md:text-xl text-xl font-medium mt-4 max-w-3xl">
        Oops! The page youre looking for is not available or may have been
        moved. Please double-check the URL or return to the homepage.
      </p>
      <Link href="/" className="mt-8 mx-4">
        <Button className="gap-2 px-12 py-6 min-w-[160px] text-base md:text-lg font-medium cursor-pointer rounded-full bg-black shadow-lg">
          <CircleArrowLeft size={28} />
          Home
        </Button>
      </Link>
    </section>
  );
}
