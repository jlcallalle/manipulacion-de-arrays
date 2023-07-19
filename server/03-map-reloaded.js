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
