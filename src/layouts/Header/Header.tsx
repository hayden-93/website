import { Avatar } from "../../components/Avatar";
import { Separator } from "../../components/Separator";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const classes = ["sticky top-0 bg-indigo1 mt-4 text-indigo12 z-50", className].join(" ").trim();

  return (
    <header className={classes}>
      <div className="flex justify-between items-center">
        <Avatar />
        <ul className="flex space-x-12">
          <li>
            <a href="#" className="text-indigo-12 hover:text-indigo11">
              Home
            </a>
          </li>
          <span>|</span>
          <li>
            <a href="#about" className="text-indigo-12 hover:text-indigo11">
              About Me
            </a>
          </li>
          <span>|</span>
          <li>
            <a href="#" className="text-indigo-12 hover:text-indigo11">
              Blog
            </a>
          </li>
          <span>|</span>
          <li>
            <a href="#" className="text-indigo-12 hover:text-indigo11">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
      <Separator />
    </header>
  );
};
