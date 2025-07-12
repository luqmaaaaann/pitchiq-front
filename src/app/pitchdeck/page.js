"use client";

import { useState } from "react";
import { analyzePdfAction, uploadToR2 } from "./action-ai";

import ReactMarkdown from "react-markdown";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    const result = await analyzePdfAction(formData);

    setOutput(result);
    setLoading(false);
    console.log(output, "output on client");
  }

  return (
    <div>
      <main className="max-w-2xl m-auto my-12">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h1 className="text-2xl font-bold mb-6">Isi Keterangan Deck</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-2xl text-gray-700">
                Startup Name
              </label>
              <input
                name="startupName"
                type="text"
                required
                className="border w-full p-2 rounded-md border-gray-600"
              />
            </div>
            <div>
              <label className="block font-2xl text-gray-700">Industry</label>
              <input
                name="industry"
                type="text"
                required
                className="border w-full p-2 rounded-md border-gray-600"
              />
            </div>
            <div>
              <label className="block font-2xl text-gray-700">
                Pitch Deck (PDF)
              </label>
              <input
                name="file"
                type="file"
                accept=".pdf"
                required
                className="border w-full p-2 rounded-md border-gray-600"
              />
            </div>
            <div>
              <label className="block font-2xl text-gray-700">Summary</label>
              <textarea
                name="summary"
                rows="4"
                cols="50"
                className="border w-full p-2 rounded-md border-gray-600"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              {loading ? "Processing..." : "Start Process"}
            </button>
          </form>
        </div>

        {/* {summary && (
          <div className="p-4 rounded">
            <h2 className="text-lg font-semibold mb-2">Output</h2>
            <ReactMarkdown>{summary}</ReactMarkdown>
          </div>
        )} */}
      </main>
    </div>
  );
}
