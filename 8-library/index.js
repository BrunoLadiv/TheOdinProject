const searchInputContainer = document.querySelector('.search-bar');
const createBookButton = document.querySelector('.create-book-btn')
const showBookModal = document.querySelector('.book-modal')
const hideBookModal = document.querySelector('#closeBtn')


createBookButton.onclick = () => showBookModal.showModal()
hideBookModal.onclick = () => showBookModal.close()

