import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <div>Ini adalah Layout Dashboard</div>
      <div>{children}</div>
    </div>
  );
}
