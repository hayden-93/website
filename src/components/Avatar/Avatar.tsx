import Image from "next/image";
import profilePic from "../../../public/avatar.png";

interface AvatarProps {
  className?: string;
}

export const Avatar = ({ className }: AvatarProps) => {
  const classes = ["", className].join(" ").trim();

  return <Image src={profilePic} alt="Picture of the author" className={classes} />;
};
