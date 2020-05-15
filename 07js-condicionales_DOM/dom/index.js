//DOM y selectores

let title = document.querySelector('h1'); //Capturo el elemento.
// title.innerHTML = "Hola a todos"; //Cambio el contenido.
title.innerHTML += "<br>Hola a todos"; //Cambio el contenido.

title.style.color = "red";


let body = document.querySelector('body');
body.innerHTML += '<h2 class="alfinal">Agregado por js</h2>';
body.style.backgroundColor = "gainsboro";

