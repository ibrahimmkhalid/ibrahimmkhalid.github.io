import { Page } from "@nakedjsx/core/page";
import { Header } from "../../components/header.jsx";

const BodyContent = () => (
  <>
    <div>
      <Header isBlog />
      <div className="flex flex-col" id="top">
        <main className="flex flex-col items-center px-4">
          <section className="mx-2 w-full py-12 md:mx-0 md:w-3/5 md:py-24 lg:w-2/5">
            <h1 className="text-4xl font-bold underline"># Fall 2024 retrospective</h1>
            <div>
              <p className="py-2">
                Semester 3 of 4 complete! This was one of the more challenging semesters I have taken so far, both in
                terms of work load and work complexity. But because of this, I believe I have vastly improved my skills
                as an engineer as well as a researcher. Let's take a look course by course.
              </p>
              <h2 className="my-2 text-3xl font-bold underline" id="datamining">
                Data Mining
              </h2>
              <p className="py-2">
                The objectives of this course were to learn how to extract meaningful information from a large pool of
                data. The main topics explored here are the following
              </p>
              <ul className="list-disc">
                <li className="ml-8">Data Mining</li>
                <li className="ml-8">Exploratory Data Analysis</li>
                <li className="ml-8">Principal Component Analysis and Clustering</li>
                <li className="ml-8">Linear/Polynomial Regression</li>
                <li className="ml-8">Logistic Regression</li>
                <li className="ml-8">Naive Bayes Classification</li>
                <li className="ml-8">Decision Tree Classification</li>
                <li className="ml-8">Ensemble Learning</li>
              </ul>
              <p className="py-2">
                Not much to write home about, we covered most of these topics in previous courses. Though the content of
                the class was easier than i expected, the professor was a tough grader and often kept us on our toes.
                The culmination of this course was a project to perform data analysis on some social problem and
                effectively extract useful information from a large dataset.
              </p>
              <p className="py-2">
                Our project explored the trends of divorce statistics from a longitudinal conducted from 1980 to 2000.
                This particular dataset was quite massive with 5,000 features and around 2,500 entries. My group and I
                might have been a bit over confident going into this project due to the sheer size of the dataset. It
                took us too long to start finding some actual information, but in the end we were able to present a
                decent enough project to the professor.
              </p>
              <h2 className="my-2 text-3xl font-bold underline" id="deeplearning">
                Deep Learning
              </h2>
              <p className="py-2">
                Probably one of the best classes I have taken since starting this degree. We covered so many topics from
                the basics of neural networks, to convolutional networks, to recurrent networks, and of course, LLMs.
                Not only did we cover all these technical topics, but we also covered the history of artificial
                intelligence and used recently published arXiv papers as reading material.
              </p>
              <p className="py-2">
                Over the course of the semester, we were tested with 2 "labs" and one group project. Each lab was
                divided into 3 parts and each part took one of the concepts learned in class and turned it up a notch.
              </p>
              <p className="py-2">
                From "Lab 1", the most interesting problem that I worked on was implementing a recommender system
                following the Wide-Deep{" "}
                <a className="underline hover:text-blue-800" href="https://arxiv.org/abs/1606.07792">
                  paper
                </a>{" "}
                released by Google in 2016 in PyTorch from scratch. The dataset consisted of a large dataset from the
                "MyAnimeList" website. Yes, I ended up building an anime recommender system.
              </p>
              <p className="py-2">
                In "Lab 2", we also built the{" "}
                <a className="underline hover:text-blue-800" href="https://arxiv.org/abs/1812.04948">
                  StyleGAN
                </a>{" "}
                paper from scratch in PyTorch. Using a dataset of comic book faces, we needed to create a model capable
                of recreating those faces. Due to the scope of the paper and the limited time of the course, we were
                only instructed to complete the basic generator and discriminator blocks without needing to implement
                the style extraction elements that made this paper such a breakthrough in GAN style image generation. I
                may take it up as a side project in the future.
              </p>
              <p className="py-2">
                The group project had us select a public kaggle competition and use whatever we had learned in the
                course to compete in that competition. To be completely honest, we bit off more than we could chew with
                the selected competition as we had not expected the semester to ramp up in difficulty like it did. I do
                think however that this was a very good learning experience as I was able to see what cutting edge
                techniques and models were being used by the other participants.
              </p>
              <h2 className="my-2 text-3xl font-bold underline" id="startingthecapstoneproject">
                Starting the capstone project
              </h2>
              <p className="py-2">
                Since I am working towards a degree that focuses on applications, its not surprising that in place of a
                Master's thesis, we are working on a Master's project that will cover my final 2 semesters at the
                university. Myself, along with 3 of my close friends, have started working on a project tentatively
                called "Obstacle Detection for Drone Flight Paths." The goal of this project is to create a fully cloud
                hosted, end to end, machine learning pipeline that handles the specifics of our project. The goal of our
                project is as follows
              </p>
              <ul className="list-disc">
                <li className="ml-8">Detect objects</li>
                <li className="ml-8">In real time</li>
                <li className="ml-8">With high accuracy</li>
                <li className="ml-8">On low-end hardware</li>
              </ul>
              <p className="py-2">
                So far in this semester we have done extensive literature surveys and testing of base models on the{" "}
                <a className="underline hover:text-blue-800" href="https://github.com/VisDrone/VisDrone-Dataset">
                  VisDrone
                </a>{" "}
                dataset. In the upcoming semester, we hope to improve our model architectures, improve our dataset, and
                create a more robust cloud pipeline. Since we are currently working on the project, I cannot share it
                here until it is complete. When that is done, I will update this page with the link.
              </p>
              <h2 className="my-2 text-3xl font-bold underline" id="wrappingup">
                Wrapping up
              </h2>
              <p className="py-2">
                Overall, I think this was quite a challenging semester, but also one where I had to step out of my
                comfort zone. I got to study leading edge papers, find answers to real questions, implement a high level
                solutions from scratch, and start working on a long term project. Excited to start, hopefully, my last
                semester this coming January!
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  </>
);

Page.Create("en");
Page.AppendHead(<title>Fall 2024 retrospective</title>);
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
