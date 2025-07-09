import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { registerAction } from "@/app/(auth)/action";
import GoogleButton from "../_components/social-login";

export default async function Page() {
  return (
    <section className="min-h-screen font-main flex items-center justify-center bg-[radial-gradient(circle_at_bottom_left,_rgba(96,165,250,0.9),_transparent_44%)]">
      <Card className="w-full flex max-w-sm">
        <CardHeader>
          <CardTitle>Sign up to your account</CardTitle>
          <CardDescription className="mb-2">
            Sign up with your name, email, and password to get started.
          </CardDescription>
          <CardAction>
            <Button variant="link">Login</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form action={registerAction}>
            <div className="flex flex-col gap-6 mb-4">
              <div className="grid gap-2 ">
                <Label htmlFor="name">Name</Label>
                <Input
                  name="name"
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="grid gap-2">
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
            </div>
            <Button type="submit" className="w-full mb-2">
              Register
            </Button>
          </form>
          <GoogleButton className="w-full mt-4" />
        </CardContent>
      </Card>
    </section>
  );
}
