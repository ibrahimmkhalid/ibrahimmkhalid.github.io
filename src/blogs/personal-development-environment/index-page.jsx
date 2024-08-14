import { Page } from "@nakedjsx/core/page";
import { Header } from "../../components/header.jsx";

const BodyContent = () => (
  <>
    <div>
      <Header isBlog />
      <div className="flex flex-col" id="top">
        <main className="flex flex-col items-center px-4">
          <section className="mx-2 w-full py-12 md:mx-0 md:w-3/5 md:py-24 lg:w-2/5">
            <h1 className="text-4xl font-bold underline"># Personal Development Environment</h1>
            <div>
              <p className="py-2">
                Ah yes, the humble personal development environment. A system of configurations and tweaks to optimize
                the way you work. So, totally for reasons other than padding out my blog section, here is mine!
              </p>
              <h3 className="my-2 text-3xl font-bold underline" id="texteditor">
                Text Editor
              </h3>
              <p className="py-2">
                During my undergrad I found out about VS Code for the first time and fell in love. Compared to the full
                fat "Visual Studio" that we needed for class, VS Code opened up in less than a moment and allowed me to
                get on with whatever assignment I was given then. For the duration of my undergrad, it served me quite
                well. The problem with VS Code is because of its plug and play nature, I never really <i>understood</i>{" "}
                why or how my program was executed (especially true for some of my larger assignments) So when I started
                my first job right out of undergrad working as a Laravel developer I was a little bit overwhelmed when I
                had to navigate through many projects and files, or when I needed to run a database query, or work with
                git, or even the terminal. It's hard to think now, but that was a time where I did not even know how to
                really use the terminal. One of my seniors saw me struggling one day and suggested that I use PHPStorm
                by JetBrains and I fell in love. No more configuring random{" "}
                <code className="border border-black bg-gray-100 px-1">{`json`}</code> files, downloading packages, and
                trying to learn how to integrate some VS Code package with another. Everything was tightly integrated
                and just plain <i>beautiful</i>. I remember seeing the git tree visualized and was amazed at the
                information at my fingertips. I could run a query from anywhere and navigate all projects with ease.
              </p>
              <p className="py-2">
                But I was still missing something. I still had no idea how to use the terminal well. Sure, I could{" "}
                <code className="border border-black bg-gray-100 px-1">{`cd`}</code> and{" "}
                <code className="border border-black bg-gray-100 px-1">{`ls`}</code> here and there and run some
                predefined scripts, but I had no idea how anything was actually working under the hood. Around this time
                I started to watch ThePrimeagen as well. He really hammered it into my brain that I <i>should</i> know
                how stuff actually works.
              </p>
              <p className="py-2">
                Long story short, I have now switched entirely to NeoVim. It took some time to change my view on what my
                code editor was supposed to do, but eventually I learned what my system, and what I, was capable of. I
                had, once again, fallen in love. My NeoVim config can be found in my{" "}
                <a className="underline hover:text-blue-800" href="https://github.com/ibrahimmkhalid/dotFiles">
                  .dotfiles
                </a>{" "}
                repo along with configurations for all my other programs
              </p>
              <h3 className="my-2 text-3xl font-bold underline" id="operatingsystems">
                Operating Systems
              </h3>
              <p className="py-2">
                Purely for development, the only choice is Linux. Windows does not have the same level of customization
                as Linux and MacOS has too steep of a price tag. However, I do more than just development, and so I am
                stuck with dual booting Windows and Linux for the foreseeable future. When it comes to which of the
                specific flavors of Linux I use, I just default to Ubuntu as it is the most widely used and has the most
                support base. I have dabbled in other flavors such as Arch and Fedora, but alas, Ubuntu gets the job
                done. Windows Subsystem for Linux is an absolute must have however when I am using my windows PC. In
                fact, I am writing this blog from inside WSL.
              </p>
              <h3 className="my-2 text-3xl font-bold underline" id="physicalenvironment">
                Physical environment
              </h3>
              <p className="py-2">
                While the above described my choices for what goes on inside my monitor, if we move out one dimension we
                will see come into the real world. The real world comes with some challenges. Namely, how do I get my
                brain waves into my computer. Until we can link up with the computer, the best tool we have for this is
                the humble keyboard. If you recall my journey with my text editor choice, you might or might not be
                surprised to find that as I got more involved with the inner workings of my computer, I also became more
                serious about the ergonomics of how I interacted with it. The first change I made was to move to a
                dedicated mechanical keyboard over the provided membrane keyboard that came with my work laptop.
              </p>
              <p className="py-2">
                I dove straight into getting a 60% keyboard. This meant that I would lose my arrow keys and fn keys to a
                layer. This was not too hard of a switch to make given that I rarely used the fn keys and the arrow keys
                were mapped under wasd. After using that keyboard for a couple of months I started to notice wrist pains
                and wound up getting a palm rest. This alleviated the pain for a while but was not a permanent solution
                either. Then I happened upon a video by{" "}
                <a className="underline hover:text-blue-800" href="https://www.youtube.com/@BenVallack">
                  Ben Vallack
                </a>{" "}
                showcasing his journey down the ergonomic keyboard rabbit hole. It did not take much for me to be
                convinced by this and I soon found my self using an ultra minimal 36 key layout that follows the same
                philosophy as the{" "}
                <a className="underline hover:text-blue-800" href="https://github.com/manna-harbour/miryoku">
                  Miryoku
                </a>{" "}
                layout. I chose to keep with qwerty however as I still wanted to be as fast when I have to use a regular
                keyboard. My keyboard files can be found in{" "}
                <a className="underline hover:text-blue-800" href="https://github.com/ibrahimmkhalid/ibkbd">
                  this
                </a>{" "}
                repo.
              </p>
              <h3 className="my-2 text-3xl font-bold underline" id="miscellaneous">
                Miscellaneous
              </h3>
              <h4 className="my-1 text-2xl underline" id="tmux">
                Tmux
              </h4>
              <p className="py-2">
                When actually inside the terminal, there is no better way to manage my tasks than with tmux, it (with
                some scripts) allows me to quickly jump around and between open thoughts I have. I dont usually use the
                split panes, but when I do I am glad I started using tmux.
              </p>
              <h4 className="my-1 text-2xl underline" id="python">
                Python
              </h4>
              <p className="py-2">
                Currently I am pursuing a Master's degree in data analytics. This means that I am almost always going to
                use Python for my assignments and projects. One caveat of using Python in university is that I often
                have to use Jupyter Notebooks. Given my current love of working in NeoVim and in the terminal, I do not
                want to give those up for working in the browser. At first I would use VS Code with vim emulation but it
                would not scratch that itch I needed scratching. After some googling, I found a NeoVim plugin + python
                package that would let me work in <code className="border border-black bg-gray-100 px-1">{`.py`}</code>{" "}
                files in NeoVim and see the results in a browser window inside a jupyter notebook. This package is
                called <code className="border border-black bg-gray-100 px-1">{`jupyter-ascending`}</code> and it is an
                absolute must have for my workflow.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  </>
);

Page.Create("en");
Page.AppendHead(<title>personal development environment</title>);
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
