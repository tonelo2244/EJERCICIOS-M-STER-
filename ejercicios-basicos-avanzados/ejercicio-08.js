//Ejercicio 8
/*Buscar la palabra más larga: Completa la función que tomando un array de strings 
como argumento devuelva el más largo, en caso de que dos strings tenga la misma 
longitud deberá devolver el primero.*/

//Puedes usar este array para probar tu función:

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(stringList) {

  let longestWord = stringList[0];

  for (let i = 0; i < stringList.length; i++) {

    if (stringList[i].length > longestWord.length) {
      longestWord = stringList[i];
    }

  }

  return longestWord;
}

console.log(findLongestWord(avengers));