
//querySelector
var hamburgerMenu = document.querySelector(".hamburger-menu");
var saveButton = document.querySelector('.save');
var titleInput = document.querySelector('#title-input');
var bodyInput = document.querySelector('#body-input');
var ideaCardsSection = document.querySelector('.idea-cards-section');
var ideaCardsArticle = document.getElementsByClassName('idea-cards-article');

//array
var ideaArray = [];

//event listeners
window.onload = getLocalStorage();
hamburgerMenu.addEventListener('click', showFilterStarred);
saveButton.addEventListener('click', addNewIdea);
titleInput.addEventListener('keyup', enableSaveButton);
bodyInput.addEventListener('keyup', enableSaveButton);
ideaCardsSection.addEventListener('click', function() {
  deleteIdeaDOM(event);
  toggleActiveStar(event);
});

//event handlers
function showFilterStarred(event) {
  var hamburgerMenuClose = document.querySelector(".hamburger-menu-close");
  var filterStarred = document.querySelector(".filter-starred");
  var mobileDropDown = document.querySelector(".mobile-drop-down");
  var hamburgerImage = hamburgerMenu.querySelector('img');
  hamburgerImage.src = hamburgerImage.src.match("images/menu-close.svg") ? "images/menu.svg" : "images/menu-close.svg";
  filterStarred.style.display = filterStarred.style.display === "block" ? "none" : "block";
  mobileDropDown.hidden = !mobileDropDown.hidden;
}

function addNewIdea() {
  var newIdea = new Idea(titleInput.value, bodyInput.value);
  ideaArray.push(newIdea);
  clearInput();
  showNewIdea();
  newIdea.saveToStorage();
}

function getLocalStorage() {
  if (localStorage) {
    for (var i = 0; i < localStorage.length; i++ ) {
      var uniqueID = localStorage.key(i);
      var ideaObject = JSON.parse(localStorage.getItem(uniqueID));
      ideaObject = new Idea(ideaObject.title, ideaObject.body, ideaObject.id, ideaObject.star);
      ideaArray.push(ideaObject);
      showNewIdea();
    }
  }
}

function enableSaveButton() {
  if (titleInput.value !== "" && bodyInput.value !== "") {
    saveButton.disabled = false;
  }
}

function showNewIdea() {
  ideaCardsSection.innerText = "";
  for (var i = 0; i < ideaArray.length; i++) {
    var starStyle = (ideaArray[i].star === true) ? "images/star-active.svg" : "images/star.svg";
    var newIdeaHTML = `
      <article class="idea-cards-article" data-id=${ideaArray[i].id}>
        <article class="star-x-button">
          <button class="star-button"><img src="${starStyle}" class="star-button" alt="star-empty" width="25px" height="25px"> </button>
          <button class="x-button" data-id=${ideaArray[i].id}><img src="images/delete.svg" class="x-button" alt="image-deleted" width="25px" height="25px" data-id=${ideaArray[i].id}></button>
        </article>
        <article class="idea-cards-text">
          <h3>${ideaArray[i].title}</h3>
          <p>${ideaArray[i].body}</p>
        </article>
        <article class="comment-button">
          <button class="comment-color"><img src="images/comment.svg" alt="comment" width="25px" height="25px"></button>
          <p id="comment-text">Comment</p>
        </article>
      </article>`
  ideaCardsSection.insertAdjacentHTML('beforeend', newIdeaHTML);
  }
}

function clearInput() {
  titleInput.value = "";
  bodyInput.value = "";
}

function deleteIdeaDOM(event) {
  if (event.target.className === ('x-button')) {
    event.target.closest('.idea-cards-article').remove();
    deleteIdea(event);
  }
}

function deleteIdea(event) {
  var uniqueID = event.target.closest('.x-button').dataset.id;
  for (var i = 0; i < ideaArray.length; i++) {
    if (uniqueID === ideaArray[i].id) {
      ideaArray.splice(ideaArray.indexOf(ideaArray[i]), 1);
    }
    if (parseInt(uniqueID) === ideaArray[i].id) {
      ideaArray[i].deleteFromStorage();
    }
  }
}

function toggleActiveStar(event) {
  var imgTarget = (event.target);
  if (event.target.className === ('star-button')) {
    imgTarget.src = imgTarget.src.match("images/star.svg") ? "images/star-active.svg" : "images/star.svg";
    updateStarInstance(event);
  }
}

function updateStarInstance(event) {
  var ideaModel = (event.target.parentNode.parentNode.parentNode).dataset.id;
  for (var i = 0; i < ideaArray.length; i++) {
    if (ideaModel.match(ideaArray[i].id)) {
      ideaArray[i].star = (ideaArray[i].star === false) ? true : false;
      ideaArray[i].saveToStorage();
    }
  }
}
