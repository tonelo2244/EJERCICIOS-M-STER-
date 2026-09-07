//2.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43];
const copiaPointsList = [...pointsList];

console.log(copiaPointsList);


//2.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toy = {
  name: 'Bus laiyiar',
  date: '20-30-1995',
  color: 'multicolor'
};
const copiaToy = {...toy};

console.log(copiaToy);

//2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usandospread operatos.
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54, 87, 99, 65, 32];
const newPointsList = [...pointsList, ...pointsLis2];

console.log(newPointsList);

//2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
const newToy = {...toy, ...toyUpdate};

console.log(newToy);


//2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
//pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const copiaColors = [...colors];
copiaColors.splice(2, 1);

console.log(copiaColors);