const express = require("express");
const Cinema = require("../models/Cinema");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cinemas = await Cinema.find().populate("movies");
    return res.status(200).json(cinemas);
  } catch (error) {
    return res.status(500).json({
      message: "Error al consultar los cines",
    });
  }
});

router.post("/create", async (req, res) => {
  try {
    const newCinema = new Cinema({
      name: req.body.name,
      city: req.body.city,
      movies: req.body.movies,
    });

    const createdCinema = await newCinema.save();
    return res.status(201).json(createdCinema);
  } catch (error) {
    const status = error.name === "ValidationError" ? 400 : 500;

    return res.status(status).json({
      message: status === 400 ? error.message : "Error al crear el cine",
    });
  }
});

module.exports = router;
