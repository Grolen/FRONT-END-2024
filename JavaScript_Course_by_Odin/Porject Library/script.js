// *Project: Library

// DOM Elements
const libraryContainer = document.querySelector(".library");
const inputs = document.querySelectorAll("input");
const addBookButton = document.querySelector(".submit-form");

// Book class
class Book {
  constructor(title, author, pages, isRead = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

// Library array
const myLibrary = [
  new Book("Book one", "Me", "228"),
  new Book("Book two", "Me", "228"),
  new Book("Book three", "Me", "228"),
];

// Initial render of the library
updatingLibraryDOM();

// Update DOM with current library
function updatingLibraryDOM() {
  libraryContainer.innerHTML = ""; // Clear container

  myLibrary.forEach((book, index) => {
    const bookCard = renderBookCard(book, index);
    libraryContainer.appendChild(bookCard);
  });

  attachEventListeners(); // Reattach listeners
}

// Render each book card
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
  return bookCard;
}

// Attach event listeners for delete and read status
function attachEventListeners() {
  document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", deleteBook);
  });

  document.querySelectorAll(".is-read-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", toggleReadStatus);
  });
}

// Event Handlers
function deleteBook(event) {
  const bookIndex = event.target.getAttribute("data-index");
  myLibrary.splice(bookIndex, 1);
  updatingLibraryDOM(); // Обновляем DOM после удаления
}

function toggleReadStatus(event) {
  const bookIndex = event.target.getAttribute("data-index");
  myLibrary[bookIndex].isRead = event.target.checked;
  updatingLibraryDOM(); // Обновляем DOM после изменения статуса
}

// Add a new book to library
function addBookToLibrary() {
  const [title, author, pages] = [...inputs].map((input) => input.value.trim());
  const isRead = document.querySelector("#isReadCheckbox").checked;

  if (!title || !author || !pages) {
    alert("All fields must be filled out!");
    return;
  }

  if (
    myLibrary.some((book) => book.title === title && book.author === author)
  ) {
    alert("This book already exists in your library.");
    return;
  }

  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
  updatingLibraryDOM();
  clearInputs();
}

// Clear input fields after adding a book
function clearInputs() {
  inputs.forEach((input) => (input.value = ""));
}

// Attach event listener to add book button
addBookButton.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
});
