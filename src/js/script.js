const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

console.log(numberOfFilms)


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
  b = +prompt('На сколько его оцените?', ''),
  c = prompt('Один из последних просмотренных фильмов?', ''),
  d = +prompt('На сколько его оцените?', '');

console.log(a);
console.log(b);
console.log(c);
console.log(d);


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)
