import { Button } from "@/components/ui/button";
import { googleLoginAction } from "@/app/(auth)/action";
import React from "react";

export default function GoogleButton() {
  return (
    <form action={googleLoginAction}>
      <Button
        variant="outline"
        type="submit"
        className="w-full py-4 cursor-pointer rounded-full"
      >
        Continue With Google
      </Button>
    </form>
  );
}
