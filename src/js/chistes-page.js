import { obtenerChiste } from "./http-provider";



const body = document.body;
let btnOtro, olList;

const crearChistesHTMl = () =>{

    const html = 
    `
    <h1>Chistes</h1>
    <hr>
    <button class="btn btn-primary"> Nuevo chiste</button>
    <ol class="mt-2 list-group"> </ol>
    `

    const divChistes = document.createElement('div')
    divChistes.innerHTML = html;
    body.append(divChistes);
}


const eventos = () =>{
    olList = document.querySelector('ol')
    btnOtro = document.querySelector('button')

    btnOtro.addEventListener('click', async()=>{
        btnOtro.disabled = true;
        const nuevoChiste = await obtenerChiste();
        dibujarChiste(nuevoChiste);
        btnOtro.disabled = false;
    });
}

const dibujarChiste = (chiste)=>{
    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${chiste.id}</b>: ${chiste.value}`
    olItem.classList.add('list-group-item')
    olList.append(olItem)
}

export const init = ()=>{
    crearChistesHTMl();
    eventos();
}