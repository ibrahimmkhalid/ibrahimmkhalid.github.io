import { experiences } from "../data.js";
import { Button } from "../components/button.jsx";

export const Experience = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Experience</h1>
      <h2 className="pb-4 text-xl text-gray-600">A list of my professional work experiences</h2>
      <div className="flex flex-col gap-2 text-lg">
        <div className="space-y-5">
          {experiences.map((experience) => (
            <div>
              <div className="text-xl">
                <span className="font-bold">{experience.title}</span>
                <span className="font-thin">
                  {", "} {experience.where} ({experience.from} to {experience.to})
                </span>
              </div>
              <div className="flex h-full w-full flex-wrap py-2">
                {experience.topSkills.map((p) => (
                  <Button>{p}</Button>
                ))}
                {experience.links &&
                  experience.links.map((p) => (
                    <Button>
                      <a href={`https://${p}`} className="items-center justify-center">
                        <i className="fas fa-external-link-alt mr-1"></i>
                        {p}
                      </a>
                    </Button>
                  ))}
              </div>
              {experience.short && <span>{experience.short}</span>}
              {experience.points && (
                <>
                  <ul className="list-disc space-y-0">
                    {experience.points.map((p) => (
                      <li className="ml-8">{p}</li>
                    ))}
                  </ul>
                </>
              )}
              <p className="text-md">{experience.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
