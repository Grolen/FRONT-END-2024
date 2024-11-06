// Getting els
const modal = document.getElementById("modal");
const openFormButton = document.getElementById("openFormButton");
const closeButton = document.querySelector(".close-btn");
const form = document.querySelector(".new-book-form");
const deleteBookButton = document.querySelector(".delete-book-btn");
class Book {
  constructor(title, author, pages, isRead = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

const myLibrary = [
  new Book("Book one", "Me", "228"),
  new Book("Book two", "Me", "228"),
  new Book("Book three", "Me", "228"),
];

// Opening modal window
openFormButton.addEventListener("click", () => {
  modal.style.display = "block";
  clearForm();
  deleteBookButton.style.display = "none"; // hiding X button
});

// Closing modal window
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Clear form func
function clearForm() {
  form.reset();
}

// Listeners for
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#title").value.trim();
  const author = document.querySelector("#author").value.trim();
  const pages = document.querySelector("#pages").value.trim();
  const isRead = document.querySelector("#isReadCheckbox").checked;

  if (!title || !author || !pages) {
    alert("All fields must be filled out!");
    return;
  } else {
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
  }

  updatingLibraryDOM();
  modal.style.display = "none";
});

// Updating DOM
function updatingLibraryDOM() {
  const libraryContainer = document.querySelector(".library");
  libraryContainer.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookCard = renderBookCard(book, index);
    libraryContainer.appendChild(bookCard);
  });
}

// Rendering a book
function renderBookCard(book, index) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book");
  bookCard.innerHTML = `
    <h3 class="book-title">${book.title}</h3>
    <p class="book-author">by ${book.author}</p>
    <p class="book-pages">${book.pages} pages</p>
    <label>
      <input type="checkbox" class="is-read-checkbox" data-index="${index}" ${
    book.isRead ? "checked" : ""
  }>
      Read
    </label>
    <span class="delete-btn" data-index="${index}">X</span>
  `;

  // Add delete listener
  const deleteButton = bookCard.querySelector(".delete-btn");
  deleteButton.addEventListener("click", () => deleteBook(index));

  // Add isRead listener
  const checkbox = bookCard.querySelector(".is-read-checkbox");
  checkbox.addEventListener("change", (e) => toggleReadStatus(e, index));

  return bookCard;
}

// Remove book func
function deleteBook(index) {
  myLibrary.splice(index, 1);
  updatingLibraryDOM();
}

// Toggle is read status func
function toggleReadStatus(event, index) {
  myLibrary[index].isRead = event.target.checked;
  updatingLibraryDOM();
}

// init DOM
updatingLibraryDOM();
