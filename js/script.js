const numberOfFilms = +prompt("Skolko filmov vy posmoteli?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Odin iz poslednih posmotrennyh  filmov?", ""),
    b = +prompt("Na skolko ocenite jego?", ""),
    c = prompt("Odin iz poslednih posmotrennyh  filmov", ""),
    d = +prompt("Na skolko ocenite jego?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);