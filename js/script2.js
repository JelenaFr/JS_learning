"use strict";

let numberOfFilms;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



// start();
// rememberMyFilms();
// detectPersonalLevel();
 showMyDB(personalMovieDB.privat);
 writeYouGeneres();
// detectPersonalLevel();

function start() {
    numberOfFilms = +prompt("Skolko filmov vy posmoteli?", "");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Skolko filmov vy posmoteli?", "");
    }

}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Odin iz poslednih posmotrennyh  filmov?", ""),
            b = prompt("Na skolko ocenite jego?", "");
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("Done");
        } else {
            console.log("Repeat please");
            i--;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Slishkom malo filmov");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Klassicheskij zritel");
    } else if (personalMovieDB.count >= 30) {
        console.log("Kinoman");
    } else {
        console.log("Oshibka");
    }
    console.log(personalMovieDB);

}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}


function writeYouGeneres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Vash ljubimyj zhanr pod nomeron ${i+1}?`, "");
    }




}