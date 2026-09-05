/*Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.

Utiliza bucles para lograrlo e imprime el objeto final por consola.*/

const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];

const moviesByDecade = {
  1970: [],
  1980: [],
  1990: [],
  2000: [],
  2010: []
};

for (let i = 0; i < starWarsMovies.length; i++) {

  if (starWarsMovies[i].releaseYear < 1980) {
    moviesByDecade[1970].push(starWarsMovies[i]);
  }

  if (starWarsMovies[i].releaseYear >= 1980 && starWarsMovies[i].releaseYear < 1990) {
    moviesByDecade[1980].push(starWarsMovies[i]);
  }

  if (starWarsMovies[i].releaseYear >= 1990 && starWarsMovies[i].releaseYear < 2000) {
    moviesByDecade[1990].push(starWarsMovies[i]);
  }

  if (starWarsMovies[i].releaseYear >= 2000 && starWarsMovies[i].releaseYear < 2010) {
    moviesByDecade[2000].push(starWarsMovies[i]);
  }

  if (starWarsMovies[i].releaseYear >= 2010 && starWarsMovies[i].releaseYear < 2020) {
    moviesByDecade[2010].push(starWarsMovies[i]);
  }
}

console.log(moviesByDecade);