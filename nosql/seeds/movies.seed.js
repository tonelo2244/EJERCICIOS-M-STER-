const mongoose = require("mongoose");
const Movie = require("../models/Movie");
const { connect } = require("../utils/db");

const movies = [
  {
    title: "The Matrix",
    director: "Hermanas Wachowski",
    year: 1999,
    genre: "Acción",
  },
  {
    title: "The Matrix Reloaded",
    director: "Hermanas Wachowski",
    year: 2003,
    genre: "Acción",
  },
  {
    title: "Buscando a Nemo",
    director: "Andrew Stanton",
    year: 2003,
    genre: "Animación",
  },
  {
    title: "Buscando a Dory",
    director: "Andrew Stanton",
    year: 2016,
    genre: "Animación",
  },
  {
    title: "Interestelar",
    director: "Christopher Nolan",
    year: 2014,
    genre: "Ciencia ficción",
  },
  {
    title: "50 primeras citas",
    director: "Peter Segal",
    year: 2004,
    genre: "Comedia romántica",
  },
];

const seedMovies = async () => {
  try {
    await connect();

    if (await Movie.exists({})) {
      console.log("Ya hay peliculas. No se ha cambiado nada.");
      return;
    }

    await Movie.insertMany(movies);
    console.log("Se han guardado las 6 peliculas");
  } catch (error) {
    console.error("Error al cargar las peliculas:", error.message);
  } finally {
    await mongoose.disconnect();
  }
};

seedMovies();
