const express = require("express");
const Movie = require("../models/Movie");
const mongoose = require("mongoose");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({
      message: "Error al consultar las peliculas",
    });
  }
});

router.get("/id/:id", async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.isObjectIdOrHexString(id)) {
      return res.status(400).json({
        message: "El identificador no es valido",
      });
    }

    const movie = await Movie.findById(id);

    if (!movie) {
      return res.status(404).json({
        message: "No se ha encontrado la pelicula",
      });
    }

    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json({
      message: "Error al buscar la pelicula",
    });
  }
});

router.get("/title/:title", async (req, res) => {
  try {
    const title = req.params.title;
    const movies = await Movie.find({ title: title });

    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({
      message: "Error al buscar por titulo",
    });
  }
});

router.get("/genre/:genre", async (req, res) => {
  try {
    const genre = req.params.genre;
    const movies = await Movie.find({ genre: genre });

    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({
      message: "Error al buscar por genero",
    });
  }
});

router.get("/year/:year", async (req, res) => {
  try {
    const year = Number(req.params.year);

    if (!Number.isInteger(year)) {
      return res.status(400).json({
        message: "El año debe ser un numero entero",
      });
    }

    const movies = await Movie.find({ year: { $gte: year } });

    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({
      message: "Error al buscar por año",
    });
  }
});

router.post("/create", async (req, res) => {
  try {
    const newMovie = new Movie({
      title: req.body.title,
      director: req.body.director,
      year: req.body.year,
      genre: req.body.genre,
    });

    const createdMovie = await newMovie.save();

    return res.status(201).json(createdMovie);
  } catch (error) {
    const status = error.name === "ValidationError" ? 400 : 500;

    return res.status(status).json({
      message: status === 400 ? error.message : "Error al crear la pelicula",
    });
  }
});

router.put("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isObjectIdOrHexString(id)) {
      return res.status(400).json({
        message: "El identificador no es valido",
      });
    }

    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      {
        title: req.body.title,
        director: req.body.director,
        year: req.body.year,
        genre: req.body.genre,
      },
      { new: true, runValidators: true },
    );

    if (!updatedMovie) {
      return res.status(404).json({
        message: "No se ha encontrado la pelicula",
      });
    }

    return res.status(200).json(updatedMovie);
  } catch (error) {
    const status = error.name === "ValidationError" ? 400 : 500;

    return res.status(status).json({
      message:
        status === 400 ? error.message : "Error al modificar la pelicula",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isObjectIdOrHexString(id)) {
      return res.status(400).json({
        message: "El identificador no es valido",
      });
    }

    const deletedMovie = await Movie.findByIdAndDelete(id);

    if (!deletedMovie) {
      return res.status(404).json({
        message: "No se ha encontrado la pelicula",
      });
    }

    return res.status(200).json({
      message: "Pelicula eliminada",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al eliminar la pelicula",
    });
  }
});

module.exports = router;
