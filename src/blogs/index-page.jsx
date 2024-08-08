import { Page } from "@nakedjsx/core/page";
import { Header } from "../components/header.jsx";
import { Blogs } from "../sections/blogs.jsx";

const BodyContent = () => (
  <>
    <div>
      <Header isBlog />
      <div className="flex flex-col" id="top">
        <main className="flex flex-col items-center px-4">
          <section className="mx-2 w-full py-12 md:mx-0 md:w-3/5 md:py-24 lg:w-2/5" id="recent-blogs">
            <Blogs />
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
Page.AppendHead(<link rel="stylesheet" href="/styles.css" />);
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
