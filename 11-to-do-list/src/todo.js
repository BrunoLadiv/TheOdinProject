// src/todo.js
class Todo {
  constructor({ title, date, description, priority, project }) {
    this.id = generateUniqueId(); // Generate a unique ID
    this.title = title;
    this.date = date;
    this.description = description;
    this.priority = priority;
    this.project = project;
    this.completed = false;
  }

  markAsComplete() {
    this.completed = true;
  }

  markAsIncomplete() {
    this.completed = false;
  }
}

function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

export default Todo;
