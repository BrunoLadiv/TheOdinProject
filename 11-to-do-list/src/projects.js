import { generateUniqueId } from './utils'
import { todoList } from '../main'
export const projects = JSON.parse(localStorage.getItem('projects')) || []
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

  projects.push(project)
  localStorage.setItem('projects', JSON.stringify(projects))
  renderProjects()
}

export function addTodoToProject(projectName, todo) {
  const project = projects.find((p) => p.name === projectName)
  console.log(project)
  if (project) {
    project.addTodo(todo)
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
