[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Grade Trakr

Grade Trakr is a single-page application for students to log academic courses.
The app takes a minimalistic approach for users to manage and keep track of
courses taken and corresponding grades.

This app is used in conjuction with the GradeTrakr API.

Link to deployed App: https://andyjzhong.github.io/capstone/

(Additional links to repos are provided in the Links section below.)

## ERD
![ERD](/ERD.JPG)

## General Approach

### API

I started my capstone project by first focusing my efforts on building a
back-end API first. My experience with building an Express API and recent
exposure to MongoDB during our Team Project made picking Express an easy
decision for me. I also love having the flexibility of changing my models
without dropping tables, as opposed to Rails. Upon using the express-api
template, I knew I needed at least one additional resource along with users, so
I picked courses, which have titles, semesters, grades, and credits. All fields
are strings with the exception of credits, which are required to be numbers.

### Client

I had high ambitions for my capstone coming into the project. The original plan
was to use Ember as a front end framework. When the prepartion took longer than
expected, I reverted to the browser template. With wireframe in hand, I learned
from my previous mistakes by focusing only on the functionalities first before
adding any pictures and before touching up the visuals. I added in a navbar to
handle authentication. I love that I didn't have to use modals and instead have
the auth forms within the dropdowns.

I next focused on the CRUD portion of my course resource. On Day 1, I had
already set up my API so I worked primarily on finalizing auth and was able to
Create and Read courses by the end of the day. On Day 2, I focused on Updating
and Deleting the Courses. I wanted to reuse a concept that I had used for my
team project which was the use of inline editing. I spent Day 3 working on the
layout of the page to get it to match my wireframe and started adding some
styling. Day 4 was mostly a day of fixing various bugs and exploring animations.

I had a vision for the website which was to retain much of the white space but
at the same time make it look sleek yet simplistic. I think I've accomplished
that.

## User Stories

As a user, we would like to be able to:
-   Sign up an account using authentication to manage our courses.
-   Sign in to access our courses.
-   Change passwords while signed in for added security.
-   Sign out to prevent others from viewing and/or making courses on your site.
-   Create courses by entering a course name, semester, grade, and credit amount.
-   Show all the user’s courses upon signing in.
-   Edit the course by entering directly into the table.
-   Delete any user-made course.

## Wireframes
![Wireframe](/Wireframe.JPG)

## Links

-   Front End Repo: https://github.com/andyjzhong/capstone
-   Back End Repo: https://github.com/andyjzhong/capstone-api
-   Deployed Client: https://andyjzhong.github.io/capstone/
-   Heroku Deployed: https://secret-garden-31573.herokuapp.com/

## Wins & Challenges

-   Working with Ember in the beginning -- eventually reverted to browser template.
-   Fixing an error where the app would break if you passed in a non-numerical number into credits field. Made validation for it and now works as intended.
-   Showing and hiding approproate buttons -- they were all over the place. Took a while
-   There was an error where clicking a button made exponential API calls. This was fixed by turning the event handlers "off."
-   Wanted to get the app to do GPA calculation, but never got to it in time and it fell out of scope.
-   Adding scroll and fadeIn and fadeOut animations. I love jQuery.
-   This was the first time I felt like a real developer -- I was able to solve problems on my own and worked methodically.

## Dependencies

Install with `npm install`.

-   [Webpack](https://webpack.github.io)
-   [Bootstrap](http://getbootstrap.com)
-   [Handlebars.js](http://handlebarsjs.com)

At the beginning of each cohort, update the versions in
[`package.json`](package.json) by replace all versions with a glob (`*`) and
running `npm update --save && npm update --save-dev`. You may wish to test these
changes by deleting the `node_modules` directory and running `npm install`.
Fix any conflicts.

## Installation

1.  [Download](../../archive/master.zip) this template.
1.  Unzip and rename the template directory.
1.  Empty [`README.md`](README.md) and fill with your own content.
1.  Move into the new project and `git init`.
1.  Install dependencies with `npm install`.

To deploy the SPA, run `grunt deploy`.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
