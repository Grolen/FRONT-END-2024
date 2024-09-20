function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function () {
        return title + ' ' + author + ' ' + pages;
    }
}

const someBook = new Book ('da', 'net', 24)

console.log(someBook.info())

console.log(Object.getPrototypeOf(someBook) === Book.prototype)
