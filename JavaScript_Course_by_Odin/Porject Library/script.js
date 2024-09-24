// *Objects and prototypes

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function () {
        return title + ' ' + author + ' ' + pages;
    }
}

const someBook = new Book ('Po lby', 'styk', 24)

console.log(someBook.info())

// ! What is that and why the result is true??

console.log(Object.getPrototypeOf(someBook) === Book.prototype)

// *Project: Library


