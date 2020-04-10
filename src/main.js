//querySelector
var hamburgerMenu = document.querySelector(".hamburger-menu");
var hamburgerMenuClose = document.querySelector(".hamburger-menu-close");
var filterStarred = document.querySelector(".filter-starred");
var modal = document.querySelector(".modal");
var image = hamburgerMenu.querySelector('img');

//event listeners
hamburgerMenu.addEventListener('click', showFilterStarred);
window.addEventListener('resize', handleWindowResize);
//hamburgerMenuClose.addEventListener('click', toggleFilterStarred);
//functions

function showFilterStarred() {
  //hide hamburgerMenu
  // AND show hamburgerMenuClose
  // ANd show filterStarred

  image.src = "images/menu-close.svg";
  filterStarred.style.display = "block";
  modal.hidden = false;

}

function handleWindowResize() {
  if (window.innerWidth > 475) {
      modal.hidden = true;
      image.src = "images/menu.svg";
      filterStarred.style.display = "none";
  } else {
      filterStarred.style.display = "block";
  }
}
