/*Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
que imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de lo posible.*/

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const titulo = document.createElement("h1");
titulo.textContent = "Mis álbumes favoritos";
document.body.appendChild(titulo);

const lista = document.createElement("ul");

for (let i = 0; i < albums.length; i++) {
  const album = document.createElement("li");
  album.textContent = albums[i];
  lista.appendChild(album);
}

document.body.appendChild(lista);