const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
        break;
    }
}

const rta = pets.includes('dog')
console.log('for', includeInArray);
console.log('includes', rta);

// Ejercicio búsqueda 
/* Input:
array: ["ana", "santi", "nico", "anastasia"]
term: "ana"
*/

const words = ["ana", "santi", "nico", "anastasia"];
const query = "an";

function filterByTerm(words, query) {
	const result = words.filter(word => {
		return word.includes(query);
	});
	return result;
};

const resultado = filterByTerm(words, query);
console.log('original', words);
console.log('resultado', resultado);

// filterByTerm(["ana", "santi", "nico", "anastasia"], "an");
