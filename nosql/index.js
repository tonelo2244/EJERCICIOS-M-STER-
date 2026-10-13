const express = require("express");
const { connect } = require("./utils/db");
const movieRoutes = require("./routes/movie.routes");
const cinemaRoutes = require("./routes/cinema.routes");

const server = express();
const PORT = 3000;

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.get("/", (req, res) => {
  res.send("Servidor de peliculas funcionando");
});

server.use("/movies", movieRoutes);
server.use("/cinemas", cinemaRoutes);

// Ruta no encontrada.
server.use((req, res, next) => {
  const error = new Error("Ruta no encontrada");
  error.status = 404;
  return next(error);
});

// Manejador de errores.
server.use((error, req, res, next) => {
  if (error.name === "ValidationError" || error.name === "CastError") {
    error.status = 400;
  }

  return res.status(error.status || 500).json({
    message: error.message || "Error inesperado",
  });
});

connect()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Servidor en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error al conectar con MongoDB:", error.message);
  });
