import React from "react";
import DashboardPage from "./dashboard-page";

export default function Layout({ children }) {
  return (
    <div>
      {/* <DashboardPage /> */}
      <div>{children}</div>
    </div>
  );
}
