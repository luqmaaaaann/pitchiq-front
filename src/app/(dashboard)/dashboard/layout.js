import React from "react";
import DashboardPage from "./dashboard-page";
import { Toaster } from "@/components/ui/sonner";

export default function Layout({ children }) {
  return (
    <div>
      {/* <DashboardPage /> */}
      <Toaster position="top-center" richColors />
      <div>{children}</div>
    </div>
  );
}
