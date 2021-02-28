"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    rememberMyFilms:function () {
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
    },
    
    detectPersonalLevel: function () {
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
    
    },
    
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
     writeYouGeneres: function() {
        for (let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt(`Vash ljubimyj zhanr pod nomeron ${i+1}?`, "");
            if ( personalMovieDB.genres[i].trim().toLowerCase == ""|| personalMovieDB.genres[i] ==null){
                console.log("Vy vveli ne korrektnyje dannyje");
                i--;
            }
        } 
        personalMovieDB.genres.forEach ( (item, i) => {
            console.log(`Ljubimyj zhanr # ${i+1} - eto ${item}`);

        });
    
    },
    start: function() {
        personalMovieDB.count = prompt("Skolko filmov vy posmoteli?", "");
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Skolko filmov vy posmoteli?", "");
        }
    
    },

    toggleVisibleMyDB: function(showMyDB){
        if (showMyDB == false){
            personalMovieDB.privat = true;
        }
        else {personalMovieDB.privat = false;
        }
    }
};





//personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.writeYouGeneres();
// personalMovieDB.detectPersonalLevel();



