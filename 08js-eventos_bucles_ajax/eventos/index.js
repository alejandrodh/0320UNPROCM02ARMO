console.log('Llegamos bien');

//Capturar elemento
let misterio = document.querySelector('.misterio');

//Evento definido usando onAlgo y una función.
misterio.onmouseover = function(){
   let magia = document.querySelector('.magia');
   magia.style.display = 'none';  
}



//Evento definido usando .addEventListener
misterio.addEventListener('click', function(){
    console.log('Usando un event listener.')
    misterio.style.color='red';
});

let link = document.querySelector('.link');

link.addEventListener('click', function(evento){
    console.log(this);
    console.log('Frenamos el click natural')
    //Evitar que el link se comporte de manera natural. De manera default.
    evento.preventDefault();
    misterio.style.color = 'red';
});

let alumno = {
    nombre : 'ale',
    edad : 30,
    saludar : function(){
        return 'Hola' + this.nombre
    }
}