var pantallaCarga = new bootstrap.Modal(
  document.getElementById("pantallaCarga"),
  {}
);

let listedStateUl = document.getElementById("listedStateUl");
let initialState = document.getElementById("initialState");
let listedState = document.getElementById("listedState");
let detailedState = document.getElementById("detailedState");
let listedStateLi = document.getElementById("listedStateLi");
let listadoStorage = [];

let pantallaCargaAdd = document
  .getElementById("pantallaCargaAdd")
  .addEventListener("click", function () {
    let pantallaCargaProducto = document.getElementById("pantallaCargaProducto")
      .value;
    let pantallaCargaIcono = document.getElementById("pantallaCargaIcono")
      .value;
    let pantallaCargaDescripcion = document.getElementById(
      "pantallaCargaDescripcion"
    ).value;

    document.getElementById("pantallaCargaProducto").value = "";
    document.getElementById("pantallaCargaIcono").value = "";
    document.getElementById("pantallaCargaDescripcion").value = "";

    let modelo = `<li id="listedStateLi" class="list-group-item" data-task="${pantallaCargaProducto}" data-icon="${pantallaCargaIcono}" data-info="${pantallaCargaDescripcion}"
    ><img src="${pantallaCargaIcono}" alt=${pantallaCargaProducto} class="listedStateIcon"></i><p>${pantallaCargaProducto}</p></li>`;

    listedStateUl.innerHTML += modelo;
    pantallaCarga.hide();
    initialState.style.display = "none";
    listedState.style.display = "flex";
    listadoStorage.push(modelo);
    localStorage.setItem("listadoDeCompras", listadoStorage);
  });

let clickListUl = document
  .getElementById("listedStateUl")
  .addEventListener("click", function (e) {
    document.getElementById("detailedStateIcon").src = e.target.getAttribute(
      "data-icon"
    );
    document.getElementById(
      "detailedStateProduct"
    ).innerHTML = e.target.getAttribute("data-task");
    document.getElementById(
      "detailedStateInfo"
    ).innerHTML = e.target.getAttribute("data-info");
    listedState.style.display = "none";
    detailedState.style.display = "flex";
  });

let detailedStateButton = document
  .getElementById("detailedStateButton")
  .addEventListener("click", function () {
    listedState.style.display = "flex";
    detailedState.style.display = "none";
  });

let desdeStorage = localStorage.getItem("listadoDeCompras");
if (desdeStorage) {
  initialState.style.display = "none";
  listedState.style.display = "flex";
  listedStateUl.innerHTML += desdeStorage;
}

let detailedStateDelete = document
  .getElementById("detailedStateDelete")
  .addEventListener("click", function (e) {
    let li = document.getElementById("listedStateLie");

    const item = e.target;
    if (item.classList[0] === "deleteButton") {
      li.remove();
      listedState.style.display = "flex";
      detailedState.style.display = "none";
      localStorage.removeItem(e);
    }
  });
