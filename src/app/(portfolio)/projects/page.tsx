import NormalCard from "@/components/NormalCard";
import MovesLink from "@/components/NormalCardComponents/MovesLink";
import { Project } from "@/data/types";
import React from "react";

async function Page() {
  const response = await fetch(
    "https://joegcode.github.io/api/portfolio/data/projects.json",
    { cache: "no-store" }
  );
  let projects: Project[] = await response.json();
  // This site will have ID of 5
  projects = projects.filter((project) => project.id !== 5);
  return (
    <section className="flex flex-col gap-8 h-full w-full items-center justify-center text-center text-white ">
      <h1 className="text-2xl">PROJECTS</h1>
      <h2 className="text-xl">CHECK OUT SOME OF THE THINGS I HAVE BUILT:</h2>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 mx-auto">
          {projects.map((project) => (
            <NormalCard
              key={project.id}
              name={project.name}
              image={project.image}
              hp={30 * project.id}
              aboutText={project.description}
              number={(project.id + 1).toString().padStart(3, "0")}
              links={[
                <MovesLink
                  numberOfStars={1}
                  title="Live Demo"
                  description="Check out the live demo"
                  href={project.demoLink}
                  key={1}
                />,
                <MovesLink
                  numberOfStars={2}
                  title="Github"
                  description="View the code on Github"
                  href={project.githubLink}
                  amount={80}
                  key={2}
                />,
              ]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Page;
