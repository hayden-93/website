import Image from "next/image";
import profilePic from "../../../public/placeholder-image.png";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const classes = ["mt-4 text-indigo12", className].join(" ").trim();

  return (
    <header className={classes}>
      <div className="flex justify-between items-center">
        <Image src={profilePic} alt="Picture of the author" width={100} height={100} className="bg-indigo12" />
        <ul className="flex space-x-12">
          <li>
            <a href="#" className="text-indigo-12 hover:text-indigo11">
              Home
            </a>
          </li>
          <span>|</span>
          <li>
            <a href="#" className="text-indigo-12 hover:text-indigo11">
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
    </header>
  );
};
