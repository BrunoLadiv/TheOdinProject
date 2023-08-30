function Book(title, author, pages, isRead = false) {
  this.title = title
  this.author = author
  this.pages = pages
  this.isRead = isRead
  this.info = ()=> console.log(`Title: ${this.title}, Author ${this.author}, Pages ${this.pages}, ${this.isRead ? 'Already read': 'Not read yet'}`)
}


const theHobbit = new Book('The Hobbit', "J. R. R. Tolkien", 3432, true)


theHobbit.info()