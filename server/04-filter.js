const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = [];

// Filtro con For
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6) {
        newArray.push(item);
    }
}
console.log('newArray', newArray);
console.log('original', words );

// Filtro con Filter
const rta = words.filter(item => item.length >= 6)
console.log('rta', rta);
console.log('original', words );


const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
        customerName: "Nicolas",
        total: 2322,
        delivered: false,
      },
  ];

// Condición si la orden de compra es entregada y el total > 100  
const rta3 = orders.filter(item => item.delivered && item.total >= 100)
console.log('rta3', rta3);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log('query', search('Nico'));
// console.log('query', search('hsdjkfhdsj'));


/* EJERCICIO FILTER

Ejercicio1:

Tienes un array de strings que contienen diferentes palabras, tu reto es retornar un array solo con las que cumplan con la condición de tener 4 o más letras.

Para solucionarlo vas a encontrar una función llamada filterByLength que recibe un parámetro de entrada:

array: Un array de strigs con palabras
Dentro del cuerpo de la función filterByLength debes escribir tu solución.

Input: ['amor', 'sol', 'piedra', 'día']
Output: [ 'amor', 'piedra' ]
*/

const array = ['amor', 'sol', 'piedra', 'día'];
//const resultado = array.filter(item => item.length >= 4)

function filterByLength (array) {
  return array.filter(item => item.length >= 4)
}

const resultado = filterByLength(array);
console.log('original', array);
console.log('resultado', resultado);