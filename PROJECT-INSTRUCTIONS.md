# The Odin Project: Library

Source: [Official Library project assignment][assignment]

The following is a paraphrased reference to the official assignment, not
additional repository requirements.

## Goal

Extend the Book example from the preceding lesson into a small library
application.

## Assignment

1. **Set up the project.** Create a Git repository with skeleton HTML, CSS,
   and JavaScript files if you have not already done so.
2. **Store books in an array.** Create a `Book` constructor. Add a separate
   `addBookToLibrary()` function, outside the constructor, that accepts
   arguments, creates a book, and adds it to the array. Give every book a
   unique, stable `id`; the assignment suggests `crypto.randomUUID()`. Stable
   identifiers avoid problems when books are removed or rearranged.
3. **Display the library.** Write a function that loops through the array and
   displays every book, for example as table rows or individual cards. Add a
   few books manually while developing to check the display. Keep the
   underlying book data separate from rendering logic rather than treating
   the DOM as the data store. This lets the same data support different
   displays.
4. **Allow users to add books.** Add a "New Book" button that opens a form for
   author, title, page count, read status, and any other details you choose.
   The form can appear in a sidebar or a modal dialog; the presentation is
   your choice. Handle the form's default submission behavior with
   `event.preventDefault()` as needed so it does not unexpectedly try to send
   data to a server.
5. **Allow users to remove books.** Add a remove button to each displayed
   book. Associate the DOM element with the corresponding book object, for
   example through a data attribute holding the book's unique `id`.
6. **Allow users to change read status.** Add a button to each displayed book
   that changes its `read` status. Create a method on `Book.prototype` that
   toggles the book instance's read status.

## Storage and implementation choices

Persistent storage is **not required**. The application does not need to
preserve its library between page reloads.

Cards versus a table, a sidebar versus a dialog, and additional book fields
are implementation choices, not separate mandatory features. The assignment
does not specify a framework or a separate list of optional extensions.

## References linked by the assignment

- [HTML dialog element][dialog]
- [Event.preventDefault()][prevent-default]
- [Using data attributes][data-attributes]

[assignment]:
  https://www.theodinproject.com/lessons/node-path-javascript-library
[dialog]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
[prevent-default]:
  https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
[data-attributes]:
  https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Use_data_attributes
