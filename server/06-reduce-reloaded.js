const items = [1, 3, 2, 3];

// Identificar cuantos 1, 2 o 3 de mismos valores existen.
/* {
'1': 1, 
'2': 1, 
'3': 2 
}*/
// convertimos de un array a un objeto.

const rta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1; // Encontro 1 elemento
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj; 
}, {});

console.log(rta);

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const rta1 = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta1);