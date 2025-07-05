import { google } from "@/lib/arctic";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getUserByEmail } from "@/services/user";
import { createSession } from "@/services/auth";
import * as arctic from "arctic";
import prisma from "@/lib/prisma";

export async function GET(request) {
  const cookieStore = await cookies();
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const codeVerifier = cookieStore.get("codeVerifier")?.value;

  try {
    const tokens = await google.validateAuthorizationCode(code, codeVerifier);
    const accessToken = tokens.accessToken();

    const res = await fetch(
      "https://openidconnect.googleapis.com/v1/userinfo",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const userData = await res.json();

    const existingUser = await getUserByEmail(userData.email);

    if (existingUser) {
      const newSession = await createSession(existingUser.id);
      cookieStore.set("session", newSession.id, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });
    } else {
      const newUser = await prisma.user.create({
        data: {
          name: userData.name,
          email: userData.email,
          avatarUrl: userData.picture,
        },
      });

      const newSession = await createSession(newUser.id);
      cookieStore.set("session", newSession.id, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });
    }
  } catch (error) {
    if (error instanceof arctic.OAuth2RequestError) {
      const code = error.code;
      console.log({ code });
    }
    if (error instanceof arctic.ArcticFetchError) {
      const cause = error.cause;
      console.log({ cause });
    }

    console.log({ error });
    return new Response(
      "Invalid authorization code, credentials, or redirect URI",
      { status: 400 }
    );
  }

  // ini belum ada folder structure, jadi direct ke dashboard dulu
  redirect("/dashboard");
}
