const myLibrary = [];

// Select elements
const createBookButton = document.querySelector('.create-book-btn');
const showBookModal = document.querySelector('.book-modal');
const hideBookModal = document.querySelector('#closeBtn');
const bookForm = document.getElementById('bookForm');
const showInfoModal = document.querySelector('.info-modal')
const infoModalBTN = document.querySelector('.info-btn')
const closeModalBTN = document.querySelector('#closeModalBtn')

// Event listeners
createBookButton.addEventListener('click', () => showBookModal.showModal());
hideBookModal.addEventListener('click', () => showBookModal.close());
infoModalBTN.addEventListener('click', () => showInfoModal.showModal())
closeModalBTN.addEventListener('click',()=>showInfoModal.close() )

bookForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(bookForm);
  const formDataObject = {};

  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  // Close the modal after submitting
  showBookModal.close();

  // Create a new Book instance
  const newBook = new Book(
    formDataObject['book-title'],
    formDataObject['book-author'],
    formDataObject['number-of-pages'],
    formDataObject['book-url'],
    formDataObject['cover-cover'],
    formDataObject['isRead']
  );

  // Add the new book to the library
  myLibrary.push(newBook);

  console.log(myLibrary);
});

// Book constructor
function Book(title, author, pages, url, cover, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.url = url;
  this.cover = cover;
  this.isRead = isRead;
}
