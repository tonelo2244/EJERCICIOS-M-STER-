const express = require("express");
const Movie = require("../models/Movie");
const mongoose = require("mongoose");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (error) {
    return next(error);
  }
});

router.get("/id/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.isObjectIdOrHexString(id)) {
      const error = new Error("El identificador no es valido");
      error.status = 400;
      return next(error);
    }

    const movie = await Movie.findById(id);

    if (!movie) {
      const error = new Error("No se ha encontrado la pelicula");
      error.status = 404;
      return next(error);
    }

    return res.status(200).json(movie);
  } catch (error) {
    return next(error);
  }
});

router.get("/title/:title", async (req, res, next) => {
  try {
    const { title } = req.params;
    const movies = await Movie.find({ title });

    return res.status(200).json(movies);
  } catch (error) {
    return next(error);
  }
});

router.get("/genre/:genre", async (req, res, next) => {
  try {
    const { genre } = req.params;
    const movies = await Movie.find({ genre });

    return res.status(200).json(movies);
  } catch (error) {
    return next(error);
  }
});

router.get("/year/:year", async (req, res, next) => {
  try {
    const year = Number(req.params.year);

    if (!Number.isInteger(year)) {
      const error = new Error("El año debe ser un numero entero");
      error.status = 400;
      return next(error);
    }

    const movies = await Movie.find({ year: { $gte: year } });

    return res.status(200).json(movies);
  } catch (error) {
    return next(error);
  }
});

router.post("/create", async (req, res, next) => {
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
    return next(error);
  }
});

router.put("/edit/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.isObjectIdOrHexString(id)) {
      const error = new Error("El identificador no es valido");
      error.status = 400;
      return next(error);
    }

    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      {
        title: req.body.title,
        director: req.body.director,
        year: req.body.year,
        genre: req.body.genre,
      },
      { new: true, runValidators: true }
    );

    if (!updatedMovie) {
      const error = new Error("No se ha encontrado la pelicula");
      error.status = 404;
      return next(error);
    }

    return res.status(200).json(updatedMovie);
  } catch (error) {
    return next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.isObjectIdOrHexString(id)) {
      const error = new Error("El identificador no es valido");
      error.status = 400;
      return next(error);
    }

    const deletedMovie = await Movie.findByIdAndDelete(id);

    if (!deletedMovie) {
      const error = new Error("No se ha encontrado la pelicula");
      error.status = 404;
      return next(error);
    }

    return res.status(200).json({
      message: "Pelicula eliminada",
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;