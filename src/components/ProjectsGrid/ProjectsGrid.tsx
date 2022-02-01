import Image from "next/image";

interface ProjectsGridProps {
  className?: string;
}

export const ProjectsGrid = ({ className }: ProjectsGridProps) => {
  const classes = [
    "grid grid-cols-3 gap-4 place-items-center max-w-screen-xl mx-auto bg-indigo3 py-4 space-y-4 rounded-2xl",
    className,
  ]
    .join(" ")
    .trim();
  return (
    <>
      <h2 className="text-center">Projects</h2>
      <div className={classes}>
        <div>
          <Image src="/desktop-design.jpg" alt="NFT card component" width={250} height={250} className="rounded-2xl" />
          <span className="block text-center text-indigo12">NFT card component</span>
        </div>
        <div>
          <Image
            src="/Fun-Fact-Generator.png"
            alt="Fun Fact Project"
            width={250}
            height={250}
            className="rounded-2xl"
          />
          <span className="block text-center">Fun Fact Project</span>
        </div>
        <div>
          <Image
            src="/Number-Guesser.png"
            alt="Number Guesser Project"
            width={250}
            height={250}
            className="rounded-2xl"
          />
          <span className="block text-center">Number Guesser Project</span>
        </div>
        <div>
          <Image src="/piano-keys.png" alt="Piano Keys Project" width={250} height={250} className="rounded-2xl" />
          <span className="block text-center">Piano Keys Project</span>
        </div>
        <div>
          <Image src="/tsunami-coffee.png" alt="Tsunami Project" width={250} height={250} className="rounded-2xl" />
          <span className="block text-center">Tsunami Project</span>
        </div>
        <div>
          <Image
            src="/Mixed-Messages.png"
            alt="Mixed Messages Project"
            width={250}
            height={250}
            className="rounded-2xl"
          />
          <span className="block text-center">Mixed Messages Project</span>
        </div>
      </div>
    </>
  );
};
