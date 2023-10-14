const backgroundBody = document.getElementById("body-index")
backgroundBody.style.backgroundColor= ("#e4c1f9");

const backgroundHeader = document.getElementById("header-index")
backgroundHeader.style.backgroundColor= ("#ff99c8");

const backgroundFooter = document.getElementById("footer-index")
backgroundFooter.style.backgroundColor= ("#ff99c8");

const arrayEvents = data.events;
const contenedor = document.getElementById("cont-cards");
console.log(arrayEvents)

for (let event of arrayEvents) {
    const card = document.createElement("div")

    card.classList.add("card")
    card.style.width = "18rem"
    card.style.backgroundColor= ("#3c096c")
    card.style.color= ("white")
    card.innerHTML = `

    <img src="${event.image}" class="card-img-top h-50" 
     alt="Collectivities Party">
     <div class="card-body">
    <h5 class="card-tittle"> ${event.name}</h5>
    <p class="card-text text-truncate">${event.description}</p>
        <div class="d-flex justify-content-between">
            <p class"text-start d-flex"> $ ${event.price}</p>
            <a href="#" class="btn btn-outline-info">Details </a>
        </div>
    </div>
    `
    contenedor.appendChild(card)
}

