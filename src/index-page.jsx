import { Page } from "@nakedjsx/core/page";
import { Header } from "./components/header.jsx";
import { Blogs } from "./components/blogs.jsx";
import { Experience } from "./components/experience.jsx";
import { Education } from "./components/education.jsx";
import { Project } from "./components/project.jsx";

const isBuild = false;

//make sure to update grid cols accordingly
const quickLinks = [
  {
    name: "Resume",
    link: "https://drive.google.com/file/d/19qmTRpP0RprfNma2gAVtgAg8XbIYtNOv/view?usp=drive_link",
  },
  {
    name: "GitHub",
    link: "https://github.com/ibrahimmkhalid",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/ibrahimmkhalid",
  },
  {
    name: "Email",
    link: "mailto:ibrahimmkhalid@gmail.com",
  },
];

var firstQuickLink = true;

const BodyContent = () => (
  <>
    <div>
      <Header />
      <div className="flex flex-col" id="top">
        <main className="flex flex-col items-center px-4">
          {isBuild ? (
            <>
              <div className="m-4 rounded-full border-8 border-red-500 p-4">
                (Page experience still being built...)
                <br />
                If you found this page, please explore the buttons just below
              </div>
            </>
          ) : (
            <></>
          )}
          <section className="mx-2 w-full py-12 md:mx-0 md:w-3/5 md:py-24 lg:w-2/5">
            <h1 className="text-4xl font-bold">Ibrahim Khalid</h1>
            <h2 className="pb-4 text-xl text-gray-600">Software Engineer</h2>
            <p className="text-lg">
              Dedicated software engineer with an interest in system software and tool development. I am pursuing a
              master’s degree in data Analytics at San Jose State University. Allowing me to use my skills in software
              engineering in tandem with emerging machine learning and AI technologies. Currently seeking software
              engineering positions that focus on tool/system engineering or backend development.
            </p>
            <div className="flex flex-col pt-4 md:grid md:grid-cols-4">
              {quickLinks.map((l) => {
                var btnClass = "h-10 w-full items-center justify-center rounded-md border px-4 py-2 text-center";
                if (firstQuickLink) {
                  btnClass = btnClass + " bg-gray-800 text-white";
                  firstQuickLink = false;
                }
                return (
                  <div className="mx-0 my-1 md:mx-1 md:my-0">
                    <a href={l.link}>
                      <p className={btnClass}>{l.name}</p>
                    </a>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="mx-2 w-full py-12 md:mx-0 md:w-3/5 md:py-24 lg:w-2/5" id="recent-blogs">
            <Blogs count={4} />
          </section>
          <section className="mx-2 w-full py-12 md:mx-0 md:w-3/5 md:py-24 lg:w-2/5" id="experience">
            <Experience />
          </section>
          <section className="mx-2 w-full py-12 md:mx-0 md:w-3/5 md:py-24 lg:w-2/5" id="education">
            <Education />
          </section>
          <section className="mx-2 w-full py-12 md:mx-0 md:w-3/5 md:py-24 lg:w-2/5" id="projects">
            <h1 className="text-2xl font-bold">Projects</h1>
            <h2 className="pb-4 text-xl text-gray-600">Showcasing my skills</h2>
            <div className="w-full grid-cols-2 gap-4 py-4 2xl:grid">
              <Project
                title="Video game trend report"
                body="A brief report on the trends in video games over the last 40 years"
                buttons={["Django", "HTMX"]}
                image="https://utfs.io/f/ce42f155-b39a-45b8-8050-ab2685e5b568-m0jdt1.png"
                link="https://github.com/ibrahimmkhalid/data-200-assignment-3"
              />
              <Project
                title="Portfolio"
                body="A personal website that showcases my work, experience, socials, resume, and also hosts my blogs"
                buttons={["React", "TailwindCSS"]}
                image="https://utfs.io/f/a16bbc8f-b47f-44ee-ae01-82c02e04ea18-ijvnt4.png"
                link="#"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  </>
);

Page.Create("en");
Page.AppendHead(<title>Ibrahim Khalid</title>);
Page.AppendHead(<meta charset="UTF-8" />);
Page.AppendHead(<meta name="viewport" content="width=device-width, initial-scale=1.0" />);
Page.AppendHead(<link rel="stylesheet" href="./styles.css" />);
Page.AppendHead(
  <script
    defer
    src="https://use.fontawesome.com/releases/v5.15.4/js/solid.js"
    integrity="sha384-/BxOvRagtVDn9dJ+JGCtcofNXgQO/CCCVKdMfL115s3gOgQxWaX/tSq5V8dRgsbc"
    crossorigin="anonymous"
  ></script>,
);
Page.AppendHead(
  <script
    defer
    src="https://use.fontawesome.com/releases/v5.15.4/js/fontawesome.js"
    integrity="sha384-dPBGbj4Uoy1OOpM4+aRGfAOc0W37JkROT+3uynUgTHZCHZNMHfGXsmmvYTffZjYO"
    crossorigin="anonymous"
  ></script>,
);

Page.AppendBody(<BodyContent />);
Page.Render();
