import { experiences } from "../data.js";

export const Experience = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Experience</h1>
      <h2 className="pb-4 text-xl text-gray-600">A list of my professional work experiences</h2>
      <div className="flex flex-col gap-2 text-lg">
        <div className="space-y-5">
          {experiences.map((experience) => {
            return (
              <div>
                <div className="text-xl">
                  <span className="font-bold">{experience.title}</span>
                  <span className="font-thin">
                    {", "} {experience.where} ({experience.from} to {experience.to})
                  </span>
                </div>
                <div className="flex h-full w-full flex-wrap py-2">
                  {experience.topSkills.map((p) => {
                    return (
                      <span className="mx-2 my-1 h-10 items-center justify-center rounded-md border-black bg-black px-4 py-2 text-white">
                        {p}
                      </span>
                    );
                  })}
                  {experience.links ? (
                    experience.links.map((p) => {
                      return (
                        <span className="mx-2 my-1 h-10 items-center justify-center rounded-md border-black bg-black px-4 py-2 text-white">
                          <a href={`https://${p}`} className="items-center justify-center">
                            <i className="fas fa-external-link-alt mr-1"></i>
                            {p}
                          </a>
                        </span>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </div>
                {experience.short ? <span>{experience.short}</span> : <></>}
                {experience.points ? (
                  <>
                    <ul className="list-disc space-y-2">
                      {experience.points.map((p) => {
                        return <li className="ml-8">{p}</li>;
                      })}
                    </ul>
                  </>
                ) : (
                  <></>
                )}
                <p className="text-md">{experience.tagline}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
