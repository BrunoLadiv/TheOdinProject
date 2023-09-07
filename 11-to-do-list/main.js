import './style.css'
const newTodoModal = document.querySelector('.new-todo-modal')
const addTodoBtn = document.querySelector('.plus-todo')


addTodoBtn.addEventListener('click', () => {
  newTodoModal.showModal()
  
})

