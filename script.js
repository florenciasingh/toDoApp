// selectors
let titleInput = document.getElementById('titleInput')
let descriptionInput = document.getElementById('descriptionInput')

let addTaskButton = document.getElementById('addTaskButton')
let toDoList = document.getElementById('toDoList')

// functions
function addToDo() {
    
    //todo DIV
    let toDoDiv = document.createElement('div')
    toDoDiv.classList.add('toDo')
    // create li 
    let toDoLi = document.createElement('li')
    toDoLi.classList.add('toDoLi')
    toDoDiv.appendChild(toDoLi)
    // create title
    let toDoTitle = document.createElement('p')
    toDoTitle.classList.add('toDoTitle')
    toDoTitle.textContent = titleInput.value
    toDoLi.appendChild(toDoTitle)
    // create description 
    let toDoDescription = document.createElement('p')
    toDoDescription.classList.add ('toDoDescription')
    toDoDescription.textContent = descriptionInput.value
    toDoDiv.appendChild(toDoDescription)
    // check mark button
    let completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('completedButton')
    toDoDiv.appendChild(completedButton)
    // pop-up details
    let detailsButton = document.createElement('button')
    detailsButton.innerHTML = '<i class="fas fa-chevron-double-right"></i>'
    detailsButton.classList.add('detailsButton')
    toDoDiv.appendChild(detailsButton)
    // append to list
    toDoList.appendChild(toDoDiv)
}

// event listeners
addTaskButton.addEventListener('click', addToDo())

