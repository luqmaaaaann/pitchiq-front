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
import { FileUp } from "lucide-react";
import React from "react";
Button;

export default async function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4">
      <p className="text-sm text-gray-600 mb-2">Hi, username</p>
      <h1 className="text-3xl font-bold mb-4">Analyze your pitch deck</h1>
      <p className="text-gray-500 max-w-md mb-6">
        Upload your pitch, our AI will review it and give you tailored feedback
        to make it shine.
      </p>
      <div>
        <Dialog>
          <form>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition cursor-pointer"
              >
                Upload File
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Upload your files</DialogTitle>
                <DialogDescription>
                  Easily upload your important document (PDF only)!
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="flex justify-center items-center bg-gray-100">
                  <div className="w-full max-w-md border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-white hover:bg-blue-50 hover:border-blue-400 cursor-pointer">
                    <div className="flex flex-col items-center">
                      <FileUp
                        className="h-7 w-7 text-gray-500 mb-4"
                        strokeWidth={1.5}
                      />
                      <p className="text-gray-700 font-medium">Drag files</p>
                      <p className="text-sm text-gray-500">
                        Click to upload PDF files (under 10 MB)
                      </p>
                    </div>
                    <input
                      type="file"
                      accept="application/pdf"
                      className="hidden"
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-800 hover:text-white text-white cursor-pointer"
                >
                  Analyze to AI
                </Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>
    </div>
  );
}
