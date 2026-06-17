import { useState } from "react";
import { projects, PROJECT_CATEGORIES } from "../consts.ts";
import { Project } from "./project.jsx";

const filterButtonClass = (active) =>
  [
    "rounded-md border px-3 py-1.5 text-sm font-medium transition",
    active
      ? "border-black bg-black text-white"
      : "border-gray-200 text-gray-700 hover:border-gray-400 hover:text-black",
  ].join(" ");

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState(null);

  const filteredProjects = activeCategory
    ? projects.filter((project) => project.categories.includes(activeCategory))
    : projects;

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          type="button"
          className={filterButtonClass(activeCategory === null)}
          onClick={() => setActiveCategory(null)}
        >
          All
        </button>
        {PROJECT_CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            className={filterButtonClass(activeCategory === category)}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="min-w-0 columns-1 gap-6 xl:columns-2">
        {filteredProjects.map((project) => (
          <div key={project.title} className="my-1 inline-block w-full break-inside-avoid">
            <Project
              title={project.title}
              body={project.body}
              buttons={project.buttons}
              image={project.image}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </>
  );
}
