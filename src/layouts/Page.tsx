import type { ReactNode } from "react";
import { Separator } from "../components/Separator/Separator";

import { Footer, Header } from "./index";

interface PageProps {
  children: ReactNode;
  className?: string;
}

export const Page = ({ children, className }: PageProps) => {
  const classes = ["min-h-screen text-indigo12 mt-4", className].join(" ").trim();

  return (
    <>
      <Header />
      <Separator />
      <main className={classes}>{children}</main>
      <Footer />
    </>
  );
};
