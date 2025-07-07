"use client";

import { useState } from "react";
import { analyzePdfAction } from "./action-ai";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    const result = await analyzePdfAction(formData);

    setSummary(result);
    setLoading(false);
  }

  return (
    <div>
      <main className="max-w-2xl m-auto my-12">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block">Startup Name</label>
            <input
              name="startupName"
              type="text"
              required
              className="border w-full p-2"
            />
          </div>
          <div>
            <label className="block">Industry</label>
            <input
              name="industry"
              type="text"
              required
              className="border w-full p-2"
            />
          </div>
          <div>
            <label className="block">Pitch Deck (PDF)</label>
            <input name="file" type="file" accept=".pdf" required />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2"
          >
            {loading ? "Processing..." : "Start Process"}
          </button>
        </form>

        {summary && (
          <div className="p-4 rounded">
            <h2 className="text-lg font-semibold mb-2">Output</h2>
            <ReactMarkdown>{summary}</ReactMarkdown>
          </div>
        )}
      </main>
    </div>
  );
}
