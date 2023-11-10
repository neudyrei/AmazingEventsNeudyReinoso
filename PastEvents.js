const backgroundBody = document.getElementById("body-past")
backgroundBody.style.backgroundColor = ("#e4c1f9");

const backgroundHeader = document.getElementById("header-past")
backgroundHeader.style.backgroundColor = ("#ff99c8");

const backgroundFooter = document.getElementById("footer-past")
backgroundFooter.style.backgroundColor = ("#ff99c8");

import {url} from "./Modules/funciones.js"
import {CrearChecks,crearCards, filterPotenciado, boxCheckAll, boxSearchPpal} from "./Modules/funciones.js"
let categories = [];

fetch(url)
.then(respuesta => respuesta.json())
.then(data =>{
    const eventos = data.events
    const arrayPastEvents = [];
    console.log(eventos)
    categories = Array.from(new Set(eventos.map((event) => event.category.replace(" ", "-"))));
    console.log(categories)
    const currentDate = ( "2023-01-01")
    CrearChecks(categories);

    // CREACION DE CARDS
    for (let event of eventos){
    if(event.date < currentDate){
        arrayPastEvents.push(event)
    }
    }
    crearCards(arrayPastEvents);

    boxCheckAll.addEventListener('change', () => {

        filterPotenciado(arrayPastEvents)
    })
    
    boxSearchPpal.addEventListener("keyup", () => {
        filterPotenciado(arrayPastEvents)
    })
    console.table(arrayPastEvents)
})


