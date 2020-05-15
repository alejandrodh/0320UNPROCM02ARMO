let nombres = ['ale', 'gonza', 'sol', 'naty', 'javo', 'agus', 'martin', 'gonza', 'Naty'];

let lista = document.querySelector('.lista'); //Tengo el contenedor ul;

//Mostrando todo con un forEach.
nombres.forEach(function(nombre){
    lista.innerHTML += '<li>' + nombre +'</li>'
})

//Mostrando los 5 primeros con un for.
let top5 = document.querySelector('.top5');
for(let i=0; i<5; i++){
    top5.innerHTML += '<li>' + nombres[i] + '</li>'
}