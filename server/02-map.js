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