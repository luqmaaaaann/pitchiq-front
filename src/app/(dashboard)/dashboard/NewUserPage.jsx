import React from "react";
import { getCurrentSession } from "@/services/auth";
import UploadDialog from "./UploadDialog";
import { redirect } from "next/navigation";
import { getDecksByUserId } from "@/services/deck";

export default async function NewUserPage() {
  const session = await getCurrentSession();
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4 w-full font-main">
      <div className="max-w-2xl">
        <p className="text-lg text-gray-600 mb-4">
          Hi, <span className="text-blue-600 font-medium">{session.user.name}</span> 👋
        </p>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Analyze your pitch deck
        </h1>
        
        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
          Upload your pitch deck and get AI-powered feedback to make it better.
        </p>
        
        <UploadDialog />
        
        <p className="text-sm text-gray-400 mt-4">
          PDF files only
        </p>
      </div>
    </div>
  );
}
