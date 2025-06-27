---
title: personal development environment
pubDate: 2024-08-10
description: Yet another developer talking about his development environment
---

Ah yes, the humble personal development environment. A system of configurations
and tweaks to optimize the way you work. So, totally for reasons other than
padding out my blog section, here is mine!

## Text Editor

During my undergrad I found out about VS Code for the first time and fell in
love. Compared to the full fat "Visual Studio" that we needed for class, VS
Code opened up in less than a moment and allowed me to get on with whatever
assignment I was given then. For the duration of my undergrad, it served me
quite well. The problem with VS Code is because of its plug and play nature, I
never really _understood_ why or how my program was executed (especially true
for some of my larger assignments) So when I started my first job right out of
undergrad working as a Laravel developer I was a little bit overwhelmed
when I had to navigate through many projects and files, or when I needed to
run a database query, or work with git, or even the terminal. It's hard to
think now, but that was a time where I did not even know how to really use
the terminal. One of my seniors saw me struggling one day and suggested
that I use PHPStorm by JetBrains and I fell in love. No more configuring
random `json` files, downloading packages, and trying to learn how to
integrate some VS Code package with another. Everything was tightly
integrated and just plain _beautiful_. I remember seeing the git tree
visualized and was amazed at the information at my fingertips. I could run
a query from anywhere and navigate all projects with ease.

But I was still missing something. I still had no idea how to use the terminal
well. Sure, I could `cd` and `ls` here and there and run some predefined
scripts, but I had no idea how anything was actually working under the hood.
Around this time I started to watch ThePrimeagen as well. He really hammered it
into my brain that I _should_ know how stuff actually works.

Long story short, I have now switched entirely to NeoVim. It took some time to
change my view on what my code editor was supposed to do, but eventually I
learned what my system, and what I, was capable of. I had, once again, fallen
in love. My NeoVim config can be found in my
[.dotfiles](https://github.com/ibrahimmkhalid/dotFiles) repo along with
configurations for all my other programs

## Operating Systems

Purely for development, the only choice is Linux. Windows does not have the
same level of customization as Linux and MacOS has too steep of a price tag.
However, I do more than just development, and so I am stuck with dual booting
Windows and Linux for the foreseeable future. When it comes to which of the
specific flavors of Linux I use, I just default to Ubuntu as it is the most
widely used and has the most support base. I have dabbled in other flavors such
as Arch and Fedora, but alas, Ubuntu gets the job done. Windows Subsystem for
Linux is an absolute must have however when I am using my windows PC. In fact,
I am writing this blog from inside WSL.

## Physical environment

While the above described my choices for what goes on inside my monitor, if we
move out one dimension we will see come into the real world. The real world
comes with some challenges. Namely, how do I get my brain waves into my
computer. Until we can link up with the computer, the best tool we have for
this is the humble keyboard. If you recall my journey with my text editor
choice, you might or might not be surprised to find that as I got more involved
with the inner workings of my computer, I also became more serious about the
ergonomics of how I interacted with it. The first change I made was to move to
a dedicated mechanical keyboard over the provided membrane keyboard that came
with my work laptop.

I dove straight into getting a 60% keyboard. This meant that I would lose my
arrow keys and fn keys to a layer. This was not too hard of a switch to make
given that I rarely used the fn keys and the arrow keys were mapped under wasd.
After using that keyboard for a couple of months I started to notice wrist
pains and wound up getting a palm rest. This alleviated the pain for a while
but was not a permanent solution either. Then I happened upon a video by [Ben
Vallack](https://www.youtube.com/@BenVallack) showcasing his journey down the
ergonomic keyboard rabbit hole. It did not take much for me to be convinced by
this and I soon found my self using an ultra minimal 36 key layout that follows
the same philosophy as the [Miryoku](https://github.com/manna-harbour/miryoku)
layout. I chose to keep with qwerty however as I still wanted to be as fast
when I have to use a regular keyboard. My keyboard files can be found in
[this](https://github.com/ibrahimmkhalid/ibkbd) repo.

## Miscellaneous

### Tmux

When actually inside the terminal, there is no better way to manage my tasks
than with tmux, it (with some scripts) allows me to quickly jump around and
between open thoughts I have. I dont usually use the split panes, but when I do
I am glad I started using tmux.

### Python

Currently I am pursuing a Master's degree in data analytics. This means that I
am almost always going to use Python for my assignments and projects. One
caveat of using Python in university is that I often have to use Jupyter
Notebooks. Given my current love of working in NeoVim and in the terminal, I do
not want to give those up for working in the browser. At first I would use VS
Code with vim emulation but it would not scratch that itch I needed scratching.
After some googling, I found a NeoVim plugin + python package that would let me
work in `.py` files in NeoVim and see the results in a browser window inside a
jupyter notebook. This package is called `jupyter-ascending` and it is an
absolute must have for my workflow.
