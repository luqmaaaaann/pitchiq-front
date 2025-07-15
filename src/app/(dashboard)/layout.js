import Link from "next/link";
import { CircleUser, LogOut, Home, CreditCard } from "lucide-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { logoutAction } from "../(auth)/action";

export default function Layout({ children }) {
  return (
    <main className="flex h-screen bg-gray-50 font-main">
      <aside className="w-56 bg-blue-600 border-r border-gray-200 flex flex-col justify-between shadow-sm">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-white">PitchIQ</h1>
          <p className="text-sm text-white mt-1">AI Pitch Analyzer</p>
        </div>
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white hover:bg-blue-50 hover:text-blue-600 transition-colors group"
            >
              <Home
                className="h-5 w-5 group-hover:text-blue-600"
                strokeWidth={2}
              />
              <span className="font-medium">Dashboard</span>
            </Link>
            <Link
              href="/payment"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white hover:bg-blue-50 hover:text-blue-600 transition-colors group"
            >
              <CreditCard
                className="h-5 w-5 group-hover:text-blue-600"
                strokeWidth={2}
              />
              <span className="font-medium">Payment</span>
            </Link>
          </div>
        </nav>
        <div className="p-4 space-y-2">
          <Link
            href="/profile"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white hover:bg-gray-100 hover:text-blue-600 transition-colors group"
          >
            <CircleUser className="h-5 w-5" strokeWidth={2} />
            <span className="font-medium">My Account</span>
          </Link>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 px-3 py-2.5 h-auto text-white hover:bg-red-50 hover:text-red-600 transition-colors group"
              >
                <LogOut className="h-5 w-5" strokeWidth={2} />
                <span className="font-medium">Logout</span>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-md">
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm Logout</AlertDialogTitle>
                <AlertDialogDescription>
                  You will be logged out of your account and redirected to the
                  homepage.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <form action={logoutAction}>
                  <Button variant="destructive" className="cursor-pointer">
                    Logout
                  </Button>
                </form>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </aside>

      <section className="flex-1 overflow-auto">
        <div className="p-8 max-w-7xl mx-auto">{children}</div>
      </section>
    </main>
  );
}
