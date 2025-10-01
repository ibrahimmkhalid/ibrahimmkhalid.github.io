---
title: Attending the Humane Tech Hackathon
pubDate: 2025-07-04
description: A brief log of my experience attending the Humane Tech Hackathon hosted by Erika Anderson from Storytell.ai
---

# The Hackathon

This previous weekend, I was able to attend the 'Humane Tech Hackathon' hosted
by [Erika Anderson](https://www.linkedin.com/in/erikamanderson). The gist of
the event was to create an application that used AI in a way that improved the
lives of people in a meaningful way. What this meant in practice was focusing
on an area where we can use the power of LLMs to summarize, re-contextualize,
or improvise information that may or may not have been available to them
before.

There were many participants from all walks, including people who had never
coded before! In the end we formed a total of 11 teams. There were some amazing
submissions, including a 911 first responder assistance portal, a personalized
and interactive bedtime story app, and a student-teacher lesson plan assistance
tool. Check out Erika's
[blog](https://humanetech.substack.com/p/vibe-coding-for-humanity) about the
event for more details.

Another fun facet of this hackathon is that it partnered with
[Toolhouse](https://toolhouse.ai/) and [WindSurf](https://windsurf.com/) who
graciously provided a free premium membership to their respective services for
the hackathon.

# By The People

> [The] government of the people, by the people, for the people, shall not perish from the earth  
> \- <cite>Abraham Lincoln</cite>

The name of our team and our app comes from the famous quote from Abraham
Lincoln during the Gettysburg Address. The problem we identified in our current
political climate was that though the government was 'by the people', often
times, the people did not know how they can affect public policy.

Our team consisted of myself and three other awesome people I met that day,
[Max Gaspers Scott](https://www.linkedin.com/in/max-gaspers-scott-575b3a21a),
[Gisela Kottmeier](https://www.linkedin.com/in/giselakottmeier), and [Amarpreet
Kaur](https://www.linkedin.com/in/amarpreet-kaur-). Amarpreet came from the
realm of policy politics where she was working at becoming a US diplomat, but
decided to pivot to a more tech focused policy making role. She viewed this
hackathon as a way to transition into the space and so came up with the idea
behind our project.

The app was designed to simplify political engagement by allowing users to view
current bills and issues being discussed, as well as contact their
representatives. Additionally, it featured a chatbot powered by Toolhouse,
which enabled users to ask questions about the bills to better understand the
issues. The chatbot also helped draft scripts to persuade representatives in
support of or against specific legislation. In doing so, we show how AI can
improve political participation rather than extract engagement for profit.

I worked on creating the backend for the service, which was responsible for
connecting the main frontend to the government APIs as well as instantiating
the chatbot with the correct context. The backend was written in Flask and
hosted on Sevalla. 

Max worked in the Toolhouse dashboard to create the necassary chat functions
and endpoints to power our AI features. This included writing out the system
prompt templates and enabling the toolhouse chat interface to become accessible
by the frontend.

Gisela worked on the frontend, making sure that the user was able to navigate
the page with ease. React was used for the frontend along with tailwind for
styling. The app was hosted using a readily available hosting platform.

Amarpreet was the main source of political knowledge for our application,
giving us the insights and performing the research needed so that we were on
the right track. 


# Conclusion

Unfortunately, we did not win the hackathon. This was due to possible feature
creep and misunderstanding the capabilities of some of the tools we used.
However, this was a great learning opportunity for all of us involved and I
hope to take the lessons learned here to my future endevours.
