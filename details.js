const backgroundBody = document.getElementById("body-detail")
backgroundBody.style.backgroundColor = ("#e4c1f9");

const backgroundHeader = document.getElementById("header-detail")
backgroundHeader.style.backgroundColor = ("#ff99c8");

const backgroundFooter = document.getElementById("footer-detail")
backgroundFooter.style.backgroundColor = ("#ff99c8");


const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get("_id")

const arrayEvents = data.events;

let eventEncontrado= arrayEvents.find(event => event._id == id)
const contenedorDetails = document.getElementById("box-details");
console.log(id)


function crearCard (event) {
    const card = document.createElement("div")
    card.classList.add("card")
    card.style.width = "30rem"
    card.style.color= ("white")
    card.innerHTML =`

    <div class="d-flex flex-column justify-content-center align-items-center">
    <div class="card mb-3 border border-danger" style="max-width: 540px;">
        <div class="row g-0 d-flex align-items-center">
            <div class="col-md-6">
                <img src=${event.image} class="img-fluid rounded-start" alt="music concert">
            </div>
            <div class="col-md-6">
                <div class="card-body">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text">${event.description}</p>

                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><small class="text-body-secondary">Date:"${event.date}"</small></li>
                        <li class="list-group-item"><small class="text-body-secondary">Category: ${event.category}</small></li>
                        <li class="list-group-item"><small class="text-body-secondary">Place: ${event.place}</small></li>
                        <li class="list-group-item"><small class="text-body-secondary">Capacity: ${event.capacity}</small></li>
                        <li class="list-group-item"><small class="text-body-secondary">Assistance: ${event.assitance}</small></li>
                        <li class="list-group-item"><small class="text-body-secondary">Price: ${event.price}</small></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `
    contenedorDetails.appendChild(card)
}

 crearCard(eventEncontrado)
