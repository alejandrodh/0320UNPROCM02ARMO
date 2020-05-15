console.log('Hola estamos haciendo JS');

/*
 Variables
========================================== */

//Declaramos variables y actualizamos (o no) su contenido.
var sede = 'Digital House - Monroe';
let nombre = 'Alejandro';
nombre = 'Gonza';
// console.log(nombre);

const curso = 'UdeSA Programación I - 2020';
//curso = "Marketing digital DH";
// console.log(curso);

//Que contenido le podemos colocar a las variables.
let string = 'Esto es una cadena de texto'; //Esto es un texto.
let numero = 89;
let boolean = true; //false

//let queHayAca = unNombreCualquiera; //Da error por que unNombreCualquiera es una variable que no está creada; 
let queHayAca = nombre; 
// console.log(queHayAca);

let noEsUnNumero = 'hola'/9; //NaN Not a Number;
let nulo = null;
let indefinido;

// console.log(noEsUnNumero);
// console.log(nulo);
// console.log(indefinido);


/*
 Funciones
========================================== */
//declaración de una función
function saludar(param1, param2){
    //Código que queremos ejecutar.
    //¿Qué pasa si creo una variable acá? ¿Puedo leerl fuera de la función? El tema scopes.
    return 'Hola a todos mi nombre es: ' + param1 + ". Estoy en el curso: " + param2;
}

//Ejecutar la función:
//saludar();
// console.log( saludar(nombre, 'UdeSA') );
// console.log( saludar('Franco', 'FullStack') );
// console.log( saludar('María', 'Markleting Digital') );
// console.log( saludar('Ale', 'Diseño Ux') );
// console.log(saludar());

//Funciones
let saludo = function(nombre){
    return 'Hola a todos mi nombre es: ' + nombre; 
}
// console.log(saludo('Ale'));


// Arrays
// ***************************************

let array = ['hola', 9, true, ['rojo', 'verde', 'azul'], nombre ];
//Las posciones de los arrays arrancan en 0;
// console.log( array[3][2] );

// let curso = [
//     ['Ale', 34],
//     ['Gonza', 33],
//     [22, 'Mica'],
//     [90, 'gato']
// ]


let profesores = {
    nombre : 'Gonza',
    edad : 44,
    curso: 'UdeSA Programacion',
    saludar : function(){
        return 'Hola mi nombre es: ' + this.nombre;
    },
};

// console.log(profesores.nombre);
// console.log(profesores.curso);
// console.log(profesores.saludar());



let alumno1 = {
    nombre: 'Mica',
    edad: 22,
    curso: 'UdeSA Programacion',
    saludar: function () {
        return 'Hola mi nombre es: ' + this.nombre; 
    }
}




