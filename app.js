let api = 'https://www.omdbapi.com/?apikey=c80fb18e&t=';

let title=document.getElementById('title');
let Director=document.getElementById('Director');
let Actor=document.getElementById('Actor');
let Genre=document.getElementById('Genre');
let Ratings=document.getElementById('Ratings');
let BoxOfficeCollection=document.getElementById('Box Office Collection');
let Writer=document.getElementById('Writer');
let Collection=document.getElementById('Collection');
let Awards=document.getElementById('Awards');
let img=document.getElementById('img');
let imdb=document.getElementById('imdb');


let container=document.getElementById('container');
container.style.display='none';


function moviesearch(){
    let movie = document.getElementById('movie');//  to fetch the data
    let query = api+movie.value;
    fetch(query).then((data)=>{ // convert value into json
        return data.json()
    }).then((data)=>{
        container.style.display ='block';
           title.innerText = data.Title;
           Director.innerText = data.Director;
           Actor.innerText = data.Actor;
           Genre.innerText = data.Genre;
           Awards.innerText = data.Awards;
           BoxOfficeCollection.innerText = data.BoxOfficeCollection;
           Writer.innerText = data.Writer;
           Collection.innerText = data.Collection;
           img.src = data.Poster;
           imdb.innerHTML = data.imdbRating;
    })
}  