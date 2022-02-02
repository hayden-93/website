interface ContactProps {
  className?: string;
}

export const Contact = ({ className }: ContactProps) => {
  const classes = ["mt-40", className].join(" ").trim();
  return (
    <div className={classes}>
      <h1 className="text-left text-10xl tracking-tight opacity-10">Contact</h1>
    </div>
  );
};

export default Contact;
