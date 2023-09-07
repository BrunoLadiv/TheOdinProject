import './style.css'
const newTodoModal = document.querySelector('.new-todo-modal')
const addTodoBtn = document.querySelector('.plus-todo')
const closeTodoModal = document.querySelector('.close-new-todo-modal')
const createTodoForm = document.querySelector('.new-todo-form')
const toDoUl = document.querySelector('.to-do-ul')


// local storage
const toDoListData = localStorage.getItem('todolistdata')
  ? JSON.parse(localStorage.getItem('todolistdata'))
  : []

createTodoForm.addEventListener('submit', (e) => {
  e.preventDefault()
  // Access the form elements and retrieve the data
  const title = createTodoForm.querySelector('input[name="title"]').value
  const date = createTodoForm.querySelector('input[name="date"]').value
  const description = createTodoForm.querySelector('textarea').value
  const priority = createTodoForm.querySelector('#taskPriority').value
  createNewTodo({ title, date, description, priority })
})

function createNewTodo(todo) {
  toDoListData.push(todo)
  localStorage.setItem('todolistdata', JSON.stringify(toDoListData))
  renderTodos()
}

function renderTodos() {
  toDoUl.innerHTML = '';

  toDoListData.forEach((todo, index) => {
    const newtodoli = document.createElement('li');
    newtodoli.setAttribute('id', index);
    newtodoli.setAttribute('class', 'todo-item');
    newtodoli.innerHTML = `<p>
      <input
        class="todo-done"
        title="Mark as done"
        type="checkbox"
      />
      ${todo.title}
    </p>
    <p class="due-date">Due date ${formatDate(todo.date)} </p>
    <div class="todo-buttons">
      <i class="fa-solid fa-circle-info"></i>
      <i
        title="Edit To-do"
        class="fa-regular fa-pen-to-square edit-todo"
      ></i
      ><i
        title="Delete To-do"
        class="fa-regular fa-trash-can delete-todo"
      ></i
      ><i class="fa-solid fa-flag"></i>
    </div>`;

    toDoUl.appendChild(newtodoli);
  });

  // Call the deleteTodo function after re-rendering
  deleteTodo();
}



addTodoBtn.addEventListener('click', () => {
  newTodoModal.showModal()
})
closeTodoModal.addEventListener('click', () => {
  newTodoModal.close()
})

function formatDate(tododate) {
  const date = new Date(tododate)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  const hour = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')

  const formattedDate = `day: ${day}/${month}/${year} hour: ${hour}:${minutes}`
  return formattedDate
}



function deleteTodo() {
  const deleteBtn = document.querySelectorAll('.delete-todo')
  deleteBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      toDoListData.splice(index, 1)
      localStorage.setItem('todolistdata', JSON.stringify(toDoListData))
      renderTodos()
    })
  })
}

renderTodos()

