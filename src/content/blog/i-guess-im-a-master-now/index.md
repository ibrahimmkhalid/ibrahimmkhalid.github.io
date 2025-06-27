---
title: I guess I'm a master now?
pubDate: 2025-05-22
tagline: Capstone project retrospective
---

After 2 years of back to back work, long overnight binges, and using too many
Google Colab credits, I have successfully graduated with a degree in the
Master's of Science in Data Analytics from San Jose State University in the
month of May, 2025.

# Thanks

Over the course of my four semesters here, I met some amazing people that
helped me grow in my career both as a data analyst and as a person. I want to
especially thank all my professors; Melisa Ingle, Ronald Mak, Shih Yu Chang,
Guannan Liu, Linsey Pang, Taehee Jeong, and Simon Shim. They taught me the
skills to become a better data analyst.

# Capstone project

_Obstacle Detection for Drone Flight Path_

In a previous [post](https://ibrahimkhalid.me/blogs/fall-2024-retrospective/),
I mentioned that I would make the link to our project live after completion.
Well, it is now done, so here is the
[link](https://github.com/sjsu2024-data298-team6/) to the team page with all
the relevant repositories. You can visit
[this](https://sjsu-msda-f24-team6-webportal.vercel.app/) link to see more
information about the project technicalities.

Though the application of the project is quite broad, it began as a system
specifically for drone flight path obstacle avoidance. As such, much of our
literature and examples on the live page are based around the popular VisDrone
dataset, which features images of cars, pedestrians, trucks, etc from a bird's
eye view. Now lets move on to a brief overview of the project. In short, there
are 3 main components that make up the project. The front end experience, the
preprocessor, and the trainer.

## The front end experience

The website linked above is primarily the experience the user will use. The
user is someone who is interested in some sort of drone based application
(warehouse inventory management, for example) and they want to make sure that
those drones have obstacle avoidance capabilities. There are four tasks the
user can perform: upload a dataset for preprocessing, select a model to train
on a given dataset, run inference on a selected model directly in the browser,
and compare all models with each other.

Both the dataset uploading task and the model training task hit an API endpoint
on our AWS, which in turn runs an AWS lambda function. The goal of this lambda
function is to launch the appropriate instances for either preprocessing or
training. The preprocessing runs on an AWS t2.medium instance while the
training runs on an AWS g5.2xlarge instance. Both instances save their
appropriate data to an S3 bucket as well as write some information to our
postgresql database.

Running inference and comparing models is done client-side in the browser using
tensorflow-js and plotly-js respectively. This is possible by reading most of
the data from our postgresql database.

## The preprocessor

When the user opens the preprocessing page on the application, they are
presented with a simple form. This form asks for the name of the dataset, the
source link of the dataset, the type of the dataset, and whether the user wants
to combine with a previous dataset.

After hitting submit, the appropriate EC2 instance is activated. This then
downloads the dataset from the source link, and based on the selected type, it
converts it into a common format. So far, we added support for
[RoboFlow](https://universe.roboflow.com/) links as well as links to the
[VisDrone](https://github.com/VisDrone/VisDrone-Dataset) zip files. The format
we convert to is the [ultralytics](https://github.com/ultralytics/ultralytics)
format and the [coco](https://arxiv.org/abs/1405.0312) format.

After creating both datasets, they are added to our S3 bucket and entries are
made in our postgresql database pointing to those datasets.

## The trainer

Similar to the preprocessor, the user is shown a simple form where they fill in
a number of fields. The most important being which model to train, which
dataset to train on, and what parameters should be used by the trainer. Hitting
submit will launch the GPU enabled instance, starting the training process.

Once training is complete, we also take steps to convert the model formats from
`.pt` to a format readable by tensorflow-js. Doing so allows us to load the
model on the client machine. This approach was used as the use case of our
project is not in the browser, but in an actual drone. As such, we thought it a
fair trade-off to run the model in the browser for evaluation purposes only.

# What's next?

Well, as of the twenty second of May, in the year of 2025, I am no longer a
student. I am still a life-long learner. The current plan is to work on some
side projects while looking for a full time position. I may have something
cooking in terms of working at a startup with an old friend, but that might be
a story for the future. Keep an eye out on this blog for updates.

Shameless plug, hit me up on [LinkedIn](https://linkedin.com/in/ibrahimmkhalid)
or [email](mailto:ibrahimmkhalid@gmail.com) if you are looking for someone to
hire in the domain of software engineering or machine learning/artificial
intelligence.
