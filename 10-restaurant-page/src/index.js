import './styles.css'
import { createHeader } from './pages/header'
import { createHome } from './pages/home'
import { createMenuSection as createMenu } from './pages/menu'
import { createContactPage } from './pages/contactus'
const contactus = createContactPage()
const menu = createMenu()
const header = createHeader()
const home = createHome()
const content = document.getElementById('content')
content.appendChild(header)
content.appendChild(home)

const nav = document.querySelector('nav')
const line = nav.querySelector('.line')
const navLinks = nav.querySelectorAll('ul li')

navLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault()

    // Remove the 'active' class from all nav items
    navLinks.forEach((item) => item.classList.remove('active'))

    // Add the 'active' class to the clicked li
    this.classList.add('active')

    if (this.textContent === 'Home') {
      removePage(menu)
      removePage(contactus)
      addPage(home)
    } else if (this.textContent === 'Menu') {
      removePage(home)
      removePage(contactus)
      addPage(menu)
    } else if (this.textContent === 'Contact Us') {
      removePage(home)
      removePage(menu)
      addPage(contactus)
    }

    // Position the line under the clicked li with a transition
    const position = this.getBoundingClientRect()
    const navPosition = nav.getBoundingClientRect()
    line.style.transition = 'transform 0.3s ease-in-out'
    line.style.transform = `translateX(${position.left - navPosition.left}px)`

    // After the transition is complete, remove the transform and set the width
    setTimeout(() => {
      line.style.transition = ''
      line.style.width = position.width + 'px'
    }, 300)
  })
})

// Function to add a page to the DOM
function addPage(page) {
  content.appendChild(page)
}

// Function to remove a page from the DOM
function removePage(page) {
  if (page.parentNode) {
    page.parentNode.removeChild(page)
  }
}
