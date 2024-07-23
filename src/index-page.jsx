import { Page } from "@nakedjsx/core/page";
import { Header } from "./components/header.jsx";
import { Blogs } from "./components/blogs.jsx";
import { Experience } from "./components/experience.jsx";
import { Education } from "./components/education.jsx";

const isBuild = false;

const BodyContent = () => (
  <>
    <div className="font-mono">
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
          <section className="mx-2 w-full py-12 md:mx-0 md:w-3/5 md:py-24">
            <h1 className="text-3xl font-bold">Ibrahim Khalid</h1>
            <h2 className="pb-4 text-lg text-gray-600">Software Engineer</h2>
            <p className="text-md">
              Dedicated software engineer with an interest in system software and tool development. I am pursuing a
              master’s degree in data Analytics at San Jose State University. Allowing me to use my skills in software
              engineering in tandem with emerging machine learning and AI technologies. Currently seeking software
              engineering positions that focus on tool/system engineering or backend development.
            </p>
            <div className="flex flex-col pt-4 md:grid md:grid-cols-4">
              <div className="mx-0 my-1 md:mx-1 md:my-0">
                <a href="https://drive.google.com/file/d/19qmTRpP0RprfNma2gAVtgAg8XbIYtNOv/view?usp=drive_link">
                  <p className="h-10 w-full items-center justify-center rounded-md border bg-gray-800 px-4 py-2 text-center text-white">
                    Resume
                  </p>
                </a>
              </div>
              <div className="mx-0 my-1 md:mx-1 md:my-0">
                <a href="https://github.com/ibrahimmkhalid">
                  <p className="h-10 w-full items-center justify-center rounded-md border px-4 py-2 text-center">
                    GitHub
                  </p>
                </a>
              </div>
              <div className="mx-0 my-1 md:mx-1 md:my-0">
                <a href="https://linkedin.com/in/ibrahimmkhalid">
                  <p className="h-10 w-full items-center justify-center rounded-md border px-4 py-2 text-center">
                    LinkedIn
                  </p>
                </a>
              </div>
              <div className="mx-0 my-1 md:mx-1 md:my-0">
                <a href="mailto:ibrahimmkhalid@gmail.com">
                  <p className="h-10 w-full items-center justify-center rounded-md border px-4 py-2 text-center">
                    Email
                  </p>
                </a>
              </div>
            </div>
          </section>
          <section className="mx-2 w-full py-12 md:mx-0 md:w-3/5 md:py-24" id="recent-blogs">
            <Blogs count={4} />
          </section>
          <section className="mx-2 w-full py-12 md:mx-0 md:w-3/5 md:py-24" id="experience">
            <Experience />
          </section>
          <section className="mx-2 w-full py-12 md:mx-0 md:w-3/5 md:py-24" id="education">
            <Education />
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
  <link href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />,
);
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
