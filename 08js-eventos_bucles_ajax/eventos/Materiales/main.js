window.addEventListener('load', function() {

   let titulo = document.querySelector('#titulo');
   let saludo = document.querySelector('#saludo');
   let span = document.querySelector('span');
   let bienvenida = document.querySelector('.bienvenida');
   let personajes = document.querySelector('.personajes');

   /* Evento para el título */
   titulo.onmouseover = function() {
      let nombre = prompt('¿Cuál es tu nombre?');
      saludo.style.textTransform = 'uppercase';

      if(nombre == ''){
         //Saludo genérico
         saludo.innerHTML = "Bienvenido @";
      } else {
         //Saludo personalizado
         saludo.innerHTML = "Bienvenido @" + nombre;
      }

      titulo.style.display = 'none';
      span.style.display = 'inline';
   }



   /* Evento para el span */
   span.onclick = function() {
      bienvenida.style.display = "none";
      personajes.style.display = 'flex';

   }


   /* Capturar pesonajes */
   let bart = document.querySelector('#bart');
   bart.onclick = function(){
      alert('Click en bart');
   }


   /* Asignarle a cada personaje su evento correspondiente, así como también su funcionalidad */


   
   var boton = ___________________;

   /* Asignarle evento a la variable boton */


}) 