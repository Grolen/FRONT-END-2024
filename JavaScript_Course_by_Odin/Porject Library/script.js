// *Project: Library

const body = document.querySelector("body");
const library = document.querySelector(".library");

const inputs = document.querySelectorAll("input");
console.log(inputs);

const myLibrary = [
  { title: "Book one", author: "Me", pages: "228" },
  { title: "Book two", author: "Me", pages: "228" },
  { title: "Book three", author: "Me", pages: "228" },
];

function Book(title, author, pages, isRead = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

updatingLibraryDOM();

function updatingLibraryDOM() {
  const container = document.querySelector(".library");
  container.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book");

    bookCard.innerHTML = `
      <h3 class="book-title">${book.title}</h3>
      <p class="book-author">${book.author}</p>
      <p class="book-pages">${book.pages}</p>
       <label>
        <input type="checkbox" class="is-read-checkbox" data-index="${index}" ${
      book.isRead ? "checked" : ""
    }>
        Is read
      </label>
      <span class="delete-btn" data-index="${index}">X</span>
    `;

    container.appendChild(bookCard);
  });

  document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", deleteBook);
  });

  document.querySelectorAll(".is-read-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", toggleReadStatus);
  });
}

function deleteBook() {
  const bookIndex = this.getAttribute("data-index");
  myLibrary.splice(bookIndex, 1);
  updatingLibraryDOM();
}

function toggleReadStatus() {
  const bookIndex = this.getAttribute("data-index");
  myLibrary[bookIndex].isRead = this.checked;
}

function addBookToLibrary() {
  const values = [...inputs].map((input) => input.value.trim());
  const allFieldsFilled = values.every((value) => value !== "");

  if (allFieldsFilled) {
    const [bookTitle, bookAuthor, bookPages] = values;
    const isRead = document.querySelector("#isReadCheckbox").checked;
    myLibrary.push(createBook(bookTitle, bookAuthor, bookPages, isRead));
    updatingLibraryDOM();
    clearInputs();
  }
}

function createBook(title, author, pages) {
  return new Book(title, author, pages);
}

function clearInputs() {
  inputs.forEach((input) => (input.value = ""));
}

const addBookButton = document.querySelector(".submit-form");

addBookButton.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
});
