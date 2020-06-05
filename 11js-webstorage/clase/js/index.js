//Caso 1 Guardar un dato simple.
let nombre = "Sol";
localStorage.setItem('usuario', nombre);
// console.log(localStorage);


//Caso 2 Guardar datos complejos caso array
let listaDeProfesores = ["Ale", "Gonza", "Daro", "Mati"];
//Transformamos el array en cadena de texto JSON.
listaDeProfesores = JSON.stringify(listaDeProfesores);
//Guardamos el json dentro de localStorage
localStorage.setItem('profesores', listaDeProfesores)
console.log(localStorage);

//Recuperar datos de localStorage
let recuperoLista = localStorage.getItem("profesores");
//Transformamos la cadena de texto nuevamente en array
recuperoLista = JSON.parse(recuperoLista);

console.log(recuperoLista);

let lista = document.querySelector('.lista');

//Mostrar datos opción 1.
recuperoLista.forEach(function(profesor){
    lista.innerHTML += '<li>'+ profesor +'</li>'
});


//Mostrar datos opción 2
// let li = "";
// recuperoLista.forEach(profesor => {
//     li += '<li>'
//     li += profesor
//     li += '</li>'
// });
// console.log(li);
// lista.innerHTML += li;