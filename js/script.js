"use strict";
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Skolko filmov vy posmoteli?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Skolko filmov vy posmoteli?", "");
    }

}

start();
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

if (4 == 9) {
    console.log("OK");
} else {
    console.log("Not equals");
}

const num = 49;

(num === 50) ? console.log('Ok'): console.log('Error');


const value = 51;
switch (value) {
    case 49:
        console.log("Wrong!");
        break;
    case 100:
        console.log("Too much!");
        break;
    case 50:
        console.log("True!");
        break;
    default:
        console.log("Next time");
}

let num2 = 50;
while (num2 < 55) {
    console.log(num2);
    num2++;
}

let num3 = 50;
do {
    console.log(num3);
    num3++;
}
while (num3 < 55);

for (let i = 1; i < 8; i++) {
    if (i === 6) {
        //break;
        continue;
    }
    console.log(i);
}