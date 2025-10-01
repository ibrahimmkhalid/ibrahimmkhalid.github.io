---
title: Fall 2024 retrospective
pubDate: 2024-12-15
description: Semester 3 out of 4!
---

Semester 3 of 4 complete! This was one of the more challenging semesters I have
taken so far, both in terms of work load and work complexity. But because of
this, I believe I have vastly improved my skills as an engineer as well as a
researcher. Let's take a look course by course.

# Data Mining

The objectives of this course were to learn how to extract meaningful
information from a large pool of data. The main topics explored here are the
following

- Data Mining
- Exploratory Data Analysis
- Principal Component Analysis and Clustering
- Linear/Polynomial Regression
- Logistic Regression
- Naive Bayes Classification
- Decision Tree Classification
- Ensemble Learning

Not much to write home about, we covered most of these topics in previous
courses. Though the content of the class was easier than i expected, the
professor was a tough grader and often kept us on our toes. The culmination of
this course was a project to perform data analysis on some social problem and
effectively extract useful information from a large dataset.

Our project explored the trends of divorce statistics from a longitudinal
conducted from 1980 to 2000. This particular dataset was quite massive with
5,000 features and around 2,500 entries. My group and I might have been a bit
over confident going into this project due to the sheer size of the dataset. It
took us too long to start finding some actual information, but in the end we
were able to present a decent enough project to the professor.

# Deep Learning

Probably one of the best classes I have taken since starting this degree. We
covered so many topics from the basics of neural networks, to convolutional
networks, to recurrent networks, and of course, LLMs. Not only did we cover all
these technical topics, but we also covered the history of artificial
intelligence and used recently published arXiv papers as reading material.

Over the course of the semester, we were tested with 2 "labs" and one group
project. Each lab was divided into 3 parts and each part took one of the
concepts learned in class and turned it up a notch.

From "Lab 1", the most interesting problem that I worked on was implementing a
recommender system following the Wide-Deep [paper](https://arxiv.org/abs/1606.07792) released by Google in 2016 in PyTorch
from scratch. The dataset consisted of a large dataset from the "MyAnimeList"
website. Yes, I ended up building an anime recommender system.

In "Lab 2", we also built the [StyleGAN](https://arxiv.org/abs/1812.04948) paper from scratch in PyTorch. Using a dataset of comic book faces, we needed
to create a model capable of recreating those faces. Due to the scope of the
paper and the limited time of the course, we were only instructed to complete
the basic generator and discriminator blocks without needing to implement the
style extraction elements that made this paper such a breakthrough in GAN style
image generation. I may take it up as a side project in the future.

The group project had us select a public kaggle competition and use whatever we
had learned in the course to compete in that competition. To be completely
honest, we bit off more than we could chew with the selected competition as we
had not expected the semester to ramp up in difficulty like it did. I do think
however that this was a very good learning experience as I was able to see what
cutting edge techniques and models were being used by the other participants.

# Starting the capstone project

Since I am working towards a degree that focuses on applications, its not
surprising that in place of a Master's thesis, we are working on a Master's
project that will cover my final 2 semesters at the university. Myself, along
with 3 of my close friends, have started working on a project tentatively
called "Obstacle Detection for Drone Flight Paths." The goal of this project is
to create a fully cloud hosted, end to end, machine learning pipeline that
handles the specifics of our project. The goal of our project is as follows

- Detect objects
- In real time
- With high accuracy
- On low-end hardware

So far in this semester we have done extensive literature surveys and testing
of base models on the [VisDrone](https://github.com/VisDrone/VisDrone-Dataset) dataset. In the upcoming semester, we hope to improve our model architectures,
improve our dataset, and create a more robust cloud pipeline. Since we are
currently working on the project, I cannot share it here until it is complete.
When that is done, I will update this page with the link. (Edit to add links: [blog](/blogs/i-guess-im-a-master-now/), [project](https://sjsu-msda-f24-team6-webportal.netlify.app/))

# Wrapping up

Overall, I think this was quite a challenging semester, but also one where I
had to step out of my comfort zone. I got to study leading edge papers, find
answers to real questions, implement a high level solutions from scratch, and
start working on a long term project. Excited to start, hopefully, my last
semester this coming January!
