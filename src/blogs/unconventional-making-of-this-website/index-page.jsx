import { Page } from "@nakedjsx/core/page";
import { Header } from "../../components/header.jsx";

const BodyContent = () => (
  <>
    <div>
      <Header isBlog />
      <div className="flex flex-col" id="top">
        <main className="flex flex-col items-center px-4">
          <section className="mx-2 w-full py-12 md:mx-0 md:w-3/5 lg:w-2/5 md:py-24">
            <h1 className="text-3xl font-bold underline"># The Unconventional Making of This Website</h1>
            <div>
              <p className="py-2">
                Us developers, often, decide to make a personal website to showcase our work and put our name out there.
                These are often created from static site generators as it is quick and easy to deploy.
              </p>
              <ul className="list-disc">
                <li className="ml-8">CMS platform such as SquareSpace, WordPress, etc.</li>
                <li className="ml-8">
                  Static site generation using development kits such as Next.JS, this requires its own hosting, such as
                  Vercel.
                </li>
                <li className="ml-8">Static site generation using markdown and Jekyll, hosted on GitHub.</li>
              </ul>
              <p className="py-2">
                The simplest one for me was using Jekyll with GitHub. But it was not very fun. I could have gone towards
                Next.JS SSG with hosting on Vercel, but I skill-issued my self hard and decided to hack together a weird
                solution using some random JavaScript libraries. I will probably re-write this site in the future using
                an *ackshual* platform.
              </p>
              <h4 className="my-1 text-xl underline" id="npmwindowshopping">
                npm window shopping
              </h4>
              <p className="py-2">
                JavaScript is one of the languages of all time. Over all this time, many libraries/frameworks have come
                out to cater to all sorts of user needs. There's even an npm package for padding white space to the left
                of some text.
              </p>
              <p className="py-2">
                After some googling I found two libraries that seemed promising for my use case. The first is is{" "}
                <code className="border border-black bg-gray-100 px-1">{`NakedJSX`}</code>, which allows me to write JSX
                files and "compile" them into html files. The second library I used was{" "}
                <code className="border border-black bg-gray-100 px-1">{`showdown`}</code>. Showdown allows for easy
                conversion between HTML and markdown.
              </p>
              <p className="py-2">
                With the help of these packages, some tailwindcss sprinkled in, I was ready to start developing my
                online presence.
              </p>
              <h4 className="my-1 text-xl underline" id="buildprocess">
                Build process
              </h4>
              <p className="py-2">
                The majority of my site is created directly using JSX files, which are converted to html using the{" "}
                <code className="border border-black bg-gray-100 px-1">{`npx nakedsjx`}</code> command. The blog content
                is a bit harder to do as the <code className="border border-black bg-gray-100 px-1">{`showdown`}</code>{" "}
                package converts markdown to HTML, and not JSX. To solve this hurdle, I created a script that uses{" "}
                <code className="border border-black bg-gray-100 px-1">{`showdown`}</code> to convert the markdown to an
                html representation, add some tailwind classes, and paste the contents to a template jsx file.
              </p>
              <p className="py-2">
                This file is then added to the <code className="border border-black bg-gray-100 px-1">{`src`}</code>{" "}
                directory where I open an edit it for any inconsistencies and committed to git history.
              </p>
              <h4 className="my-1 text-xl underline" id="takeaway">
                Takeaway
              </h4>
              <p className="py-2">
                Though this is not the best solution, it is a solution that I came up with and understand in and out. If
                you take a look at my work history, you will see that I do not have much front end experience or
                JavaScript experience. This little project is an attempt to rectify that.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  </>
);

Page.Create("en");
Page.AppendHead(<title>The Unconventional Making of This Website</title>);
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
