import NormalCard from "@/components/NormalCard";
import MovesLink from "@/components/NormalCardComponents/MovesLink";
import { Project, Skill } from "@/data/types";

async function Page() {
  const projectsResponse = await fetch(
    "https://joegcode.github.io/api/portfolio/data/projects.json",
    {
      next: {
        revalidate: 60 * 30,
      },
    },
  );
  let projects: Project[] = await projectsResponse.json();

  const skillsResponse = await fetch(
    "https://joegcode.github.io/api/portfolio/data/skills.json",
    {
      next: {
        revalidate: 60 * 30,
      },
    },
  );
  const allSkills: Skill[] = await skillsResponse.json();
  // This site will have ID of 2
  projects = projects.filter((project) => project.id !== 2);

  const getSkillsForProject = (skillIds: number[]) => {
    if (!skillIds) return [];
    return allSkills.filter((skill) => skillIds.includes(skill.id));
  };

  return (
    <section className="flex flex-col gap-8 h-full w-full items-center justify-center text-center text-white ">
      <h1 className="text-2xl">PROJECTS</h1>
      <h2 className="text-xl">CHECK OUT SOME OF THE THINGS I HAVE BUILT:</h2>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 mx-auto">
          {projects.map((project, index) => {
            const projectSkills = getSkillsForProject(project.skillIds);
            return (
              <NormalCard
                key={project.id}
                name={project.name}
                image={project.image}
                hp={(index + 3) * 10}
                aboutText={project.description}
                number={(index + 2).toString().padStart(3, "0")}
                projectSkills={projectSkills}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Page;
