const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

// const newArray = elements // aqui se esta copiando los elementos en memoria
// se utiliza spread  operation, copiar elementos del array sin referencia en memoria
const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}

const rta = elements.concat(othersElements);
console.log('for', newArray);
console.log('concat', rta);

// es adecuado cuando son array.
const rta2 = [...elements, ...othersElements];
console.log('...', rta2);

// si enviamos un strign, enviamos la división del string.
const rta3 = [...elements, ...'random'];
console.log('rta3', rta3);

// Cambiar al array original 
// elements.push(othersElements); 
elements.push(...othersElements);
console.log('elements', elements);