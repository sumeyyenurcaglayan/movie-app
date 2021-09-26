const movieURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=811530d9d861ad9f9fe0ffcd276b18c1&sort_by=popularity.desc";

const image_baseURL = "https://image.tmdb.org/t/p/w300";

let movies = [];
let x = [];

fetch(movieURL)
  .then((response) => {
    return response.json();
  })
  .then((completedata) => {
    completedata.results.map((values) => {
      movies.push(`<div class="col">
      <div class="card" id="card">
      <img class="movie-image" src="${image_baseURL + values.poster_path}" />
      <div class="info" id="info">
          <div class="title-year" id="title-year">
              <p class="title" id="title">${values.title}</hp>
              <h3 class="year" id="year">${values.release_date.slice(0, 4)}</h3>
          </div>
          <h2 class="rating" id="rating" >${values.vote_average}</h2>
      </div>
  </div>
      </div>`);
    });

    document.getElementById("movie-row").innerHTML = movies.join("");
  })
  .catch((err) => {
    console.log(err);
  });
