import { Page } from "@nakedjsx/core/page";
import { Header } from "../../components/header.jsx";

const BodyContent = () => (
  <>
    <div>
      <Header isBlog />
      <div className="flex flex-col" id="top">
        <main className="flex flex-col items-center px-4">
          <section className="mx-2 w-full py-12 md:mx-0 md:w-3/5 md:py-24 lg:w-2/5">
            <h1 className="text-4xl font-bold underline"># Back to school</h1>
            <div>
              <p className="py-2">
                This week marks the beginning of the third semester of my Master's program at San Jose State University.
                We are getting so close to graduating, God-willing.
              </p>
              <p className="py-2">
                In the past 2 semesters I worked on my foundations for machine learning and artificial intelligence by
                studying various topics from math to databases to PySpark ot basic ML models. This semester I will{" "}
                <i>deep</i> diver deep learning and <i>dig</i> deeper with data mining (puns intended). The biggest
                change this semester is that I will officially start working on my "Culminating experience", a single
                end-to-end ML/AI project over the course of this semester and the next.
              </p>
              <p className="py-2">
                What does this mean for my side projects and this blog. The pace at which I put out blogs or add to my
                side projects will slow down. My hope is that they do not slow down by much, but I cannot say for sure
                at this time. That's all for now.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  </>
);

Page.Create("en");
Page.AppendHead(<title>Back to school</title>);
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
