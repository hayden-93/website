interface SeparatorProps {
  className?: string;
}

export const Separator = ({ className }: SeparatorProps) => {
  const classes = ["text-indigo6 mt-4", className].join(" ").trim();

  return <hr className={classes} />;
};
