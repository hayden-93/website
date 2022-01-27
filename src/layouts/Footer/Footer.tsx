import { GitHub, Instagram, Linkedin, Twitter } from "react-feather";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const classes = ["text-blue12", className].join(" ").trim();
  return (
    <footer className={classes}>
      <section className="flex justify-between">
        <div className="flex space-x-4">
          <a href="https://github.com/hayden-93" className="hover:text-blue11">
            <GitHub />
          </a>
          <a href="https://uk.linkedin.com/in/hayden-buckley-smith-b14070142" className="hover:text-blue11">
            <Linkedin />
          </a>
          <a href="https://www.instagram.com/hbsdev/" className="hover:text-blue11">
            <Instagram />
          </a>
          <a href="https://twitter.com/HBSDev" className="hover:text-blue11">
            <Twitter />
          </a>
        </div>
        <div>
          <span>rfjhberfhgeruighequrhgeqru</span>
        </div>
        <div>
          <div>
            <a href="mailto:hayden@abstack.co" className="hover:text-blue11">
              hayden@abstack.co
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};
