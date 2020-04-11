//querySelector
// As a user,
// - When I click “Save”,
// - If I entered information in both the “Title” and “Body” input fields,
// - I should see a new idea card with the provided title and body appear in the idea list

var hamburgerMenu = document.querySelector(".hamburger-menu");
var hamburgerMenuClose = document.querySelector(".hamburger-menu-close");
var filterStarred = document.querySelector(".filter-starred");
var modal = document.querySelector(".modal");
var hamburgerImage = hamburgerMenu.querySelector('img');
var saveButton = document.querySelector('.save');
var titleInput = document.querySelector('#title-input');
var bodyInput = document.querySelector('#body-input');


var ideaArray = [];
//event listeners
hamburgerMenu.addEventListener('click', showFilterStarred);
saveButton.addEventListener('click', addNewIdea);
//functions
function showFilterStarred() {
  hamburgerImage.src = (hamburgerImage.src.match("images/menu-close.svg")) ? "images/menu.svg" : "images/menu-close.svg";
  filterStarred.style.display = (filterStarred.style.display === "block") ? "none" : "block";
  modal.hidden = (modal.hidden === false) ? true : false;
}

function addNewIdea() {
  var titleInputValue = titleInput.value;
  var bodyInputValue = bodyInput.value;
  var newIdea = new Idea(titleInputValue, bodyInputValue);

  if (titleInputValue !== "" && bodyInputValue !== "") {
    ideaArray.push(newIdea);
    
  }
}
