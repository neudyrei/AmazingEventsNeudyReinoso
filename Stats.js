import {url} from "./Modules/funciones.js"
import {table1st, table2nd, table3th} from "./Modules/funciones.js"
let categories = [];


fetch(url)
.then(respuesta => respuesta.json())
.then(data =>{
    
    const events = data.events
    console.log(events)

    function createTable(arrayActividades){
       
   
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
            
    
    }


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

    const eventsPast = events.filter( event => (data.currentDate ) >(event.date))
    const categoriesPast = eventsPast.map(event => event.category)
    const arrayCategoriesPast = categoriesPast.filter((valor, indice) => categoriesPast.indexOf(valor) === indice);

    arrayCategoriesPast.forEach(category => {
    let eventsFilterPast = eventsPast.filter(event => event.category == category)
    let categoriesRevenuesPast = eventsFilterPast.map (event => event.assistance*event.price).reduce((a,b) => a + b, 0)
    let percentageAssistancePast = (eventsFilterPast.map(event => (event.assistance/event.capacity)*100).reduce((a,b) => a + b, 0))/eventsFilterPast.length

    let tr = document.createElement("tr");
    tr.classList = "table-danger";
    tr.innerHTML = ` <td> ${category}</td>
    <td> $ ${categoriesRevenuesPast}</td>
    <td> % ${percentageAssistancePast.toFixed(1)}</td>
    `
    table3th.appendChild(tr);
})
   
  createTable(events)
})
    
    
    // createTable(events);

    // const eventsUpComing = events.filter(event => (data.currentDate)<(event.date))
    // const categoriesUC = eventsUpComing.map(event => event.category)
    // const arrayCategoriesUC = categoriesUC.filter((valor, indice) => categoriesUC.indexOf (valor) === indice);

    // arrayCategoriesUC.forEach(category => {
    // let eventsUCFilter = eventsUpComing.filter(event => event.category == category)
    // let categoriesRevenuesUC = eventsUCFilter.map (event => event.estimate * event.price).reduce((a,b) => a + b, 0)
    // let categoriesPercentageAssistanceUC = (eventsUCFilter.map (event => (event.estimate/event.capacity)*100).reduce((a,b) => a + b, 0))/eventsUCFilter.length    
    // let tr = document.createElement("tr");
    // tr.className = "table-danger";
    // tr.innerHTML = `<td>${category}</td>
    //                 <td>$${categoriesRevenuesUC}</td>
    //                 <td> %${categoriesPercentageAssistanceUC.toFixed(1)}</td>
    // `
    // table2nd.appendChild(tr);
    // })

    // const arrayPastEvents = arrayActividades.filter( event => (data.currentDate ) >(event.date))
    // const categoriesPast = arrayPastEvents.map(event => event.category)
    // const arrayCategoriesPast = categoriesPast.filter((valor, indice) => categoriesPast.indexOf(valor) === indice);
    
    // arrayCategoriesPast.forEach(category => {
    //     let eventsFilterPast = eventsFilterPast.filter(event => event.category == category)
    //     let categoriesRevenuesPast = eventsFilterPast.map (event => (event.assistance*event.price).reduce((a,b) => a + b, 0))
    //     let percentageAssistancePast = (eventsFilterPast.map(event => (event.assistance/event.capacity)*100).reduce((a,b) => a + b, 0))/eventsFilterPast.length
    
    //     let tr = document.createElement("tr");
    //     tr.classList = "table-danger";
    //     tr.innerHTML = ` <td> ${category}</td>
    //     <td> ${categoriesRevenuesPast}</td>
    //     <td> ${percentageAssistancePast.toFixed(1)}</td>
    //     `
    //     table3th.appendChild(tr);
    // })
        
// });






// impresion de la tercera tabla 


// const categoriesPE = eventsPE.map(evento => evento.category)
// const arrayCategoriesPE= categoriesPE.filter((valor, indice) => categoriesPE.indexOf(valor) === indice);
       
// arrayCategoriesPE.forEach(category=>{

//     let eventosFiltardos=eventsPE.filter(evento=> evento.category==category)
//     let GananciasPE= eventosFiltardos.map(evento=>evento.assistance*evento.price).reduce((a, b) => a + b, 0)
//     let porcentajeAEPE= (eventosFiltardos.map(evento=>(evento.assistance/evento.capacity)*100).reduce(a, b) => a + b, 0))/eventosFiltardos.length
    
//     let tr = document.createElement("tr");
//         tr.className = "table-secondary";
//         tr.innerHTML = `<td>${category}</td>
//                         <td>${GananciasPE}</td>
//                         <td>${porcentajeAEPE.toFixed(2)}%</td>
//             `
//         table3.appendChild(tr);
//                 })

//}
