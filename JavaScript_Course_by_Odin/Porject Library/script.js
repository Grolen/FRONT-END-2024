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

function creatingLibraryDOM() {
  myLibrary.forEach((book) => {
    const title = book.title;
    const author = book.author;
    const pages = book.pages;
    const parentEl = document.createElement("div");
    parentEl.className = "book";
    parentEl.innerHTML = `
        <h3 class="book-title">${title}</h3>
        <p class="book-author">${author}</p>
        <p class="book-pages">${pages}</p>
        `;
    library.appendChild(parentEl);
  });
}

creatingLibraryDOM();

function updatingLibraryDOM() {
  const addedBook = myLibrary[myLibrary.length - 1];
  const title = addedBook.title;
  const author = addedBook.author;
  const pages = addedBook.pages;
  const parentEl = document.createElement("div");
  parentEl.className = "book";
  parentEl.innerHTML = `
      <h3 class="book-title">${title}</h3>
      <p class="book-author">${author}</p>
      <p class="book-pages">${pages}</p>
      `;
  library.appendChild(parentEl);
}

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.info = function () {
    return title + " " + author + " " + pages;
  };
}

function addBookToLibrary() {
  if (
    inputs[0].value !== "" &&
    inputs[1].value !== "" &&
    inputs[2].value !== ""
  ) {
    const bookTitle = inputs[0].value;
    const bookAuthor = inputs[1].value;
    const bookPages = inputs[2].value;
    const newBook = new Book(bookTitle, bookAuthor, bookPages);
    myLibrary.push(newBook);
    updatingLibraryDOM();
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
  }
}

const addBookButton = document.querySelector(".submit-form");

addBookButton.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
});
