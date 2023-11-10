const backgroundBody = document.getElementById("body-detail")
backgroundBody.style.backgroundColor = ("#e4c1f9");

const backgroundHeader = document.getElementById("header-detail")
backgroundHeader.style.backgroundColor = ("#ff99c8");

const backgroundFooter = document.getElementById("footer-detail")
backgroundFooter.style.backgroundColor = ("#ff99c8");

import {url} from "./Modules/funciones.js"
import {crearCardDetails} from "./Modules/funciones.js"
const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get("_id")


fetch(url)
.then(respuesta => respuesta.json())
.then(data =>{
    const eventos = data.events
    let eventEncontrado = eventos.find(event => event._id == id)

    crearCardDetails(eventEncontrado)
})



