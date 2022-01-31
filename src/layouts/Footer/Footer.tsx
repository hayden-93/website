import { GitHub, Instagram, Linkedin, Twitter, Zap } from "react-feather";
import { Separator } from "../../components";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const classes = ["text-indigo12 p-2", className].join(" ").trim();
  return (
    <footer className={classes}>
      <Separator className="mt-4" />
      <section className="flex justify-between mt-4">
        <div className="flex space-x-4">
          <a href="https://github.com/hayden-93" className="text-indigo12 hover:text-indigo11">
            <GitHub />
          </a>
          <a
            href="https://uk.linkedin.com/in/hayden-buckley-smith-b14070142"
            className="text-indigo12 hover:text-indigo11"
          >
            <Linkedin />
          </a>
          <a href="https://www.instagram.com/hbsdev/" className="text-indigo12 hover:text-indigo11">
            <Instagram />
          </a>
          <a href="https://twitter.com/HBSDev" className="text-indigo12 hover:text-indigo11">
            <Twitter />
          </a>
        </div>
        <div className="flex space-x-4">
          <Zap />
          <span>Designed and Built by Hayden Buckley-Smith</span>
          <Zap />
        </div>
        <div>
          <div>
            <a href="mailto:hayden@abstack.co" className="text-indigo12 hover:text-indigo11">
              hayden@abstack.co
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};
