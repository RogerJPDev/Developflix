import peliculas from './peliculas.js'

function peliculasOrdenadas (peliculas) {
    const listadoDePeliculasAccion =[];
    const listadoDePeliculasThriller = [];
    const listadoDePeliculasAventura = [];
    const maxNumPeliculas = 5;
    
    for (let i = 0; i < peliculas.length; i++){
        for (let j = 0; j < peliculas[i].genre_ids.length; j++){
            if (peliculas[i].genre_ids[j] === 28 && listadoDePeliculasAccion.length < maxNumPeliculas){
            listadoDePeliculasAccion.push([peliculas[i].title, peliculas[i].poster_path]);
        break;} 
            else if (peliculas[i].genre_ids[j] === 53 && listadoDePeliculasThriller.length < maxNumPeliculas){
            listadoDePeliculasThriller.push([peliculas[i].title, peliculas[i].poster_path]);
        break; } 
            else if (peliculas[i].genre_ids[j] === 12 && listadoDePeliculasAventura.length < maxNumPeliculas){
            listadoDePeliculasAventura.push([peliculas[i].title, peliculas[i].poster_path]);
        break; }
        
    }
}
return { accion: listadoDePeliculasAccion, thriller: listadoDePeliculasThriller, aventura: listadoDePeliculasAventura };
};

console.log(peliculasOrdenadas(peliculas)); 