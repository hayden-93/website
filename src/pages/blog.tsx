interface BlogProps {
  className?: string;
}

export const Blog = ({ className }: BlogProps) => {
  const classes = ["mt-40", className].join(" ").trim();
  return (
    <div className={classes}>
      <h1 className="text-left text-10xl tracking-tight opacity-10">Blog</h1>
    </div>
  );
};

export default Blog;
