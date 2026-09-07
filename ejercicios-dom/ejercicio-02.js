/*Dato el siguiente HTML:

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h2 class="fn-insert-here"></h2>
    <p class="fn-remove-me">Eliminame!</p>
    <p>No me elimines!</p>
    <p>No me elimines!</p>
    <p class="fn-remove-me">Eliminame!</p>
    <p>No me elimines!</p>
    <p class="fn-remove-me">Eliminame!</p>
    <p class="fn-remove-me">Eliminame!</p>
    <p>No me elimines!</p>
    <div></div>
    <div></div>
    <div class="fn-insert-here"></div>
    <div class="fn-insert-here"></div>
  </body>
</html>*/

//2.1 Inserta dinamicamente en un html un div vacio con javascript.
const coche = document.createElement("div"); document.body.appendChild(coche);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divConParrafo = document.createElement("div");
const parrafo = document.createElement("p");

divConParrafo.appendChild(parrafo);
document.body.appendChild(divConParrafo);

/*2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop en jascript
	loop con javascript.*/
const divConSeisParrafos = document.createElement("div");

for (let i = 0; i < 6; i++) {
  const nuevoParrafo = document.createElement("p");
  divConSeisParrafos.appendChild(nuevoParrafo);
}

document.body.appendChild(divConSeisParrafos);

/*2.4 Inserta dinamicamente con javascript en un html una p con el
	texto 'Soy dinámico!'.*/

  const parrafoDinamico = document.createElement("p");

parrafoDinamico.textContent = "Soy dinámico!";

document.body.appendChild(parrafoDinamico);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const titulo = document.querySelector("h2.fn-insert-here");

titulo.textContent = "Wubba Lubba dub dub";

/*2.6 Basandote en el siguiente array crea una lista ul > li con
los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];*/
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const lista = document.createElement("ul");

for (let i = 0; i < apps.length; i++) {
  const elementoLista = document.createElement("li");

  elementoLista.textContent = apps[i];

  lista.appendChild(elementoLista);
}

document.body.appendChild(lista);


//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elementosEliminar = document.querySelectorAll(".fn-remove-me");

for (let i = 0; i < elementosEliminar.length; i++) {
  elementosEliminar[i].remove();
}

/*2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
	Recuerda que no solo puedes insertar elementos con .appendChild.*/
const parrafoEnMedio = document.createElement("p");

parrafoEnMedio.textContent = "Voy en medio!";

const divs = document.querySelectorAll("div");

divs[1].before(parrafoEnMedio);


/*2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
	.fn-insert-here*/
const divsInsertar = document.querySelectorAll("div.fn-insert-here");

for (let i = 0; i < divsInsertar.length; i++) {
  const parrafoDentro = document.createElement("p");

  parrafoDentro.textContent = "Voy dentro!";

  divsInsertar[i].appendChild(parrafoDentro);
}
