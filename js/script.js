import peliculas from './peliculas.js'

/* DOM REFERENCES: hacen referencia a las cajas en la pagina
getElementById busca en el HTML los elementos con ese id
 i JS les da una referencia. Cualquier cosa que hagamos con estas variables
se propagara al elemento en la pagina.
Cada una es un <div class="genero"> vacio dentro de su seccion*/

const peliculasAccionCaja = document.getElementById('genero-28');
const peliculasThrillerCaja = document.getElementById('genero-53');
const peliculasAventuraCaja = document.getElementById('genero-12');
const ordenDePeliculas = peliculasOrdenadas(peliculas);
/*const imagenDeLaPelicula = document.createElement('img');
const tituloDeLaPelicula = document.createElement('h3');*/

/*funcion que recibe toda la array de peliculas y las clasifica en 3 
subarrays, definidas por genero id. tienen un max de 5 peliculas por array*/

function peliculasOrdenadas (peliculas) {
    const listadoDePeliculasAccion =[];
    const listadoDePeliculasThriller = [];
    const listadoDePeliculasAventura = [];
    const maxNumPeliculas = 5;
    
    /*primer loop, recorre todas las peliculas*/

    for (let i = 0; i < peliculas.length; i++){
        for (let j = 0; j < peliculas[i].genre_ids.length; j++){
            /*segundo loop, para cada pelicula, recorre el array de genero y asigna a nueva array segun el primer id que encuentra siempre que la nueva array no este llena.
            Si la array esta llena, asigna la pelicula a la siguiente array de genero*/
            if (peliculas[i].genre_ids[j] === 28 && listadoDePeliculasAccion.length < maxNumPeliculas){
            listadoDePeliculasAccion.push([peliculas[i].title, `https://image.tmdb.org/t/p/w500${peliculas[i].poster_path}`]);
            /*el resultado del if es el titulo de la pelicula y la concatenación de poster path para generar una url*/
        break;} 
            else if (peliculas[i].genre_ids[j] === 53 && listadoDePeliculasThriller.length < maxNumPeliculas){
            listadoDePeliculasThriller.push([peliculas[i].title, `https://image.tmdb.org/t/p/w500${peliculas[i].poster_path}`]);
        break; } 
            else if (peliculas[i].genre_ids[j] === 12 && listadoDePeliculasAventura.length < maxNumPeliculas){
            listadoDePeliculasAventura.push([peliculas[i].title, `https://image.tmdb.org/t/p/w500${peliculas[i].poster_path}`]);
        break; }
        
    }
}/*se retornan las 3 arrays con las peliculas clasificadas*/
return { accion: listadoDePeliculasAccion, thriller: listadoDePeliculasThriller, aventura: listadoDePeliculasAventura };
};

/*Tests durante el desarrollo, se mantienen comentados para futura referencia
console.log(peliculasOrdenadas(peliculas));
console.log(ordenDePeliculas);
console.log(ordenDePeliculas.accion[0][0]);
console.log(ordenDePeliculas.accion[0][1]);

peliculasAccionCaja.textContent = ordenDePeliculas.accion[0][0];
imagenDeLaPelicula.src = ordenDePeliculas.accion[0][1];
peliculasAccionCaja.appendChild(imagenDeLaPelicula);
tituloDeLaPelicula.textContent = ordenDePeliculas.accion[0][0];
peliculasAccionCaja.appendChild(tituloDeLaPelicula);;
tituloDeLaPelicula.textContent = ordenDePeliculas.accion[0][0];*/

/*se recibe una lista entera de peliculas y una "caja" donde se va a mostrar, su uso es modificación del DOM.
Una sola función para cada genero, se llama una vez para cada genero*/

function mostrarPeliculas(listaPeliculas, caja) {
    for (let n = 0; n < listaPeliculas.length; n++) {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('pelicula');

        const imagenDeLaPelicula = document.createElement('img');
        imagenDeLaPelicula.src = listaPeliculas[n][1];
        imagenDeLaPelicula.alt = listaPeliculas[n][0];
        tarjeta.appendChild(imagenDeLaPelicula);

        const tituloDeLaPelicula = document.createElement('h3');
        tituloDeLaPelicula.textContent = listaPeliculas[n][0];
        tarjeta.appendChild(tituloDeLaPelicula);

        caja.appendChild(tarjeta);
    }
}

mostrarPeliculas(ordenDePeliculas.accion, peliculasAccionCaja);
mostrarPeliculas(ordenDePeliculas.thriller, peliculasThrillerCaja);
mostrarPeliculas(ordenDePeliculas.aventura, peliculasAventuraCaja);