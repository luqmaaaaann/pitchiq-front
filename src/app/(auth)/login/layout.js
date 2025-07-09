import React from "react";

export default function Layout({ children }) {
  return (
    <main className="min-h-screen">
      <div className="mx-auto">{children}</div>
    </main>
  );
}
