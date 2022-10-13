// TMDB
const API_KEY = 'api_key=e06833fd89f3e7071612405565485139' ;
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=e06833fd89f3e7071612405565485139&sort_by=popularity.desc&page=1';

// https://api.themoviedb.org/3/discover/movie?api_key=e06833fd89f3e7071612405565485139&sort_by=popularity.desc&page=1

let moviesContainer = document.getElementById("movie")

let getDataMovie = async () => {
    let response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e06833fd89f3e7071612405565485139&sort_by=popularity.desc&page=1")
    let movies = await response.json()
    
    movies.results.forEach(item => {
        console.log(item)
        moviesContainer.innerHTML += 
        `
        <div class="row">
          <div class="col">
            <div class="card" style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="card-img-top" alt="movie-img">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.vote_average}</p>
                    <p>${item.release_date}</p>
                </div>
            </div>
            </div>
          </div>`
    })
}

getDataMovie()


// movie.forEach(item => {
//     listmovie.innerHTML += `<h3>${item}</h3>`
// })

// movie.result.forEach((item) => {
//     console.log(item);
//     listMovie.innerHTML += `<div class="card" style="width: 20rem;">
//     <img src="./img.jpeg" class="card-img-top" alt="movie-img">
//     <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">rating</p>
//     </div>
//         <ul class="list-group list-group-flush">
//         <li class="list-group-item">An item</li>
//         <li class="list-group-item">A second item</li>
//         </ul>
// </div>`
// })
