import { Css } from "../../../public/assets/GridImages/css";
import { Eleventy } from "../../../public/assets/GridImages/eleventy";
import { Git } from "../../../public/assets/GridImages/git";
import { Html } from "../../../public/assets/GridImages/html";
import { JavaScript } from "../../../public/assets/GridImages/javascript";
import { PostgreSQL } from "../../../public/assets/GridImages/postgresql";
import { Python } from "../../../public/assets/GridImages/python";
import { React } from "../../../public/assets/GridImages/react";
import { Typescript } from "../../../public/assets/GridImages/typescript";

interface GridProps {
  className?: string;
}

export const Grid = ({ className }: GridProps) => {
  const classes = [
    "grid grid-cols-3 gap-4 place-items-center max-w-screen-lg mx-auto bg-indigo3 py-4 mt-40 space-y-4",
    className,
  ]
    .join(" ")
    .trim();

  return (
    <div className={classes}>
      <Html />
      <Css />
      <JavaScript />
      <React />
      <Typescript />
      <PostgreSQL />
      <Eleventy />
      <Python />
      <Git />
    </div>
  );
};
