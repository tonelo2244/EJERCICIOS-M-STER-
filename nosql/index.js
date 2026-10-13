const express = require("express");
const { connect } = require("./utils/db");
const movieRoutes = require("./routes/movie.routes");
const cinemaRoutes = require("./routes/cinema.routes");
const server = express();
const PORT = 3000;

server.use(express.json());
server.get("/", (req, res) => {
  res.send("Servidor de peliculas funcionando");
});

// Conecto las rutas de peliculas con el servidor.
server.use("/movies", movieRoutes);
server.use("/cinemas", cinemaRoutes);

// Si no coincide ninguna ruta, devuelvo un error 404.
server.use((req, res) => {
  return res.status(404).json({
    message: "Ruta no encontrada",
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
