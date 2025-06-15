import { Page } from "@nakedjsx/core/page";
import { Header } from "../../components/header.jsx";

const BodyContent = () => (
  <>
    <div>
      <Header isBlog />
      <div className="flex flex-col" id="top">
        <main className="flex flex-col items-center px-4">
          <section className="mx-2 w-full py-12 md:mx-0 md:w-3/5 md:py-24 lg:w-2/5">
            <h1 className="text-4xl font-bold underline"># I guess I'm a master now?</h1>
            <div>
              <p className="py-2">
                After 2 years of back to back work, long overnight binges, and using too many Google Colab credits, I
                have successfully graduated with a degree in the Master's of Science in Data Analytics from San Jose
                State University in the month of May, 2025.
              </p>
              <h2 className="my-2 text-3xl font-bold underline" id="thanks">
                Thanks
              </h2>
              <p className="py-2">
                Over the course of my four semesters here, I met some amazing people that helped me grow in my career
                both as a data analyst and as a person. I want to especially thank all my professors; Melisa Ingle,
                Ronald Mak, Shih Yu Chang, Guannan Liu, Linsey Pang, Taehee Jeong, and Simon Shim. They taught me the
                skills to become a better data analyst.
              </p>
              <h2 className="my-2 text-3xl font-bold underline" id="capstoneproject">
                Capstone project
              </h2>
              <p className="py-2 italic">Obstacle Detection for Drone Flight Path</p>
              <p className="py-2">
                In a previous{" "}
                <a
                  className="underline hover:text-blue-800"
                  href="https://ibrahimkhalid.me/blogs/fall-2024-retrospective/"
                >
                  post
                </a>
                , I mentioned that I would make the link to our project live after completion. Well, it is now done, so
                here is the{" "}
                <a className="underline hover:text-blue-800" href="https://github.com/sjsu2024-data298-team6/">
                  link
                </a>{" "}
                to the team page with all the relevant repositories. You can visit{" "}
                <a className="underline hover:text-blue-800" href="https://sjsu-msda-f24-team6-webportal.vercel.app/">
                  this
                </a>{" "}
                link to see more information about the project technicalities.
              </p>
              <p className="py-2">
                Though the application of the project is quite broad, it began as a system specifically for drone flight
                path obstacle avoidance. As such, much of our literature and examples on the live page are based around
                the popular VisDrone dataset, which features images of cars, pedestrians, trucks, etc from a bird's eye
                view. Now lets move on to a brief overview of the project. In short, there are 3 main components that
                make up the project. The front end experience, the preprocessor, and the trainer.
              </p>
              <h3 className="my-2 text-2xl font-bold underline" id="thefrontendexperience">
                The front end experience
              </h3>
              <p className="py-2">
                The website linked above is primarily the experience the user will use. The user is someone who is
                interested in some sort of drone based application (warehouse inventory management, for example) and
                they want to make sure that those drones have obstacle avoidance capabilities. There are four tasks the
                user can perform: upload a dataset for preprocessing, select a model to train on a given dataset, run
                inference on a selected model directly in the browser, and compare all models with each other.
              </p>
              <p className="py-2">
                Both the dataset uploading task and the model training task hit an API endpoint on our AWS, which in
                turn runs an AWS lambda function. The goal of this lambda function is to launch the appropriate
                instances for either preprocessing or training. The preprocessing runs on an AWS t2.medium instance
                while the training runs on an AWS g5.2xlarge instance. Both instances save their appropriate data to an
                S3 bucket as well as write some information to our postgresql database.
              </p>
              <p className="py-2">
                Running inference and comparing models is done client-side in the browser using tensorflow-js and
                plotly-js respectively. This is possible by reading most of the data from our postgresql database.
              </p>
              <h3 className="my-2 text-2xl font-bold underline" id="thepreprocessor">
                The preprocessor
              </h3>
              <p className="py-2">
                When the user opens the preprocessing page on the application, they are presented with a simple form.
                This form asks for the name of the dataset, the source link of the dataset, the type of the dataset, and
                whether the user wants to combine with a previous dataset.
              </p>
              <p className="py-2">
                After hitting submit, the appropriate EC2 instance is activated. This then downloads the dataset from
                the source link, and based on the selected type, it converts it into a common format. So far, we added
                support for{" "}
                <a className="underline hover:text-blue-800" href="https://universe.roboflow.com/">
                  RoboFlow
                </a>{" "}
                links as well as links to the{" "}
                <a className="underline hover:text-blue-800" href="https://github.com/VisDrone/VisDrone-Dataset">
                  VisDrone
                </a>{" "}
                zip files. The format we convert to is the{" "}
                <a className="underline hover:text-blue-800" href="https://github.com/ultralytics/ultralytics">
                  ultralytics
                </a>{" "}
                format and the{" "}
                <a className="underline hover:text-blue-800" href="https://arxiv.org/abs/1405.0312">
                  coco
                </a>{" "}
                format.
              </p>
              <p className="py-2">
                After creating both datasets, they are added to our S3 bucket and entries are made in our postgresql
                database pointing to those datasets.
              </p>
              <h3 className="my-2 text-2xl font-bold underline" id="thetrainer">
                The trainer
              </h3>
              <p className="py-2">
                Similar to the preprocessor, the user is shown a simple form where they fill in a number of fields. The
                most important being which model to train, which dataset to train on, and what parameters should be used
                by the trainer. Hitting submit will launch the GPU enabled instance, starting the training process.
              </p>
              <p className="py-2">
                Once training is complete, we also take steps to convert the model formats from{" "}
                <code className="border border-black bg-gray-100 px-1">{`.pt`}</code> to a format readable by
                tensorflow-js. Doing so allows us to load the model on the client machine. This approach was used as the
                use case of our project is not in the browser, but in an actual drone. As such, we thought it a fair
                trade-off to run the model in the browser for evaluation purposes only.
              </p>
              <h2 className="my-2 text-3xl font-bold underline" id="whatsnext">
                What's next?
              </h2>
              <p className="py-2">
                Well, as of the twenty second of May, in the year of 2025, I am no longer a student. I am still a
                life-long learner. The current plan is to work on some side projects while looking for a full time
                position. I may have something cooking in terms of working at a startup with an old friend, but that
                might be a story for the future. Keep an eye out on this blog for updates.
              </p>
              <p className="py-2">
                Shameless plug, hit me up on{" "}
                <a className="underline hover:text-blue-800" href="https://linkedin.com/in/ibrahimmkhalid">
                  LinkedIn
                </a>{" "}
                or{" "}
                <a className="underline hover:text-blue-800" href="mailto:ibrahimmkhalid@gmail.com">
                  email
                </a>{" "}
                if you are looking for someone to hire in the domain of software engineering or machine
                learning/artificial intelligence.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  </>
);

Page.Create("en");
Page.AppendHead(<title>I guess I'm a master now?</title>);
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
