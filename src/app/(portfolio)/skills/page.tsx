import SkillCard from "@/components/SkillCard";
import { Skill } from "@/data/types";
import React from "react";

async function Page() {
  const response = await fetch(
    "https://joegcode.github.io/api/portfolio/data/skills.json"
  );
  console.log(response);
  const skills: Skill[] = await response.json();
  return (
    <section className="flex flex-col gap-8 h-full w-full items-center justify-center text-center text-white p-8 xs:p-4 max-w-screen-lg">
      <h1 className="text-2xl">SKILLS</h1>
      <h2 className="text-xl">
        THESE ARE THE TECHNOLOGIES I HAVE EXPERIENCE WITH:
      </h2>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Page;
