import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4 font-main flex items-center justify-between">
        <div className="text-2xl text-black">
          <span className="font-bold">PitchIQ</span>
        </div>
        <nav className="hidden md:flex space-x-8 text-base font-medium text-black">
          <Link href="#home" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="#guide" className="hover:text-blue-600 transition">
            Guide
          </Link>
          <Link href="#features" className="hover:text-blue-600 transition">
            Feature
          </Link>
          <Link href="#pricing" className="hover:text-blue-600 transition">
            Pricing
          </Link>
          <Link href="#faq" className="hover:text-blue-600 transition">
            FAQ
          </Link>
        </nav>
        <Link href="/login">
          <button className="px-6 py-2 text-white bg-blue-600 rounded-full shadow hover:bg-blue-800 transition font-medium text-base cursor-pointer">
            Login
          </button>
        </Link>
      </div>
    </header>
  );
}
