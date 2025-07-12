import Link from "next/link";
import { CircleUser, LogOut } from "lucide-react";
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

export default function Layout({ children }) {
  return (
    <main className="flex h-screen">
      <aside className="w-[150px] bg-blue-600 text-white p-5 justify-between flex flex-col">
        <h1 className="mb-8 text-xl font-bold md:text-xl">PitchIQ</h1>
        <div className="mb-8">
          <Link href="/dashboard" className="block">
            Dashboard
          </Link>
          <Link href="/profile" className="block">
            Profile
          </Link>
          <Link href="">Payment</Link>
        </div>

        {/* bagian bawah */}
        <div className="mt-auto space-y-4">
          <Link href="" className="flex items-center gap-1">
            {" "}
            <CircleUser className="h-5 w-5" strokeWidth={1.5} />
            <span>Profile</span>
          </Link>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="ghost"
                className="p-0 h-auto bg-transparent shadow-none cursor-pointer hover:bg-transparent hover:text-white text-inherit flex items-center gap-1"
              >
                <LogOut className="h-5 w-5" strokeWidth={1.5} />
                <span>Logout</span>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm to Logout</AlertDialogTitle>
                <AlertDialogDescription>
                  You will be logged out of your account and redirected to the
                  homepage.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="cursor-pointer">
                  Cancel
                </AlertDialogCancel>
                <Link href="/">
                  {" "}
                  <Button
                    variant="outline"
                    className="bg-blue-600 hover:bg-blue-800 hover:text-white text-white cursor-pointer"
                  >
                    Logout
                  </Button>
                </Link>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </aside>
      <section className="flex-1 p-5">{children}</section>
    </main>
  );
}
