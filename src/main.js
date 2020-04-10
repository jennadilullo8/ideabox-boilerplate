//querySelector
var hamburgerMenu = document.querySelector(".hamburger-menu");
var hamburgerMenuClose = document.querySelector(".hamburger-menu-close");
var filterStarred = document.querySelector(".filter-starred");
var modal = document.querySelector(".modal");
var hamburgerImage = hamburgerMenu.querySelector('img');

//event listeners
hamburgerMenu.addEventListener('click', showFilterStarred);

//functions
function showFilterStarred() {
  // var menuButton = hamburgerImage.src;
  // if (menuButton === "images/menu.svg") {
  //   console.log('test!');
  // }
  hamburgerImage.src = (hamburgerImage.src.match("images/menu-close.svg")) ? "images/menu.svg" : "images/menu-close.svg";
  filterStarred.style.display = (filterStarred.style.display === "block") ? "none" : "block";
  modal.hidden = (modal.hidden === false) ? true : false;
}
