import { Navbar } from "@/components/navbar";
import React, { PropsWithChildren } from "react";

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      {children}
    </main>
  );
};

export default HomeLayout;
