/*Dado el siguiente HTML:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="exercise-3.js" defer></script>
    <title>Document</title>
</head>
<body>
    <p class="fn-remove-me">Bye bye</p>
		<div data-function="printHere"></div>
</body>
</html>
1.1 Basandote en el array siguiente, crea una lista ul > li
dinámicamente en el html que imprima cada uno de los paises.*/
const Listacountries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const listaPaises = document.createElement("ul");

for (let i = 0; i < countries.length; i++) {
  const pais = document.createElement("li");
  pais.textContent = countries[i];
  listaPaises.appendChild(pais);
}

document.body.appendChild(listaPaises);

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const elementoEliminar = document.querySelector(".fn-remove-me");

elementoEliminar.remove();


/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
en el div de html con el atributo data-function="printHere".*/
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divCoches = document.querySelector('[data-function="printHere"]');

const listaCoches = document.createElement("ul");

for (let i = 0; i < cars.length; i++) {
  const coche = document.createElement("li");
  coche.textContent = cars[i];
  listaCoches.appendChild(coche);
}

divCoches.appendChild(listaCoches);


/*1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
h4 para el titulo y otro elemento img para la imagen.*/
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
for (let i = 0; i < paises.length; i++) {
  const caja = document.createElement("div");
  const titulo = document.createElement("h4");
  const imagen = document.createElement("img");

  titulo.textContent = paises[i].title;
  imagen.src = paises[i].imgUrl;

  caja.appendChild(titulo);
  caja.appendChild(imagen);

  document.body.appendChild(caja);
}


/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
elemento de la serie de divs.*/
const botonEliminarUltimo = document.createElement("button");

botonEliminarUltimo.textContent = "Eliminar último";

document.body.appendChild(botonEliminarUltimo);

botonEliminarUltimo.addEventListener("click", function () {
  const divs = document.querySelectorAll("div");
  divs[divs.length - 1].remove();
});

/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
divs que elimine ese mismo elemento del html.*/
for (let i = 0; i < paises.length; i++) {
  const caja = document.createElement("div");
  const titulo = document.createElement("h4");
  const imagen = document.createElement("img");
  const boton = document.createElement("button");

  titulo.textContent = paises[i].title;
  imagen.src = paises[i].imgUrl;
  boton.textContent = "Eliminar";

  caja.appendChild(titulo);
  caja.appendChild(imagen);
  caja.appendChild(boton);

  document.body.appendChild(caja);

  boton.addEventListener("click", function () {
    caja.remove();
  });
}