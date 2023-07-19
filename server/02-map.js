const letters = ['a','b','c'];

// Genera un nuevo array con la transformación
const newArray = letters.map(item => item + '++');

/* const newArray = [];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    // newArray.push(element);
    newArray.push(element + '++');
}
 */

console.log('original', letters);
console.log('new', newArray);

// Ejercicio multiplicar x 2 array

const numbers = [2, 4, 5, 6, 8];

/* const doubles = numbers.map(function(item) {
    return item * 2; // return item = item * 2;
}); */

const doubles = numbers.map(item => item * 2);
console.log('numbers', numbers);
console.log('doubles', doubles);

// con function 
function solution(array) {
	return array.map(item => item * 2);
}; 

const array = [2,4,5,6];
const solutionArray = solution(array);

console.log(array)
console.log(solutionArray)
