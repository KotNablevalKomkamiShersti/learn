let NumberOfFilms;

function start() {
     NumberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

     while (NumberOfFilms = '' || NumberOfFilms == null || isNaN(NumberOfFilms)) {
        NumberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


     }

}
start();
const PersonalMovieDB = {
    count : NumberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};


function rememberMyFilms()
{

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');  
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50){
    PersonalMovieDB.movies[a] = b;
    console.log('done');
    } else {
        console.log('error');
        i--;
    } 
}
}
rememberMyFilms();
function detectPersonalLevel()
{
if (PersonalMovieDB.count < 10) {
    console.log("просмотрено мало фильмов");
} else if (PersonalMovieDB.count >= 10 && PersonalMovieDB.count < 30) {
    console.log("Вы классический зритель")
}
    else if(PersonalMovieDB.count >= 30) {
        console.log("Вы потрясающий")
    }
        else {console.log("error")
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
if (!hidden) {
    console.log(PersonalMovieDB);
}
showMyDB(PersonalMovieDB.privat);
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        PersonalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();