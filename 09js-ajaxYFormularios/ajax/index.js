/* Obteniendo datos por fetch */
let url = 'https://apis.datos.gob.ar/georef/api/provincias';

fetch(url)
    .then(function(response){
        return response.json();
    }) //Esperamos a que vuelva la información que pedimos en la url. Cuando llega la transformamos en algo que podemos trabajar.
    .then(function(data){
        //Acá adentro podemos operar con los datos
        // console.log(data.provincias);
        let provincias = data.provincias;
        let ul = document.querySelector('.lista');

        provincias.forEach(function(provincia){
            ul.innerHTML += '<li>' + provincia.nombre + '</li>'
        })  
    }) //Una vez que terminó la transformación del texto a un formato operable podemos comenzar a trabajarla.
    .catch(function(error){
        console.log(error);
        
    })


let usuario = 'https://randomuser.me/api';

fetch(usuario)
    .then(function (response) {
        return response.json();
    }) //Esperamos a que vuelva la información que pedimos en la url. Cuando llega la transformamos en algo que podemos trabajar.
    .then(function (data) {
        //Acá adentro podemos operar con los datos
        console.log(data.results[0].picture.medium);
        let picture = data.results[0].picture.medium;
        let img = document.querySelector('.perfil');
        img.src= picture;

        let userData = document.querySelector('.userData');
        userData.innerHTML += '<img src="' + picture + '" >';
        
   
    }) //Una vez que terminó la transformación del texto a un formato operable podemos comenzar a trabajarla.
    .catch(function (error) {
        console.log(error);

    })
