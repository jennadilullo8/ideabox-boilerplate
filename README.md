# Ideabox Group Project - Application for the thoughtful user

## Pair project by Liliana Weimer, Alex Sodemann, and Jenna DiLullo during Module 1 at Turing School of Software and Design

## GitHub Profiles
- Liliana Weimer: https://github.com/lilianaweimer
- Alex Sodemann: https://github.com/asodemann18
- Jenna DiLullo: https://github.com/jennadilullo8

## About project:
In this project, the user will be able to record and archive their ideas. The ideas will then be written as idea title cards and the user will then be able to save them and later reference them by clicking the show starred ideas button. This application is also mobile friendly to satisfy the user on the go.

## Setup:

- One team member will fork the repo: [the boilerplate
  repository](https://github.com/turingschool-examples/ideabox-boilerplate)
- That team member will then clone and copy the link into their terminal, as well as invite the other team members as collaborators
- One of the team members will now go to work by using the proper GitFlow

## Project Goals:

- Build an application from scratch using HTML, CSS, and JavaScript
- Properly communicate GitFlow with collaborators
- Use Media Queries to respond to mobile layout
- Build responsive client-side applications with good user feedback

* Implement client-side data persistence using `localStorage`
* Understand what it looks like to have a separate data model (using a class) and DOM model
* Utilize `data-*` attributes
* Implement & iterate over arrays in order to filter what is being displayed

- Refactor code to show only DRY and SRP code

#### Wins:

- Developed a desktop layout identical to the comp layout
- Creating a mobile layout that responds extremely well with resizing
- Understanding the process of hiding elements and having other elements reappear with one click

#### Challenges:

- Removing and adding items as the window decreases and increases to the users liking
- Using proper syntax to accomplish our goals

#### Reflections:

-

#### Technologies Used:

- HTML
- CSS
- JavaScript

## In Action:

### Desktop Layout:

Comparison between the comp desktop layout and ours:

![Desktop Layout Comp](https://frontend.turing.io/projects/module-1/assets/ideabox-group/desktop.jpg)

![Our Desktop Layout](/images/Desktop-layout.png)


### Iteration 1 - Mobile Layout

Giphy of full mobile layout with and without navigation bar - STILL NEEDS TO BE IMPLEMENTED:

![Mobile Layout](https://frontend.turing.io/projects/module-1/assets/ideabox-group/mobile.jpg)

Full mobile layout with open navigation:

![Mobile Layout with Dropdown](https://frontend.turing.io/projects/module-1/assets/ideabox-group/mobile-dropdown.jpg)

### Iteration 2

*Architecture*

For this project, we’ll be increasingly thinking about the “data model” and “DOM model” as separate entities. We’ll be using:

* JSON and `localStorage` to persist data on page reload.
* vanilla JavaScript to manage client-side interactions.

Your entire application will consist of one HTML page or template. You will have two JavaScript files, for now:

1. An `idea.js` file that contains an `Idea` class.
  * `Idea` methods must include, but are not limited to:
    1. `constructor`
    2. `saveToStorage` (should only have one job which is to save the instance to storage)
    3. `deleteFromStorage`
    4. `updateIdea` (should be able to update the idea’s title, body, or starred state)
2. A `main.js` file that contains all DOM related JavaScript.

*NOTE:*The idea.js file  must be the first script in your HTML so that your main.js file has access to your Idea class.

*Data Model*

*  An idea has an /id/, /title/, /body,/and /star/.
* The /id/ should be a unique identifier. (Note: generating a random number does NOT guarantee it will be unique)
* /title/ and /body/ are strings
/star/ is a boolean

Each idea should be created as an object instance of the Idea class. Once an idea object is created, all that data can be used to update the DOM. That object should also be added to a list of all the ideas your application currently has. This should probably be a global variable in your main.js.

*Iteration 2 - Adding Ideas*

As a user,
- When I click “Save”,
- If I entered information in both the “Title” and “Body” input fields,
- I should see a new idea card with the provided title and body appear in the idea list

As a user,
- When I click “Save”,
- If I entered information in both the “Title” and “Body” input fields,
- I should see the “Title” and “Body” input fields clear out

As a user,
- When I look at the “Save” button,
- When either the “Title” or “Body” inputs are empty,
- I should notice that the “Save” button is disabled because it is a lighter color and the cursor is not a pointer when I hover over it

As a user,
- When I click “Save”,
- And a new card is successfully created,
- I should NOT see the page reload


## Rubric

### Functional Expectations

* **4:** Application meets all of the expectations from Iteration 4 and most functionality from Iteration 5.
* **3:** Application meets all of the expectations from Iteration 4.
* **2:** Application meets all of the expectations of Iteration 3.
* **1:** Application meets all of the expectations of Iteration 2.

### Comp Recreation

* **4:** Additional elements that have been added match the visuals established in the comps. Every little detail was built out thoughtfully - from hover states to placeholders, etc.
* **3:** Application implements all major comp details accurately and correctly on desktop and mobile (colors, fonts, icons, spacing, alignment, etc.) with **smooth transitions between screen sizes**. Additional elements added generally match the visuals established in the comps, but may be slightly awkward.
* **2:** Application implements most major comp details accurately and correctly on **desktop and mobile** (colors, fonts, icons, spacing, alignment, etc.). Transitions between screen sizes may not be smooth.
* **1:** Application implements all major comp details on desktop only (colors, fonts, icons, spacing, alignment, etc.), OR masonry layout is not implemented.

### Git Workflow & Documentation

* **4:** A PR template was used. A code review was requested and completed by a mentor, and all team members can speak to how the feedback in code review was implemented (and point to the commit(s) that implemented the feedback).
* **3:** Every team member (on a team of 3) authors between 25%-40% of the commits. Most commits are formatted correctly. Every team member contributes to at least 2 meaningful PR conversations. The README is formatted well and contains:
  - Overview of project and goals
  - Overview of technologies used, challenges, and wins, any other reflections
  - Screenshots of comp and your app
  - Credit all teammates
* **2:** Every team member (on a team of 3) authors between 20%-45% of the commits. More than a few commits are formatted incorrectly. The README is formatted well but may be lacking in detail.
* **1:** Commit and PR history does not tell a story of the application OR a README has not been created/has minimal information.

### JavaScript - Style and Implementation

* **4:**
  * All loops are refactored into the proper array prototype iteration methods
  * Uses logical operators instead of if/else statements where applicable
  * When 'Filtering and Searching by Text' and 'Viewing Urgent ToDo Cards', to-dos that do not need to be shown on the DOM should be completely removed from the DOM, instead of only being hidden from view
* **3:**
  * Application uses the Data Model exclusively to track changes to the ideas,
    and display of ideas happens after the Data Model has been updated
  * DRY and SRP practices are demonstrated in codebase and students can speak to implementation decisions
  * All functions are less than 10 lines
  * There are no nested if/else statements
  * There are no global variables aside from query selectors and an array for your to-dos
  * Uses event delegation correctly on dynamic elements for deleting, checking tasks off, and marking a to-do urgent
* **2:** Application correctly implements data model for the `Idea` class including all required methods
* **1:** Crafts JS according to the [Turing JS Style Guide](https://github.com/turingschool-examples/javascript/tree/master/es5)
