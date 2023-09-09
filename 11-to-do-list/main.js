// main.js
import './style.css'
import TodoList from './src/todolist.js'
import { generateUniqueId } from './src/utils'
import { createNewProject, projects, addTodoToProject } from './src/projects'
const newProjectBtn = document.querySelector('.new-project-btn')
const showProjectsForm = document.querySelector('.projects-form')
const addProject = document.querySelector('.add-project')
const projectSelectInput = document.querySelector('#project-select')

newProjectBtn.addEventListener('click', () => {
  const projectName = document.querySelector('.project-name-input').value
  createNewProject(projectName)
  console.log(projectName)
})

addProject.addEventListener('click', () => {
  showProjectsForm.showModal()
})

document.addEventListener('DOMContentLoaded', () => {
  const todoList = new TodoList()
  const addTodoBtn = document.querySelector('.plus-todo')
  const newTodoModal = document.querySelector('.new-todo-modal') // Get the dialog element

  addTodoBtn.addEventListener('click', () => {
    newTodoModal.showModal()
    renderProjectOptions() // Use showModal on the dialog element
  })

  const createTodoForm = document.querySelector('.new-todo-form')

  createTodoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const selectedProject = document.getElementById('project-select').value
    const title = createTodoForm.querySelector('input[name="title"]').value
    const date = createTodoForm.querySelector('input[name="date"]').value
    const description = createTodoForm.querySelector('textarea').value
    const priority = createTodoForm.querySelector('#taskPriority').value

    const newTodo = {
      title,
      date,
      description,
      priority,
      completed: false,
      project: selectedProject,
      id: generateUniqueId(),
    }

    todoList.addTodo(newTodo)
    addTodoToProject(newTodo.project, newTodo)
    newTodoModal.close() // Use close on the dialog element to close it
  })

  todoList.render()
})

function renderProjectOptions() {
  projects.forEach((project) => {
    const projectOption = document.createElement('option')
    projectOption.innerText = project.name
    projectSelectInput.appendChild(projectOption)
  })
}
