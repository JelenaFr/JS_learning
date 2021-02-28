/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll(".promo__adv img"),
    poster = document.querySelector(".promo__bg"),
    genre = poster.querySelector(".promo__genre"),
    movieList = document.querySelector(".promo__interactive-list");

movieList.innerHTML = "";
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `<li class="promo__interactive-item">${i+1}. ${film}
    <div class="delete"></div>
</li>`;

});

adv.forEach(item => {
    item.remove();
});
poster.style.cssText = `background: url(./img/bg.jpg) center center/cover no-repeat; padding: 107px 0 0 61px; height: 360px; background-position: top `;
genre.textContent = "Drama";




// for(let i; i < arrFilms.length; i++){
//     //list.textContent = ` ${arrFilms[i]}`;
//     list.innerHTML(<li class = 'promo__interactive-item'> ` ${arrFilms[i]}` </li>  );
// }