function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayLibrary() {
  const books = document.querySelector("#books");
  books.replaceChildren();

  for (const book of myLibrary) {
    const card = document.createElement("article");
    const title = document.createElement("h3");
    const details = document.createElement("p");

    title.textContent = book.title;
    details.textContent = `${book.author}, ${book.pages} pages, ${book.read ? "Read" : "Not read"}`;
    card.append(title, details);
    books.append(card);
  }
}

console.log("Library script loaded");
