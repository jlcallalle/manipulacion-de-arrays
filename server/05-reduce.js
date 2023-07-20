const totals = [1,2,3,4];

let sum = 0; // acumulador es let porque se va ir modificando
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}
console.log('for', sum);

// Se envia 2 parametros
// 1er arg: array function
// 2do arg: 0 es el estado inicial 

// let reducedValue = array.reduce(function(), initialValue)

const rta = totals.reduce((sum, element) => sum + element, 0)
console.log('rta reduce', rta);

// EJERCICIOS
// Por ejemplo, hagamos un algoritmo que calcule la suma de los cuadrados de los elementos de un array.

const numbers = [5,4,8,6,2]
let suma = 0

for(let i = 0; i<numbers.length; i++){
  const number = numbers[i]
  suma = suma + number**2
}

console.log(suma) // 145

// Método Reduce sin valor Inicial

const numbers2 = [5,4,8,6,2]
const reducedValue = numbers2.reduce((suma, number) => suma + number**2)
console.log(reducedValue) // 125

// Método Reduce con valor Inicial

const numbers3 = [5,4,8,6,2]
const reducedValue2 = numbers3.reduce((suma, number) => (
    suma + number**2
), 0) // <- Valor inicial

console.log(reducedValue2) // 145