import { generateUniqueId } from './utils'
import { todoList } from '../main'
export const projects = JSON.parse(localStorage.getItem('projects')) || [
  {
    name: 'Default',
    todos: [],
    id: '9pfm25j5o',
  },
]
export let projectName = 'default'

export default class Project {
  constructor(name) {
    this.name = name
    this.todos = []
    this.id = generateUniqueId()
  }

  addTodo(todo) {
    this.todos.push(todo)
  }
}

export function createNewProject(projectName) {
  const project = new Project(projectName)
  console.log(projects)
  projects.push(project)
  localStorage.setItem('projects', JSON.stringify(projects))
  renderProjects()

  // Add UI logic to display the project in your projects tab
}

export function addTodoToProject(projectName, todo) {
  const project = projects.find((p) => p.name === projectName)
  if (project) {
    project.addTodo(todo)
    // Update your UI to display the new todo in the project
  }
}

export function renderProjects() {
  const projectsUL = document.querySelector('.project-item')
  
  projectsUL.innerHTML = ''
  projects.forEach((project, index) => {
    const newProjectItem = document.createElement('li')
    newProjectItem.setAttribute('class', 'project-item-li')
    newProjectItem.innerHTML = `${project.name} <span class="delete-project-btn">×</span> `
    projectsUL.appendChild(newProjectItem)

    newProjectItem.addEventListener('click', () => {
      const listProjects = document.querySelectorAll('.project-item-li')
      listProjects.forEach((li) => {
        li.classList.remove('active')
      })
      newProjectItem.classList.add('active') // Add "active" class to the clicked item
      projectName = newProjectItem.innerText.replace(/[^a-zA-Z ]/g, '')
      todoList.selectedProject = projectName
      todoList.render()
    })

    // Check if it's the first iteration and add "active" class
    if (index === 0) {
      newProjectItem.classList.add('active')
      newProjectItem.classList.add('default')
      projectName = project.name
      todoList.selectedProject = projectName
      todoList.render()
    }
  })
}
