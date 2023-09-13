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

export function deleteProject(id) {
  console.log('projeto deletado')
}

export function createNewProject(projectName) {
  const project = new Project(projectName)
  projects.forEach((p) => (p.active = false))
  project.active = true
  projects.push(project)
  localStorage.setItem('projects', JSON.stringify(projects))
  todoList.selectedProject = projectName
  todoList.render()
  renderProjects()
}

export function addTodoToProject(projectId, todo) {
  const project = projects.find((p) => p.id === projectId)
  if (project instanceof Project) {
    try {
      project.addTodo(todo)
    } catch (error) {
      console.log(error)
    }
  }
}

export function renderProjects() {
  const projectsUL = document.querySelector('.project-item')

  if (projects.length === 0) {
    createNewProject('Default')
  }

  projectsUL.innerHTML = ''
  projects.forEach((project) => {
    const newProjectItem = document.createElement('li')
    newProjectItem.setAttribute('class', 'project-item-li')
    newProjectItem.innerHTML = `${project.name} <span id=${project.id} class="delete-project-btn">×</span> `
    projectsUL.appendChild(newProjectItem)

    const deleteProjectBtn = newProjectItem.querySelector('.delete-project-btn')

    deleteProjectBtn.addEventListener('click', (event) => {
      const projectId = deleteProjectBtn.id
      deleteProjectById(projectId, project.name)
    })

    newProjectItem.addEventListener('click', () => {
      const listProjects = document.querySelectorAll('.project-item-li')
      listProjects.forEach((li) => {
        li.classList.remove('active')
      })
      newProjectItem.classList.add('active')
      projectName = project.name
      todoList.selectedProject = projectName
      todoList.render()
    })

    if (project.active) {
      newProjectItem.classList.add('active')

     
    }
  })
}

export function deleteProjectById(id, name) {
  if (!confirm(`Are you sure you want to delete project ${name}?`)) return
  const index = projects.findIndex((project) => project.id === id)
  if (index !== -1) {
    projects.splice(index, 1)
    localStorage.setItem('projects', JSON.stringify(projects))
    renderProjects()
  }
}
