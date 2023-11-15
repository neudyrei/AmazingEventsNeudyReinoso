console.log("hola")
const backgroundBody = document.getElementById("body-index")
backgroundBody.style.backgroundColor = ("#e4c1f9");

const backgroundHeader = document.getElementById("header-index")
backgroundHeader.style.backgroundColor = ("#ff99c8");

const backgroundFooter = document.getElementById("footer-index")
backgroundFooter.style.backgroundColor = ("#ff99c8");

//HOME
import {url} from "./Modules/funciones.js"
import {boxCheckAll, boxSearchPpal, CrearChecks,crearCards, filterPotenciado} from "./Modules/funciones.js"
let categories = [];

console.log(categories)
 
fetch(url)
.then(respuesta => respuesta.json())
.then(data =>{
    const eventos = data.events
    console.log(eventos)
    categories = Array.from(new Set(eventos.map((event) => event.category.replace(" ", "-"))));
    console.log(categories)
    CrearChecks(categories);
    crearCards(eventos);
    

    boxCheckAll.addEventListener('change', () => {

        filterPotenciado(eventos)
    })
    
    boxSearchPpal.addEventListener("keyup", () => {
        filterPotenciado(eventos)
    })
})
// .catch (error => console.log(error))




