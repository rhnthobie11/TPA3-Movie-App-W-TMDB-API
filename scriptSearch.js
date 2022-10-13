let keySearch = document.getElementById("search")

let getDataMovie = async () => {
    let search = new URL (document.location).searchParams
    let find = search.get("search")
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=e06833fd89f3e7071612405565485139&query=${find}&page=1`)
    
    let searching = await response.json()
    
    searching.results.forEach(item => {
        keySearch.innerHTML += 
        `
        <div class="col-lg-4 col-sm-6 mb-5">
            <div class="w-100 d-flex justify-content-center">
                <div class="position">
                    <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="card-img-top" alt="movie-img" >
                    <div class="card-body">
                        <div class="card-body d-flex justify-content-between flex-column shadow p-2">
                            <div class="row">
                                <h5 class="card-title col-9 fs-5 text-wrap overflow-hidden">${item.title}</h5>
                                <p class="col-3 text-end">${item.vote_average}</p>
                            </div>
                            <p class="card-text">${item.release_date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    })
}

getDataMovie()