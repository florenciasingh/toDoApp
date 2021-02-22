// selectors
let titleInput = document.getElementById('titleInput')
let descriptionInput = document.getElementById('descriptionInput')
let addTaskButton = document.getElementById('addTaskButton')

let titleButton = document.getElementById('titleButton')
let descriptionButton = document.getElementById('descriptionButton')

let toDoList = document.getElementById('toDoList')

// event listeners

addTask.addEventListener('click', addToDo)

// functions

function addToDo(event) {
    event.preventDefault()
    //todo DIV
    const toDoDiv = document.createElement('div')
    toDoDiv.classList.add('toDo')
    // create li
    const newToDo = document.createElement('li')
    newToDo.innerText = 'hey'
    newToDo.classList.add('toDoItem')
    toDoDiv.appendChild(newToDo)
    // check mark button
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('completedButton')
    toDoDiv.appendChild(completedButton)
    // pop-up details
    const detailsButton = document.createElement('button')
    detailsButton.innerHTML = '<i class="fas fa-chevron-double-right"></i>'
    detailsButton.classList.add('detailsButton')
    toDoDiv.appendChild(detailsButton)
    // append to list
    toDoList.appendChild(toDoDiv)
}


// new Task new Object?

