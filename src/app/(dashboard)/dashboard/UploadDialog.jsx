"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileUp } from "lucide-react";
import { Plus } from "lucide-react";
import { analyzePdfAction } from "@/app/pitchdeck/action-ai";

export default function UploadDialog() {
  const [file, setFile] = useState(null);
  
  const industries = [
    "Technology",
    "Healthcare", 
    "Finance",
    "Education",
    "E-commerce",
    "Manufacturing",
    "Food & Beverage",
    "Real Estate",
    "Transportation",
    "Entertainment",
    "Other"
  ];

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const result = await analyzePdfAction(formData);
    console.log(result);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer">
          <Plus className='w-4 h-4 mr-2' />
          Upload Pitchdeck
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create Your Pitch Analysis</DialogTitle>
            <DialogDescription>
              Fill in your startup details and upload your pitchdeck for AI analysis
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-6 py-4">
            {/* Startup Name */}
            <div className="grid gap-2">
              <Label htmlFor="startupName" className="text-sm font-medium">
                Startup Name *
              </Label>
              <Input
                id="startupName"
                name="startupName"
                type="text"
                placeholder="Enter your startup name"
                required
                className="w-full"
              />
            </div>

            {/* Industry */}
            <div className="grid gap-2">
              <Label htmlFor="industry" className="text-sm font-medium">
                Industry *
              </Label>
              <select name="industry" className="w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300" id="industry" required>
                <option value="">Select your industry</option>
                {industries.map((industry) => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>

            {/* Startup Summary */}
            <div className="grid gap-2">
              <Label htmlFor="summary" className="text-sm font-medium">
                Startup Summary *
              </Label>
              <Textarea
                id="summary"
                name="summary"
                placeholder="Describe your startup in a few sentences..."
                required
                className="min-h-[100px] resize-none"
              />
            </div>

            {/* File Upload */}
            <div className="grid gap-2">
              <Label className="text-sm font-medium">
                Pitchdeck File *
              </Label>
              <div className="flex justify-center items-center">
                <label className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-center bg-white hover:bg-blue-50 hover:border-blue-400 cursor-pointer transition-colors">
                  <div className="flex flex-col items-center">
                    <FileUp
                      className="h-8 w-8 text-gray-500 mb-3"
                      strokeWidth={1.5}
                    />
                    <p className="text-gray-700 font-medium mb-1">{file ? file.name : "Upload Pitchdeck"}</p>
                    <p className="text-sm text-gray-500">
                      Click to upload PDF files (under 10 MB)
                    </p>
                  </div>
                  <input
                    name="file"
                    id="file"
                    type="file"
                    accept="application/pdf"
                    className="hidden"
                    required
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white w-full"
            >
              Analyze Pitchdeck with AI
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}