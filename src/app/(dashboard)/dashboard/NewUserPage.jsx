import React from "react";
import { getCurrentSession } from "@/services/auth";
import UploadDialog from "./UploadDialog";
import { redirect } from "next/navigation";
import { getDecksByUserId } from "@/services/deck";
import { Sparkles, FileText, TrendingUp, Clock } from "lucide-react";

export default async function NewUserPage() {
  const session = await getCurrentSession();
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center space-y-12">
      {/* Welcome Section */}
      <div className="max-w-3xl space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 font-medium px-4 py-2 rounded-full border border-blue-200">
            <Sparkles className="w-4 h-4" />
            <span>Welcome to PitchIQ</span>
          </div>
          
          <h1 className="text-3xl md:text-3xl font-bold text-gray-900 leading-tight">
            Hi, <span className="text-blue-600">{session.user.name}</span> 👋
          </h1>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Ready to analyze your pitch deck?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Upload your pitch deck and get AI-powered feedback to make it better. 
            Our analysis covers everything from market fit to presentation flow.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center space-y-4">
          <UploadDialog />
          <p className="text-sm text-gray-500">
            PDF files only • Max 10 slides • Free analysis
          </p>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Smart Analysis</h3>
            <p className="text-sm text-gray-600">
              AI-powered evaluation of your pitch deck content and structure
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Detailed Feedback</h3>
            <p className="text-sm text-gray-600">
              Get actionable insights and recommendations to improve your pitch
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Fast Results</h3>
            <p className="text-sm text-gray-600">
              Get comprehensive analysis results in minutes, not hours
            </p>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="max-w-2xl w-full">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">How it works</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-left">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
              1
            </div>
            <p className="text-gray-700">Upload your pitch deck PDF file</p>
          </div>
          <div className="flex items-center gap-4 text-left">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
              2
            </div>
            <p className="text-gray-700">Our AI analyzes content, structure, and market fit</p>
          </div>
          <div className="flex items-center gap-4 text-left">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
              3
            </div>
            <p className="text-gray-700">Get detailed feedback and improvement suggestions</p>
          </div>
        </div>
      </div>
    </div>
  );
}