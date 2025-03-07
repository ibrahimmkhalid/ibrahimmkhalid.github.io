import { Page } from "@nakedjsx/core/page";
import { Header } from "../../components/header.jsx";

const BodyContent = () => (
  <>
    <div>
      <Header isBlog />
      <div className="flex flex-col" id="top">
        <main className="flex flex-col items-center px-4">
          <section className="mx-2 w-full py-12 md:mx-0 md:w-3/5 md:py-24 lg:w-2/5">
            <h1 className="text-4xl font-bold underline"># Final semester starts today!</h1>
            <div>
              <p className="py-2">
                Once again I find myself at the start of another semester. If all goes according to plan, this should be
                my last semester at San Jose State. For the next 4 months or so, I will be putting all my focus on
                completing my capstone project. My team and I will be working on four unique models for obstacle
                avoidance… It is sure to be doozy.
              </p>
              <p className="py-2">
                Over the break, I applied to a number of jobs for when I graduate. To quote the responses I got,
                unfortunately <s>we</s> I could not proceed further. This is not ideal, but I will continue to apply for
                jobs and hope I will be able to land a job before May this year.
              </p>
              <p className="py-2">That is all I have for now, see you all later.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  </>
);

Page.Create("en");
Page.AppendHead(<title>Final semester starts today!</title>);
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
