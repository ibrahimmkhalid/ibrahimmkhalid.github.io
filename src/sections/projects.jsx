import { projects } from "../data.js";
import { Project } from "../components/project.jsx";

export const Projects = () => {
  const even = projects.filter((_, idx) => idx % 2 === 0);
  const odd = projects.filter((_, idx) => idx % 2 !== 0);
  return (
    <>
      <h1 className="text-2xl font-bold">Projects</h1>
      <h2 className="pb-4 text-xl text-gray-600">Showcasing my skills</h2>
      <div className="grid w-full grid-cols-1 gap-0 2xl:grid-cols-2 2xl:gap-4">
        <div class="space-y-4">
          {even.map((project) => (
            <Project
              title={project.title}
              body={project.body}
              buttons={project.buttons}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
        <div class="space-y-4">
          {odd.map((project) => (
            <Project
              title={project.title}
              body={project.body}
              buttons={project.buttons}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};
