const arrayEvents = data.events;
const contenedor = document.getElementById("cont-cards");
console.log(arrayEvents)

for (let event of arrayEvents) {
    const card = document.createElement("div")

    card.classList.add("card")
    card.style.width = "18rem"
    card.innerHTML = `

    <img src="${event.image}" class="card-img-top h-50" 
     alt="Collectivities Party">
     <div class="card-body">
    <h5 class="card-tittle"> ${event.name}</h5>
    <p class"card-text text-truncate">${event.description}</p>
        <div class="d-flex justify-content-between">
            <p class"text-start d-flex"> $ ${event.price}</p>
            <a href="#" class="btn btn-outline-danger">Details </a>
        </div>
    </div>
    `
    contenedor.appendChild(card)
}

// {/* <div class="d-flex flex-wrap justify-content-evenly">
// <div class="card my-3" style="width: 18rem;">
//     <img src="./Recursos_Amazing_Events_Task_1/music_concert.jpg" class="card-img-top" alt="music concert">
//     <div class="card-body">
//         <h5 class="card-title">Metallica in concert</h5>
//         <p class="card-text text-truncate">The only concert of the most emblematic band in the world</p>
//         <div class="d-flex justify-content-between">
//             <p> $150</p>
//             <a href="#" class="btn btn-outline-danger">Details </a>
//         </div>
//     </div>
// </div> */}
