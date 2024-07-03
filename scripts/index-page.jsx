import { Page } from "@nakedjsx/core/page";
import { Header } from "../../components/header.jsx";

const BodyContent = () => (
  <>
    <div className="font-mono">
      <Header isBlog />
      <div className="flex flex-col" id="top">
        <main className="flex flex-col items-center px-4">
          <section className="mx-2 w-full py-12 md:mx-0 md:w-3/5 md:py-24">
            <h1>|||title|||</h1>
            <div>|||content|||</div>
          </section>
        </main>
      </div>
    </div>
  </>
);

Page.Create("en");
Page.AppendHead(<title>|||title|||</title>);
Page.AppendHead(<meta charset="UTF-8" />);
Page.AppendHead(<meta name="viewport" content="width=device-width, initial-scale=1.0" />);
Page.AppendHead(<link rel="stylesheet" href="/styles.css" />);
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
