const backgroundBody = document.getElementById("body-index")
backgroundBody.style.backgroundColor = ("#e4c1f9");

const backgroundHeader = document.getElementById("header-index")
backgroundHeader.style.backgroundColor = ("#ff99c8");

const backgroundFooter = document.getElementById("footer-index")
backgroundFooter.style.backgroundColor = ("#ff99c8");

//HOME
const arrayEvents = data.events;
const boxCheckAll = document.getElementById("box-check-all");
const boxSearchPpal = document.getElementById("input-search");
const contenedor = document.getElementById("cont-cards");
let categories = []
categories = Array.from(new Set(arrayEvents.map((event) => event.category.replace(" ", "-"))));


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


// function CrearSearch(arrayActividades) {
//         const boxSearch = document.createElement("div");
//         boxSearch.classList.add("d-flex", "justify-content-end");
//         boxSearch.innerHTML = `
//         <form id="buscador" class="d-flex" role="search">
//         <input id="input-btn" class="form-control me-2 btn btn-outline-info" type="search" placeholder="Search"
//             aria-label="Search">
//         <button id="boton" type="button" class="btn btn-outline-info">
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                 class="bi bi-search-heart" viewBox="0 0 16 16">
//                 <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"></path>
//                 <path
//                     d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z">
//                 </path>
//             </svg>
//         </button>
//     </form>
//     `;
//         boxSearchPpal.appendChild(boxSearch);
// }
// CrearSearch(arrayEvents)

function filterCategories(arrayActividades) {
    let checked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(boxCheck => boxCheck.value)


    if (checked.length > 0) {
        return arrayActividades.filter(actividad => checked.includes(actividad.category))

    } return arrayActividades

}

function filterForText(arrayActividades) {
    return arrayActividades.filter(actividad => actividad.name.toLowerCase().includes(boxSearchPpal.value.toLowerCase()))
}



//Cards index

function crearCards(arrayActividades) {
    if (arrayActividades.length == 0) {
        contenedor.innerHTML = `
        <img src="./Recursos_Amazing_Events_Task_1/page-not-found.jpg" alt="no-encontrado">
        <h2>No se encontraron resultados para tu busqueda</h2>`
    }
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

crearCards(arrayEvents);


function filterPotenciado(arrayActividades) {
    let filter1 = filterCategories(arrayActividades)
    let filter2 = filterForText(filter1)
    crearCards(filter2)
}

boxCheckAll.addEventListener('change', () => {

    filterPotenciado(arrayEvents)
})

boxSearchPpal.addEventListener("keyup", () => {
    filterPotenciado(arrayEvents)
})

//Buton Search
// const buscador = document.getElementById("buscador");
// const search = document.querySelector("input-btn");
// const boton = document.querySelector("boton");
// const resultado = document.querySelector("resultado");


// const filtro = () => {

//     // console.log(search.value);
//     const textoIngresado = search.value.toLocaleLowerCase();
//     for (let event of events) {
//         let nombre = event.name.toLocaleLowerCase();
//         if (nombre.indexOf(textoIngresado) !== -1) {
//             resultado.innerHTML += `
//         <li> ${event.name} - category: ${event.category}</li>
//     `
//         }
//     }
// }


// search.addEventListener('keyup', filtro);




