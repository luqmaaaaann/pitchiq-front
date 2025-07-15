import React from "react";
import { getCurrentSession } from "@/services/auth";
import UploadDialog from "./UploadDialog";
import { redirect } from "next/navigation";

export default async function NewUserPage() {
  const session = await getCurrentSession();
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center text-center space-y-12">
      <div className="flex flex-col items-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-3xl font-bold text-gray-900">
            Hello, <span className="text-blue-600">{session.user.name}</span> 👋
          </h1>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Ready to analyze your pitch deck?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Upload your pitch deck and get AI-powered feedback to make it better. 
            Our analysis covers everything from market fit to presentation flow.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <UploadDialog />
          <p className="text-sm text-gray-500">
            PDF files only
          </p>
        </div>
      </div>
    </div>
  );
}