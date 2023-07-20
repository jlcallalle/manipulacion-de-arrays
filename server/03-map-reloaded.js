// Map Reloaded
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
];
console.log("original", orders);
const rta = orders.map((item) => item.total);
console.log("rta", rta);

// Cuando hacemos return el mismo objeto, asi se haya modificado, estamos copiando la referencia en memoria, por ende el originar ha mutado

/* const rta2 = orders.map((item) => {
  item.tax = 0.19;
  return item;
});
console.log("rta2", rta2);
console.log("original", orders); */

// Añadir un nuevo atributo al array con map y sin modificar los originales, 
// utilizamos sprint operation, generamos un nuevo objeto ...item (clonar en nuevo objeto sin la referencia en memoria)

const rta3 = orders.map((item) => {
  return {
    ...item,
    tax: 0.19,
  };
});
console.log("rta3", rta3);
console.log("original", orders);


/* 
Ejercicio: 

Tienes un array de objetos que representan datos de productos con los siguientes atributos:

Input:
[
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  }
]

Tu reto es agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base y debes tener en cuenta que como resultado se debe dejar un valor entero, sin decimales.
*/


const array = [
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  }
];


function addNewAttr(array) {
  return array.map((item) => {
    return {
      ...item,
      tax: Math.trunc( item.price * .19 )
    };
  });
}

const newArrayWithTax =addNewAttr(array);
console.log("original", array);
console.log("rta", newArrayWithTax);

