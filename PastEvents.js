const backgroundBody = document.getElementById("body-past")
backgroundBody.style.backgroundColor = ("#e4c1f9");

const backgroundHeader = document.getElementById("header-past")
backgroundHeader.style.backgroundColor = ("#ff99c8");

const backgroundFooter = document.getElementById("footer-past")
backgroundFooter.style.backgroundColor = ("#ff99c8");




const arrayEvents = data.events;
const boxCheckAll = document.getElementById("box-check-past");
const boxSearchPpal = document.getElementById("search-past");
const contenedor = document.getElementById("cont-cards-past");
let categories = []
categories = Array.from(new Set(arrayEvents.map((event) => event.category.replace(" ", "-"))));
const arrayPastEvents = []
const currentDate = ( "2023-01-01")


// PAST EVENTS


// CREACION DE CHECKS
function CrearChecks(arrayActividades) {
    arrayActividades.forEach(category => {
        const boxCheck = document.createElement("div");
        boxCheck.classList.add("form-check", "form-switch");
        boxCheck.innerHTML = `
        <input class="form-check-input" type="checkbox" role="switch" id=${category} value=${category}>
        <label class="form-check-label" for=${category}>${category.replace("-", " ")}</label>
`;
        boxCheckAll.appendChild(boxCheck);

    });
}

CrearChecks(categories)

// FILTRO POR CATEGORIAS
function filterCategories(arrayActividades) {
    let elegidos = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(boxCheck => boxCheck.value.replace("-", " "))

 console.log(elegidos)
    if (elegidos.length > 0) {
        return arrayActividades.filter(actividad => elegidos.includes(actividad.category))

    } return arrayActividades
   
}

// FILTRO POR TEXTO
function filterForText(arrayActividades) {
    return arrayActividades.filter(actividad => actividad.name.toLowerCase().includes(boxSearchPpal.value.toLowerCase()))
}

// CREACION DE CARDS
for (let event of arrayEvents){
    if(event.date < currentDate){
        arrayPastEvents.push(event)
    }
}

console.log(arrayPastEvents)

function crearCards(arrayActividades) {
    if (arrayActividades.length == 0) {
        contenedor.innerHTML = `
        <img src="./Recursos_Amazing_Events_Task_1/page-not-found.jpg" id="image-not-found" class="img-fluid" alt="no-encontrado">
        <h2>No se encontraron resultados para tu busqueda</h2>`
    }else{
    contenedor.innerHTML = ""
    arrayActividades.forEach(event => {

        const card = document.createElement("div")
        card.classList.add("card")
        card.style.width = "18rem"
        card.style.backgroundColor = ("#3c096c")
        card.style.color = ("white")
        card.innerHTML = `
    
        <img src="${event.image}" class="card-img-top h-50"
         alt="Collectivities Party">
         <div class="card-body">
        <h5 class="card-tittle"> ${event.name}</h5>
        <p class="card-text text-truncate">${event.description}</p>
            <div class="d-flex justify-content-between">
                <p class"text-start d-flex"> $ ${event.price}</p>
                <a href="./Details.html?_id=${event._id} " class="btn btn-outline-info">Details </a>
            </div>
        </div>
        `;
        contenedor.appendChild(card);
    })
}
}
crearCards(arrayPastEvents)

function filterPotenciado(arrayActividades) {
    let filter1 = filterCategories(arrayActividades)
    let filter2 = filterForText(filter1)
    crearCards(filter2)
}

boxCheckAll.addEventListener('change', () => {

    filterPotenciado(arrayPastEvents)
})

boxSearchPpal.addEventListener("keyup", () => {
    filterPotenciado(arrayPastEvents)
})