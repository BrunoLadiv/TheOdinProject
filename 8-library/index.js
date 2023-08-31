const myLibrary = [
  {
    title: 'A Game of Thrones: A Song of Ice and Fire',
    author: 'George R.R. Martin',
    pages: 694,
    url: 'https://www.amazon.com.br/Game-Thrones-George-R-Martin/dp/0553593714',
    cover: './images/a-game-of-thrones-a-song-of-ice-and-fire-book-1.jpg',
    isRead: true,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J. K. Rowling ',
    pages: 223,
    url: 'https://www.amazon.com.br/Harry-Potter-Sorcerers-Stone-Rowling/dp/059035342X',
    cover: './images/B019PIOJYU_8197ea61_cover.jpg',
    isRead: true,
  },
  {
    title: 'The Fellowship of the Ring',
    author: 'J. R. R. Tolkien',
    pages: 432,
    url: 'https://www.amazon.com/Fellowship-Ring-Lord-Rings-Vol/dp/0261102354',
    cover: './images/31e1rLilB3L._SX310_BO1,204,203,200_.jpg',
    isRead: true,
  },
  {
    title: 'Mistborn: The Final Empire',
    author: 'Brandon Sanderson',
    pages: 672,
    url: 'https://www.amazon.com/Mistborn-Final-Empire-Book-No/dp/0765350386',
    cover: './images/51sKzl+R6OL._SX308_BO1,204,203,200_.jpg',
    isRead: true,
  },
  {
    title: 'The Name of the Wind',
    author: 'Patrick Rothfuss',
    pages: 672,
    url: 'https://www.amazon.com.br/Name-Wind-Patrick-Rothfuss/dp/0756404746',
    cover: './images/51JThzjy3gL._SX306_BO1,204,203,200_ (1).jpg',
    isRead: true,
  },
]

// Select elements
const createBookButton = document.querySelector('.create-book-btn')
const showBookModal = document.querySelector('.book-modal')
const hideBookModal = document.querySelector('#closeBtn')
const bookForm = document.getElementById('bookForm')
const showInfoModal = document.querySelector('.info-modal')
const infoModalBTN = document.querySelector('.info-btn')
const closeModalBTN = document.querySelector('#closeModalBtn')
const bookList = document.querySelector('.list-inline')

// Event listeners
createBookButton.addEventListener('click', () => showBookModal.showModal())
hideBookModal.addEventListener('click', () => showBookModal.close())
infoModalBTN.addEventListener('click', () => showInfoModal.showModal())
closeModalBTN.addEventListener('click', () => showInfoModal.close())

bookForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const formData = new FormData(bookForm)
  const formDataObject = {}

  formData.forEach((value, key) => {
    formDataObject[key] = value
  })

  // Close the modal after submitting
  showBookModal.close()

  // Create a new Book instance
  const newBook = new Book(
    formDataObject['book-title'],
    formDataObject['book-author'],
    formDataObject['number-of-pages'],
    formDataObject['book-url'],
    formDataObject['cover-url'],
    formDataObject['isRead']
  )

  // Check if the book already exists in the library
  const isBookInLibrary = myLibrary.some((book) => book.title === newBook.title)

  if (!isBookInLibrary) {
    // Add the new book to the library
    myLibrary.push(newBook)
    // Update library on screen
    renderLibrary(myLibrary)
    console.log(myLibrary)
  } else {
    console.log('Book already in library.')
  }
})

// Book constructor
function Book(title, author, pages, url, cover, isRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.url = url
  this.cover = cover
  this.isRead = isRead
}

// Render book function
function renderBook(book) {
  const li = document.createElement('li')
  li.classList.add('book')

  const infoButton = document.createElement('button')
  infoButton.classList.add('info-btn')
  infoButton.innerHTML = '<i class="fa-solid fa-circle-info"></i>'

  const infoModal = document.createElement('dialog')
  infoModal.classList.add('info-modal')

  const closeModalButton = document.createElement('button')
  closeModalButton.classList.add('close-button')
  closeModalButton.textContent = '×'

  const titleInfo = document.createElement('h3')
  titleInfo.classList.add('title-info')
  titleInfo.textContent = `Title: ${book.title}`

  const authorInfo = document.createElement('h3')
  authorInfo.classList.add('author-info')
  authorInfo.textContent = `Author: ${book.author}`

  const pagesInfo = document.createElement('h3')
  pagesInfo.classList.add('pages-info')
  pagesInfo.textContent = `Pages: ${book.pages}`

  const readInfo = document.createElement('h3')
  readInfo.classList.add('read-info')
  readInfo.textContent = `Book read?: ${book.isRead ? 'yes' : 'no'}`

  const storeLink = document.createElement('h3')
  storeLink.classList.add('store-link')
  storeLink.textContent = `Store Link: ${book.url}`

  const bookCover = document.createElement('img')
  bookCover.classList.add('book-cover')
  bookCover.src = book.cover

  const deleteBookBtn = document.createElement('button')
  deleteBookBtn.classList.add('delete-book')
  deleteBookBtn.innerText = 'Delete Book'

  // Attach event listener for deleting a book
  deleteBookBtn.addEventListener('click', () => {
    const bookIndex = myLibrary.indexOf(book)
    if (bookIndex !== -1) {
      myLibrary.splice(bookIndex, 1)
      clearBookList()
      renderLibrary(myLibrary)
    }
  })

  // Append elements to their respective parents
  infoModal.appendChild(closeModalButton)
  infoModal.appendChild(titleInfo)
  infoModal.appendChild(authorInfo)
  infoModal.appendChild(pagesInfo)
  infoModal.appendChild(readInfo)
  infoModal.appendChild(storeLink)
  infoModal.appendChild(deleteBookBtn)

  li.appendChild(infoButton)
  li.appendChild(infoModal)
  li.appendChild(bookCover)

  bookList.appendChild(li)

  // Add event listener to open and close the info modal
  infoButton.addEventListener('click', () => {
    infoModal.showModal()
  })

  closeModalButton.addEventListener('click', () => {
    infoModal.close()
  })
}

function renderLibrary(library) {
  clearBookList()
  library.forEach((book) => {
    renderBook(book)
  })
}

// Function to clear the book list
function clearBookList() {
  while (bookList.firstChild) {
    bookList.removeChild(bookList.firstChild)
  }
}

// Helper function to find the index of a book in the myLibrary array
function findBookIndex(deleteButton) {
  const bookElement = deleteButton.closest('.book')
  if (bookElement) {
    const bookIndex = Array.from(bookList.children).indexOf(bookElement)
    return bookIndex
  }
  return -1
}

renderLibrary(myLibrary)
