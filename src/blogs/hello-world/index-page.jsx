import { Page } from "@nakedjsx/core/page";
import { Header } from "../../components/header.jsx";

const BodyContent = () => (
  <>
    <div>
      <Header isBlog />
      <div className="flex flex-col" id="top">
        <main className="flex flex-col items-center px-4">
          <section className="mx-2 w-full py-12 md:mx-0 md:w-3/5 lg:w-2/5 md:py-24">
            <h1 className="text-4xl font-bold underline"># Hello World</h1>
            <div>
              <p className="py-2">Ahem…</p>
              <blockquote className="border-l-4 border-l-black bg-gray-100 py-1 pl-10">
                <p className="py-2">Hello World!</p>
              </blockquote>
              <p className="py-2 italic">*Look, he said the thing*</p>
              <p className="py-2">…</p>
              <p className="py-2">
                Anyways, Hello there! My name is Ibrahim and I am writing this blog just to establish some sort of
                online presence. I have been a bit of a lurker in the tech world only to my detriment. To change that I
                am going to start this blog.
              </p>
              <p className="py-2">
                Will it be succeful, who knows. Will it be consistent, probably not. Will it contain info about whatever
                random tech related stuff I will do, definetly.
              </p>
              <p className="py-2">
                I have a couple of small project you can check out with varying degrees of coolness.
              </p>
              <ol className="list-decimal">
                <li className="ml-8">
                  <a className="underline hover:text-blue-800" href="https://github.com/ibrahimmkhalid/ibkbd">
                    Keyboard stuff
                  </a>
                </li>
                <li className="ml-8">
                  <a className="underline hover:text-blue-800" href="https://github.com/ibrahimmkhalid/dotFiles">
                    Personal dot files
                  </a>
                </li>
                <li className="ml-8">
                  <a
                    className="underline hover:text-blue-800"
                    href="https://github.com/ibrahimmkhalid/llm-from-scratch"
                  >
                    LLM from scratch
                  </a>
                </li>
              </ol>
              <p className="py-2">
                That's it, that's the post. Hope you stick around to see what I will be up to in the near future.
              </p>
              <p className="py-2">
                <a className="underline hover:text-blue-800" href="https://linkedin.com/in/ibrahimmkhalid">
                  LinkedIn
                </a>
                <br />
                <a className="underline hover:text-blue-800" href="https://github.com/ibrahimmkhalid">
                  GitHub
                </a>
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  </>
);

Page.Create("en");
Page.AppendHead(<title>Hello World</title>);
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
