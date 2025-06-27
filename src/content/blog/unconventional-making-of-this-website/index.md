---
title: The Unconventional Making of This Website
pubDate: 2024-07-22
tagline:
---

Us developers, often, decide to make a personal website to showcase our work
and put our name out there. These are often created from static site generators
as it is quick and easy to deploy.

- CMS platform such as SquareSpace, WordPress, etc.
- Static site generation using development kits such as Next.JS, this requires
  its own hosting, such as Vercel.
- Static site generation using markdown and Jekyll, hosted on GitHub.

The simplest one for me was using Jekyll with GitHub. But it was not very fun.
I could have gone towards Next.JS SSG with hosting on Vercel, but I
skill-issued my self hard and decided to hack together a weird solution using
some random JavaScript libraries. I will probably re-write this site in the
future using an \*ackshual\* platform.

### npm window shopping

JavaScript is one of the languages of all time. Over all this time, many
libraries/frameworks have come out to cater to all sorts of user needs. There's
even an npm package for padding white space to the left of some text.

After some googling I found two libraries that seemed promising for my use
case. The first is is `NakedJSX`, which allows me to write JSX files and
"compile" them into html files. The second library I used was `showdown`.
Showdown allows for easy conversion between HTML and markdown.

With the help of these packages, some tailwindcss sprinkled in, I was ready to
start developing my online presence.

### Build process

The majority of my site is created directly using JSX files, which are
converted to html using the `npx nakedsjx` command. The blog content is a bit
harder to do as the `showdown` package converts markdown to HTML, and not JSX.
To solve this hurdle, I created a script that uses `showdown` to convert the
markdown to an html representation, add some tailwind classes, and paste the
contents to a template jsx file.

This file is then added to the `src` directory where I open an edit it for any
inconsistencies and committed to git history.

### Takeaway

Though this is not the best solution, it is a solution that I came up with and
understand in and out. If you take a look at my work history, you will see that
I do not have much front end experience or JavaScript experience. This little
project is an attempt to rectify that.
