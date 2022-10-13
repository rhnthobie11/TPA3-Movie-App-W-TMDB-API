let keySearch = document.getElementById("search")

let getDataMovie = async () => {
    let search = new URL (document.location).searchParams
    let find = search.get("search")
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=e06833fd89f3e7071612405565485139&query=${find}&page=1`)
    
    let searching = await response.json()
    
    searching.results.forEach(item => {
        keySearch.innerHTML += 
        `
        <div class="row">
          <div class="col">
          <div id="position"
            <div class="card" style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="card-img-top" alt="movie-img">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.vote_average}</p>
                    <p>${item.release_date}</p>
                </div>
            </div>
          </div>`
    })
}

getDataMovie()