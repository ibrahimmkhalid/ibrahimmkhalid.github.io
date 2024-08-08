import { projects } from "../data.js";
import { Project } from "../components/project.jsx";

export const Projects = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Projects</h1>
      <h2 className="pb-4 text-xl text-gray-600">Showcasing my skills</h2>
      <div className="w-full grid-cols-2 gap-4 py-4 2xl:grid">
        {projects.map((project) => {
          return (
            <Project
              title={project.title}
              body={project.body}
              buttons={project.buttons}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </>
  );
};
