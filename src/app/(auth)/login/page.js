"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { loginAction } from "@/app/(auth)/action";
import GoogleButton from "../_components/social-login";
import Link from "next/link";

export default function Page() {
  return (
    <section className="min-h-screen font-main flex flex-col items-center justify-center bg-[radial-gradient(circle_at_bottom_left,_rgba(96,165,250,0.9),_transparent_44%)]">
      <Card className="w-full flex max-w-sm py-6">
        <CardHeader>
          <CardTitle className="leading-6 font-semibold">Login</CardTitle>
          <CardDescription className="mb-2 font-normal text-gray-500">
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={loginAction}>
            <div className="flex flex-col gap-2 mb-8">
              <div className="grid gap-2 mb-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input name="password" id="password" type="password" required />
              </div>
              <div className="grid text-left">
                <a
                  href="#"
                  className="inline-block text-sm text-gray-500 hover:text-black"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <Button
              type="submit"
              className=" w-full mb-2 py-4 cursor-pointer text-white bg-blue-600 rounded-full shadow hover:bg-blue-800 transition"
            >
              Login
            </Button>
          </form>
          <GoogleButton className="w-full mt-4" />
        </CardContent>
      </Card>
      <div className="flex justify-center items-center text-center mt-4 leading-5">
        <p className="text-sm font-normal text-gray-500">
          Dont have an account?{" "}
          <Link
            href="/register"
            className="text-gray-500 hover:font-semibold hover:text-blue-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
}
