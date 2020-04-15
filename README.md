# Ideabox Group Project - Application for the thoughtful user

## Group project by Liliana Weimer, Alex Sodemann, and Jenna DiLullo during Module 1 at the Turing School of Software and Design

## GitHub Profiles
- Liliana Weimer: https://github.com/lilianaweimer
- Alex Sodemann: https://github.com/asodemann18
- Jenna DiLullo: https://github.com/jennadilullo8

## About project:
In this project, we created an application with which a user will be able to record and archive their ideas. The user will write their ideas in the provided Title and Idea inputs, and save them for later reference. They can also "star" an idea, and use the Filter Starred Ideas button to only display starred ideas. This application is also mobile-friendly to satisfy the user on the go.

## Project Goals:

- Build an application from scratch using HTML, CSS, and JavaScript
- Properly communicate GitFlow with collaborators
- Use media queries to respond to mobile layout
- Build a responsive client-side application with good user feedback
- Use a separate data model and a DOM model
- Create arrays to filter what is displayed
- Refactor code to show only DRY and SRP code
- Implement `localStorage` for the user
* Utilize `data-*` attributes


#### Wins:

- Developing a desktop layout identical to the comp layout
- Creating a mobile layout that responds extremely well to resizing
- Understanding the process of toggling element visibility with one click
- Understanding and implementing code to complete a project iteration in a short amount of time

#### Challenges:

- Removing and adding items using media queries that respond to window width
- Using proper, DRY code to accomplish our goals
- Asking help more effectively by being specific when asking questions


#### Reflections:

-

#### Technologies Used:

- HTML
- CSS
- JavaScript
- Git/GitHub

## In Action:

### Desktop Layout:

#### Desktop Layout Comp:

<img src="https://frontend.turing.io/projects/module-1/assets/ideabox-group/desktop.jpg" alt="Desktop layout comp" height=auto width=75%/>

#### Our Desktop Layout:

<img src="/images/Desktop-layout.png" alt="Our desktop layout" height=auto width=75%/>


### Iteration 1 - Mobile Layout

Our mobile layout (left) vs. the comp (right):

<img src="/images/Our-Mobile-Layout.png" alt="Our mobile layout" height=500px width=auto/>
<img src="https://user-images.githubusercontent.com/53405028/67904505-2d655e80-fb34-11e9-930b-a920fb2b325e.jpg" alt="Comp mobile layout" height=500px width=auto/>


Gif of application collapsing to mobile layout with and without menu bar:

<img src="http://g.recordit.co/3OmCWqEGD7.gif" alt="Mobile layout with dropdown" height=auto width=75%/>

### Iteration 2 - Adding Ideas

- When either input field is empty, the "Save" button is disabled
- New idea cards are added to the idea list once both input fields are filled out and the "Save" button is clicked
- Once an idea card is created, the input fields clear out

<img src="http://g.recordit.co/9ievjfU2h2.gif" alt="adding new ideas and clearing out inputs" height=auto width=75%/>

### Iteration 3 - Favoriting & Deleting ideas

- When the delete button on an idea card is clicked, the card will be permanently removed from the user's view
- When the user clicks on the "star" button, the star changes to indicate the idea is now starred
- The starred idea can be "un-starred"
- All of this is completed without reloading the page

<img src="http://g.recordit.co/lKJIm2RusO.gif" alt="delete, star, and active star button functionality" height=auto width=75%/>
