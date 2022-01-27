interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const classes = ["mt-4 text-blue12", className].join(" ").trim();

  return (
    <header className={classes}>
      <div className="flex justify-between">
        <h1>Hayden Buckley-Smith</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-blue11">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue11">
              About Me
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue11">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue11">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
