import { formatDate, checkPriority } from './utils'
import {projectName} from './projects'

class TodoList {
  constructor() {
    this.uncompletedTab = document.getElementById('radio-2')
    this.allTab = document.getElementById('radio-1')
    this.completedTab = document.getElementById('radio-3')
    this.todos = JSON.parse(localStorage.getItem('todolistdata')) || []
    this.selectedFilter = 'all'
    this.selectedProject = 'default'
    
    
    this.handleTab()
  }

  addTodo(todo) {
    this.todos.push(todo)
    localStorage.setItem('todolistdata', JSON.stringify(this.todos))
    this.render()
  }

  removeTodoById(id) {
    const index = this.todos.findIndex((todo) => todo.id === id)
    if (index !== -1) {
      this.todos.splice(index, 1)
      localStorage.setItem('todolistdata', JSON.stringify(this.todos))
      this.render()
    }
  }

  toggleTodoCompleteById(id) {
    const index = this.todos.findIndex((todo) => todo.id === id)
    if (index !== -1) {
      this.todos[index].completed = !this.todos[index].completed
      localStorage.setItem('todolistdata', JSON.stringify(this.todos))
      this.render()
    }
  }

  filterTasks() {
    let filteredTasks = []

    switch (this.selectedFilter) {
      case 'completed':
        // Filter completed tasks
        filteredTasks = this.todos.filter((todo) => todo.completed)
        break
      case 'uncompleted':
        // Show all tasks
        filteredTasks = this.todos.filter((todo) => !todo.completed)
        break

      case 'all':
        filteredTasks = this.todos
        break
      default:
        // Default to showing all tasks
        filteredTasks = this.todos
    }

    // Filter tasks by selected project
    filteredTasks = filteredTasks.filter(
      (todo) => todo.project === projectName
    )

    console.log(filteredTasks)
    return filteredTasks
  }

  setFilter(filter) {
    this.selectedFilter = filter
    this.render() // Re-render the todo list with the new filter
  }

  handleTab() {
    this.uncompletedTab.addEventListener('change', () => {
      if (this.uncompletedTab.checked) {
        this.setFilter('uncompleted')
      }
    })

    this.allTab.addEventListener('change', () => {
      if (this.allTab.checked) {
        this.setFilter('all')
      }
    })

    this.completedTab.addEventListener('change', () => {
      if (this.completedTab.checked) {
        this.setFilter('completed')
      }
    })
  }

  

  render() {
    const toDoUl = document.querySelector('.to-do-ul')

    toDoUl.innerHTML = ''

    this.filterTasks().forEach((todo) => {
      const newTodoLi = document.createElement('li')
      newTodoLi.setAttribute('id', todo.id)
      newTodoLi.setAttribute('class', 'todo-item')
      newTodoLi.innerHTML = `
        <p>
          <input
            class="todo-done"
            title="Mark as done"
            type="checkbox"
            ${todo.completed ? 'checked' : ''}
          />
          ${todo.title}
        </p>
        <p class="due-date">Due date: ${formatDate(todo.date)} </p>
        <div class="todo-buttons">
          <i class="fa-solid fa-circle-info"></i>
          <i
            title="Edit To-do"
            class="fa-regular fa-pen-to-square edit-todo"
          ></i>
          <i
            title="Delete To-do"
            class="fa-regular fa-trash-can delete-todo"
            data-todo-id="${todo.id}"
          ></i>
          <i class="fa-solid fa-flag ${checkPriority(todo.priority)}" title="${
        todo.priority
      } priority!"></i>
        </div>
      `

      toDoUl.appendChild(newTodoLi)
    })

    this.setupEventListeners()
  }

  setupEventListeners() {
    const deleteBtns = document.querySelectorAll('.delete-todo')
    deleteBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (!confirm("Are you sure you want to delete? It can't be undone!"))
          return

        const todoId = btn.getAttribute('data-todo-id')
        this.removeTodoById(todoId)
      })
    })

    const checkbox = document.querySelectorAll('.todo-done')
    checkbox.forEach((checkbox) => {
      checkbox.addEventListener('change', (event) => {
        const todoId = checkbox.closest('.todo-item').getAttribute('id')
        console.log(todoId)
        this.toggleTodoCompleteById(todoId)
      })
    })
  }
}

export default TodoList
