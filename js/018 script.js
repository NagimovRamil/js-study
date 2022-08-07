/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastFilm = prompt('Один из последних просмотренных фильмов?', "");
        const ratingOfFilm = +prompt('На сколько оцените его?', "");
        if (lastFilm != null && ratingOfFilm != null && lastFilm != '' && ratingOfFilm != '' && lastFilm.length < 50) {
            console.log('Done!')
            personalMovieDB.movies[lastFilm] = ratingOfFilm;
        } else {
            console.log('Erorr!')
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов")
    } else if (10<=personalMovieDB.count <= 30) {
        console.log("Вы классический зритель")
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман")
    } else console.log("Произошла ошибка");
}

detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) console.log(personalMovieDB);
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}?`, "");
    }
}

writeYourGenres();

console.log(personalMovieDB.genres);