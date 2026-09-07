/*Dado el siguiente HTML:

<!DOCTYPE html>
<html lang="en">  
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button class="showme">Pillame!</button>
	<h1 id="pillado">Aqui estoy 8)</h1>
	<p>Soy el power ranger Amarillo</p>
    <p>Soy el power ranger Rojo</p>
    <p>Soy el power ranger Azul</p>
    <p>Soy el power ranger Negro</p>
	<h4 class="pokemon">Bulbasaur</h4>
    <h4 class="pokemon">Charmander</h4>
    <h4 class="pokemon">Pikachu</h4>
    <h4 class="pokemon">Squirtle</h4>
	<span data-function="testMe">Batman</span>
    <span data-function="testMe">Robin</span>
    <span data-function="testMe">Rick</span>
    <span data-function="testMe">Morty</span>
</body>
</html>
1.1 Usa querySelector para mostrar por consola el botón con la clase .showme*/
console.log(document.querySelector(".showme"));

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
console.log(document.querySelector("#pillado"));

//1.3 Usa querySelector para mostrar por consola todos los p
console.log(document.querySelectorAll("p"));

//1.4 Usa querySelector para mostrar por consola todos los elementos con
	//la clase.pokemon
console.log(document.querySelectorAll(".pokemon"));    

//1.5 Usa querySelector para mostrar por consola todos los elementos con
//el atributo data-function="testMe".
console.log(document.querySelectorAll('[data-function="testMe"]'));

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
//data-function="testMe".
console.log(document.querySelectorAll('[data-function="testMe"]')[2]);