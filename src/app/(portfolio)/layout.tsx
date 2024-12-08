import Navbar from "@/components/Navbar";
import React from "react";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col max-w-screen-lg">
      <Navbar />
      <div className="flex-1 p-8 xs:p-4">{children}</div>
    </div>
  );
}

export default Layout;
