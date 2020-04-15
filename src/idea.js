class Idea {
  constructor(title, body, id, star) {
    this.id = id || Date.now();
    this.title = title;
    this.body = body;
    this.star = star || false;
  }

  saveToStorage() {
    localStorage.setItem(JSON.stringify(this.id), JSON.stringify(this));
  }

  deleteFromStorage() {
    localStorage.removeItem(this.id);
  }
  //
  // updateIdea() {
  //
  // }
}
