
//querySelector
var hamburgerMenu = document.querySelector(".hamburger-menu");
var hamburgerMenuClose = document.querySelector(".hamburger-menu-close");
var filterStarred = document.querySelector(".filter-starred");
var mobileDropDown = document.querySelector(".mobile-drop-down");
var hamburgerImage = hamburgerMenu.querySelector('img');
var saveButton = document.querySelector('.save');
var titleInput = document.querySelector('#title-input');
var bodyInput = document.querySelector('#body-input');
var ideaCardsSection = document.querySelector('.idea-cards-section');
var ideaCardsArticle = document.getElementsByClassName('idea-cards-article');
var starButton = document.querySelector('.star-button');
var deleteButton = document.querySelector('.x-button');

//array
var ideaArray = [];

//event listeners
hamburgerMenu.addEventListener('click', showFilterStarred);
saveButton.addEventListener('click', addNewIdea);
titleInput.addEventListener('keyup', enableSaveButton);
bodyInput.addEventListener('keyup', enableSaveButton);
ideaCardsSection.addEventListener('click', function() {
  deleteIdeaDOM(event);
  deleteIdea(event);
});

//event handlers
function showFilterStarred() {
  hamburgerImage.src = hamburgerImage.src.match("images/menu-close.svg") ? "images/menu.svg" : "images/menu-close.svg";
  filterStarred.style.display = filterStarred.style.display === "block" ? "none" : "block";
  mobileDropDown.hidden = !mobileDropDown.hidden;
}

function addNewIdea() {
  var titleInputValue = titleInput.value;
  var bodyInputValue = bodyInput.value;
  var newIdea = new Idea(titleInputValue, bodyInputValue);
  ideaArray.push(newIdea);
  clearInput();
  showNewIdea();
}

function enableSaveButton() {
  var titleInputValue = titleInput.value;
  var bodyInputValue = bodyInput.value;
  if (titleInputValue !== "" && bodyInputValue !== "") {
    saveButton.disabled = false;
  }
}

function showNewIdea() {
    ideaCardsSection.innerText = "";
      for (var i = 0; i < ideaArray.length; i++) {
        var newIdeaHTML = `
          <article class="idea-cards-article" data-id=${ideaArray[i].id}>
            <article class="star-button">
              <button class="star-button"><img src="images/star-active.svg" alt="star-active" width="25px" height="25px"> </button>
              <button class="x-button" data-id=${ideaArray[i].id}><img src="images/delete.svg" class="x-button" alt="image-deleted" width="25px" height="25px" data-id=${ideaArray[i].id}> </button>
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
  event.target.closest('.idea-cards-article').remove();
}

function deleteIdea(event) {
  var uniqueID = event.target.closest('.idea-cards-article').dataset.id;

  for (var i = 0; i < ideaArray.length; i++) {
    if (uniqueID == ideaArray[i].id) {
      ideaArray.splice(ideaArray.indexOf(ideaArray[i]), 1);
    }
  }
}
