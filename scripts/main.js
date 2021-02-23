var pantallaCarga = new bootstrap.Modal(document.getElementById('pantallaCarga'), {})

let listedStateUl = document.getElementById('listedStateUl')
let initialState = document.getElementById('initialState')
let listedState = document.getElementById('listedState')
let detailedState = document.getElementById('detailedState')

let pantallaCargaAdd = document.getElementById('pantallaCargaAdd').addEventListener('click', function () {
    let pantallaCargaProducto = document.getElementById('pantallaCargaProducto').value
    let pantallaCargaIcono = document.getElementById('pantallaCargaIcono').value
    let pantallaCargaDescripcion = document.getElementById('pantallaCargaDescripcion').value

    document.getElementById('pantallaCargaProducto').value = ""
    document.getElementById('pantallaCargaIcono').value = ""
    document.getElementById('pantallaCargaDescripcion').value = ""

    let modelo = `<li class="list-group-item" data-task="${pantallaCargaProducto}" data-icon="${pantallaCargaIcono}" data-info="${pantallaCargaDescripcion}"
    ><img src="${pantallaCargaIcono}" alt=${pantallaCargaProducto} class="listedStateIcon">${pantallaCargaProducto}</li>`

    listedStateUl.innerHTML += modelo
    pantallaCarga.hide()
    initialState.style.display = 'none'
    listedState.style.display = 'flex'

    console.log(modelo, listedStateUl)


})

let clickListUl = document.getElementById('listedStateUl').addEventListener('click', function (e) {
    document.getElementById('detailedStateIcon').src = e.target.getAttribute('data-icon')
    document.getElementById('detailedStateProduct').innerHTML = e.target.getAttribute('data-task')
    document.getElementById('detailedStateInfo').innerHTML = e.target.getAttribute('data-info')
    listedState.style.display = 'none'
    detailedState.style.display = 'flex'
    
})

let detailedStateButton = document.getElementById('detailedStateButton').addEventListener('click', function(){
    listedState.style.display = 'flex'
    detailedState.style.display = 'none'
})