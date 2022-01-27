import type { ReactNode } from "react";

import { Footer, Header } from "./index";

interface PageProps {
  children: ReactNode;
  className?: string;
}

export const Page = ({ children, className }: PageProps) => {
  const classes = ["text-blue12", className].join(" ").trim();

  return (
    <>
      <Header />
      <main className={classes}>{children}</main>
      <Footer />
    </>
  );
};
