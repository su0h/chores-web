<img title="Logo" alt="Logo" src="/screenshots/Chores-Logo.png">

# Chores
**Chores** is a chore-tracking full-stack web application that I built solely for *practice* (and potentially for personal household use). It simply displays the chore assignments for the day with the help of both Spring Boot and Angular. This repository contains the *frontend* aspect of this project (proceed [here](https://www.github.com/su0h/chores-host) for the *backend* repository).

This Angular-based frontend displays the data being served by the backend's API. A button to "unshift" the current chore rotation is also provided for the users to be able to interact with the API.

## ...but why?
For context, there are three (3) of us who are sharing the chore workload here at home. Each person normally has one task to do at a time, and the task assignment "shifts" on a daily basis to rotate the tasks among us (twice if it is a weekend or a holiday). 

More often than not, everyone here in the household is unable to keep track of the task assignments for the day. *Quite weird if you think of it.* Every evening, someone would be asking "Sino hain?" *Who will prepare the dining table?* "Sino ligpit?" *Who will clean up the dining table?* "Sino hugas?" *Who will wash the dishes?*

This "collective second-guessing" can sometimes be a tedious scenario to deal with. As such, as a part of my personal desire to automate as many things as possible here at home, I have decided to work on **Chores** for the convenient dissemination of information re: the chore assignment for the day.

*P.S. I decided to add a Spring Boot backend since I needed to keep track of the current state of task assignments, and I also needed to keep track of when to shift once or twice (or even undo a shift when no chores were done for a certain schedule; this required a database). I simply could not make this work with an Angular frontend alone.*

## Installation
1. Build a Docker image using the Dockerfile provided at the root directory of the project: `docker build -t <image_name> .`
2. Run the image in a container with the following command: `docker run -p 4200:4200 <image_name>`
3. Access the Angular application via `http://localhost:4200`
4. Though this application will run on its own, to fully experience Chores, also follow the installation instructions found in the `chores-host` repository.

## Screenshots
<img title="Mobile View" alt="Mobile View" src="/screenshots/mobile-view.png" height="300px">
<img title="Desktop View" alt="Desktop View" src="/screenshots/desktop-view.png" height="300px">