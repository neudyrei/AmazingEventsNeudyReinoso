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
    contenedorDetails.classList.add('container', 'shadow', 'd-flex');
    const card = document.createElement("div")
    card.classList.add("card");
    // card.style.width = "30rem"
    // card.style.color= ("re")
    card.innerHTML =`
    
        <div class="row no-gutters g-0 d-flex align-items-center border border-danger">
            <div class="col-md-6">
                <img src=${event.image} class="img-fluid card-img h-100" alt="music concert">
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
                        <li class="list-group-item"><small class="text-body-secondary">${event.assistance==null?"Estimate: "+ event.estimate: "Assistance:"+ event.assistance}</small></li>
                        <li class="list-group-item"><small class="text-body-secondary">Price: ${event.price}</small></li>
                    </ul>
                </div>
            </div>
        </div>
   
    `
    contenedorDetails.appendChild(card)
}

 crearCard(eventEncontrado)


//  const consultaURL = new URLSearchParams(window.location.search)
// const id = consultaURL.get("_id")
// const usuarios = data.events
// const evento = usuarios.find(evento => evento._id === id)
// const contenedorDetails = document.getElementById("contenedorDetails")

// function funcionCards() {
//     contenedorDetails.classList.add('container', 'shadow', 'd-flex');
//     const creadorCards = document.createElement("div")
//     creadorCards.classList.add('card');
//     creadorCards.innerHTML = 
//         <div class="row no-gutters">
//             <div class="col-md-6">
//                 <img src="${evento.image}" class="card-img h-100 img-fluid"
//                 alt="Food Fair">
//             </div>
//         <div class="col-md-6">
//         <div class="card-body">
//             <h5 class="card-title"> ${evento.name}</h5>
//             <p class="card-text"> ${evento.description}</p>
//             <p class="card-text"><strong>Date:</strong> ${evento.date}</p>
//             <p class="card-text"><strong>Category:</strong> ${evento.category}</p>
//             <p class="card-text"><strong>Place:</strong> ${evento.place}</p>
//             <p class="card-text"><strong>Capacity:</strong> ${evento.capacity}</p>
//             <p class="card-text"> ${evento.assistance==null?"<strong>Estimate: </strong>"+evento.estimate:"<strong>Assistance: </strong>"+evento.assistance}</p>
//             <p class="card-text"><strong>Price:</strong> $ ${evento.price}</p>
//             </div>
//         </div>
//         </div>
//         contenedorDetails.appendChild(creadorCards);
// }

// funcionCards (evento)
