
//HOME
// export const arrayEvents = data.events;
export const boxCheckAll = document.getElementById("box-check-all");
export const boxSearchPpal = document.getElementById("input-search");
export const contenedorCards = document.getElementById("cont-cards");
export const contenedorDetails = document.getElementById("box-details");
export const table1st = document.getElementById("table-1st");
export const table2nd = document.getElementById("table-2nd");
export const table3th = document.getElementById("table-3th");

export const url = "https://mindhub-xj03.onrender.com/api/amazing"



export function CrearChecks(arrayActividades) {
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



export function filterCategories(arrayActividades) {
    let elegidos = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(boxCheck => boxCheck.value.replace("-", " "))

    console.log(elegidos)
    if (elegidos.length > 0) {
        return arrayActividades.filter(actividad => elegidos.includes(actividad.category))

    } return arrayActividades

}


export function filterForText(arrayActividades) {
    return arrayActividades.filter(actividad => actividad.name.toLowerCase().includes(boxSearchPpal.value.toLowerCase()))
}



//Cards index

export function crearCards(arrayActividades) {
    if (arrayActividades.length == 0) {
        contenedorCards.innerHTML = `
        <img src="./Recursos_Amazing_Events_Task_1/page-not-found.jpg" id="image-not-found" class="img-fluid" alt="no-encontrado">
        <h2>No se encontraron resultados para tu busqueda</h2>`
    } else {
        contenedorCards.innerHTML = ""
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
                <p class"text-start d-flex">$${event.price}</p>
                <a href="./Details.html?_id=${event._id} " class="btn btn-outline-info">Details </a>
            </div>
        </div>
        `;
            contenedorCards.appendChild(card);
        })
    }
}



export function filterPotenciado(arrayActividades) {
    let filter1 = filterCategories(arrayActividades)
    let filter2 = filterForText(filter1)
    crearCards(filter2)
}

// CARD DETAILS
export function crearCardDetails(event) {
    contenedorDetails.classList.add('container', 'shadow', 'd-flex');
    const card = document.createElement("div")
    card.classList.add("card");
    card.innerHTML = `
        
            <div class="row no-gutters g-0 d-flex align-items-center border border-info">
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
                            <li class="list-group-item"><small class="text-body-secondary">${event.assistance == null ? "Estimate: " + event.estimate : "Assistance:" + event.assistance}</small></li>
                            <li class="list-group-item"><small class="text-body-secondary">Price:$ ${event.price}</small></li>
                        </ul>
                    </div>
                </div>
            </div>
       
        `
    contenedorDetails.appendChild(card)
}




//CREATE TABLE

export function createTable(arrayActividades){
       
   
    const arrayPastEvents = arrayActividades.filter( event => (data.currentDate ) >(event.date))
    
    let assistanceEvents = arrayPastEvents.sort((a,b) => (b.assistance/b.capacity) - (a.assistance/a.capacity));
    let eventHighAssistance = assistanceEvents[0];
    let eventLowAssistance = assistanceEvents[assistanceEvents.length-1]
    let capacityEvents = arrayActividades.sort((a,b) => b.capacity - a.capacity);
    let eventHighCapacity = capacityEvents[0]
    let tr = document.createElement("tr"); 
    tr.classList = "table-danger";
    tr.innerHTML = `<td>${eventHighAssistance.name}</td>
         <td>${eventLowAssistance.name}</td>
         <td>${eventHighCapacity.name} </td>
         `
    table1st.appendChild(tr);
    console.log(eventHighAssistance);
    console.log(eventLowAssistance);
    console.log(eventHighCapacity);
    

    const eventsUpComing = events.filter(event => (data.currentDate)<(event.date))
    const categoriesUC = eventsUpComing.map(event => event.category)
    const arrayCategoriesUC = categoriesUC.filter((valor, indice) => categoriesUC.indexOf (valor) === indice);

    arrayCategoriesUC.forEach(category => {
    let eventsUCFilter = eventsUpComing.filter(event => event.category == category)
    let categoriesRevenuesUC = eventsUCFilter.map (event => event.estimate * event.price).reduce((a,b) => a + b, 0)
    let categoriesPercentageAssistanceUC = (eventsUCFilter.map (event => (event.estimate/event.capacity)*100).reduce((a,b) => a + b, 0))/eventsUCFilter.length    
    let tr = document.createElement("tr");
    tr.className = "table-danger";
    tr.innerHTML = `<td>${category}</td>
                <td>$${categoriesRevenuesUC}</td>
                <td> %${categoriesPercentageAssistanceUC.toFixed(1)}</td>
`
            table2nd.appendChild(tr);
    })

// const arrayPastEvents = arrayActividades.filter( event => (data.currentDate ) >(event.date))
    const categoriesPast = arrayPastEvents.map(event => event.category)
    const arrayCategoriesPast = categoriesPast.filter((valor, indice) => categoriesPast.indexOf(valor) === indice);

    arrayCategoriesPast.forEach(category => {
    let eventsFilterPast = eventsFilterPast.filter(event => event.category == category)
    let categoriesRevenuesPast = eventsFilterPast.map (event => (event.assistance*event.price).reduce((a,b) => a + b, 0))
    let percentageAssistancePast = (eventsFilterPast.map(event => (event.assistance/event.capacity)*100).reduce((a,b) => a + b, 0))/eventsFilterPast.length

    let tr = document.createElement("tr");
    tr.classList = "table-danger";
    tr.innerHTML = ` <td> ${category}</td>
    <td> ${categoriesRevenuesPast}</td>
    <td> ${percentageAssistancePast.toFixed(1)}</td>
    `
    table3th.appendChild(tr);
})


}