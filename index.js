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
console.log(categories)

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


function filterCategories(arrayActividades) {
    let elegidos = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(boxCheck => boxCheck.value.replace("-", " "))

 console.log(elegidos)
    if (elegidos.length > 0) {
        return arrayActividades.filter(actividad => elegidos.includes(actividad.category))

    } return arrayActividades
   
}


function filterForText(arrayActividades) {
    return arrayActividades.filter(actividad => actividad.name.toLowerCase().includes(boxSearchPpal.value.toLowerCase()))
}



//Cards index

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
//         let nombre = event.name.toLowerCase();
//         if (nombre.indexOf(textoIngresado) !== -1) {
//             resultado.innerHTML += `
//         <li> ${event.name} - category: ${event.category}</li>
//     `
//         }
//     }
// }


// search.addEventListener('keyup', filtro);




