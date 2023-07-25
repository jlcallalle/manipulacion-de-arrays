# Manipulacion de arrays en Javascript

## Requisitos iniciales

Contar con dos carpetas: client y server que servirán para ejercicios en el navegador y en el servidor.  También necesitarás instalar una dependencia llamada http-server.

```sh
npm i http-server
```

```sh
 http-server client
```

### For Each
Es un métodos de recorrido de arrays, que permiten manipular y tener sintáxis más reducida a comparación de un foor


```js
const letters = ['a','b','c'];

letters.forEach(item => console.log('forEach', item))

```

### Diferencia entre mutabilidad e inmutabilidad

Mutable es aquella acción que cambia el valor en la referencia en memoria del elemento del array original, provocando que cambien el original y la copia. 

Inmutable es la acción en la que se cambia el valor, pero en una referencia diferente del original, provocando que el original siga igual

La mutabilidad es más flexible y una buena opción si se requiere cambiar, actualizar o eliminar datos; pero esto puede ocasionar fallos o resultados erróneos en nuestra aplicación. La inmutabilidad es más exigente, te permite generar nuevas estructuras para manejarlas sin cambiar la original; pero esto puede provocar que la memoria colapse.

Por lo que, ¿cuál es mejor? La respuesta es ninguna, cada uno te permite manejar estructuras de datos, por ende es necesario identificar cuál forma es la adecuada a aplicar en un algoritmo.


### Método Map
Elemento más útil para hacer transformaciones en Array.

¿Qué hace el .map()? TRANSFORMAR.

.map() es INMUTABLE por lo tanto no modifica el array original, sino que crea uno nuevo con la “transformación” aplicada.

Además, mantienes el mismo length que el array original, te devuelve en el nuevo array la misma cantidad que el array que le aplicaste el método

```js
const letters = ['a','b','c'];

// Genera un nuevo array con la transformación ++
const newArray = letters.map(item => item + '++');

console.log('original', letters);
console.log('new', newArray);
```

```js
original [ 'a', 'b', 'c' ]
new [ 'a++', 'b++', 'c++' ]
```

### Map Reloaded
Array con Objetos 

1.- Obtener el valor total

```js
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
```

2.- Agregar nuevo atributo Tax

```js
const rta3 = orders.map((item) => {
  return {
    ...item,
    tax: 0.19,
  };
});
console.log("rta3", rta3);
console.log("original", orders);
```
```js
rta3 [
  { customerName: 'Nicolas', total: 60, delivered: true, tax: 0.19 },
  { customerName: 'Zulema', total: 120, delivered: false, tax: 0.19 },
  { customerName: 'Santiago', total: 180, delivered: true, tax: 0.19 },
  { customerName: 'Valentina', total: 240, delivered: true, tax: 0.19 }
]
original [
  { customerName: 'Nicolas', total: 60, delivered: true },
  { customerName: 'Zulema', total: 120, delivered: false },
  { customerName: 'Santiago', total: 180, delivered: true },
  { customerName: 'Valentina', total: 240, delivered: true }
]
```


### Filter
filter() lo que hace es filtrar el array original en base a una condición, 
los que la cumplan estaran en el nuevo array creado.

Por lo tanto filter() es inmutable y el nuevo array creado solamente puede contener:

- cero coincidencias (array 0 elementos)
- todas coincidencias 
- algunas coincidencias
- Nunca retorna más elementos que un array original

```js
// Filtrar elementos por tamaño de caracteres.
const words = ['spray', 'limit', 'elite', 'exuberant'];

// Filtro con Filter
const rta = words.filter(item => item.length >= 6)
console.log('rta', rta);
console.log('original', words );
```

### Reduce
El método reduce es inmutable y consiste retornar un solo valor del array iterado a partir de una función (callback) que indica de qué manera se itera cada elemento para reducirlo.

Este método recibe dos argumentos:

- La función que itera y reduce cada elemento del array. (obligatorio)
- El valor inicial que utilizará como argumento la función. Si no se especifica, en la primera iteración el valor inicial será el primer elemento del array y no ejecuta la función

```js
const totals = [1,2,3,4];

const rta = totals.reduce((sum, element) => sum + element, 0)
console.log('rta reduce', rta);
```

### Some
El método somees inmutable y consiste retornar un valor lógico verdadero, si existe al menos un elemento que cumpla la condición establecida en la función (callback).

plugin date-fns: manipulación de fecha, solo impacta en el peso la función que se usa.

```js
// Calcular si existe al menos 1 elemento par
const numbers = [1, 2, 3, 4];

const rta2 = numbers.some((item) => item % 2 === 0);
console.log("rta2", rta2);
```

### Every

El método everyes inmutable y consiste retornar un valor lógico verdadero si todos los elementos cumplen con la condición establecida en la función (callback).

```js
// Calcular si todos los elementos son menores a 40
const numbers = [1, 2, 3, 4];

const rta2 = numbers.every(item => item <= 40)
console.log('rta2', rta2);
```

### Find y FindIndex
Los métodos find y findIndex consisten en encontrar el primer elemento de un array que cumpla con la condición especificada en la función (callback).

Filter, retorna 1 array de un solo elemento en cambio
Find, ternona directamente el objeto que cumple con la condicional

En el caso de find retornará el elemento completo, si cumple con la condición, caso contrario retornará undefined. 
El método findIndex retornará el índice del elemento encontrado, caso contrario retornará -1.

```js
// Calcular si todos los elementos son menores a 40
const numbers = [1,30,49,29,10,13];

const rta2 = numbers.find(item => item === 30)
console.log('find', rta2);

```


### Includes
El método includes determina si un array o string incluye un determinado elemento. Devuelve true o false, si existe o no respectivamente.

Este método recibe dos argumentos:
El elemento a comparar.
El índice inicial desde donde comparar hasta el último elemento

```js
// Calcular si se encuentra la palabra dog en el array
const pets = ['cat', 'dog', 'bat'];

const rta = pets.includes('dog')
console.log('includes', rta);
```


### Join
El método join une los elementos del array, mediante una separación, y retorna un string. Si un elemento es undefined o null, se convierte en una cadena vacía.

Este procedimiento recibe un argumento:

La separación de cada elemento del array al unirlos.

```js
const elements = ["Fire", "Air", "Water"];

const rta = elements.join('--')
console.log('join', rta);
```

### Concat
El método concat es inmutable y consiste en crear un nuevo array a partir de la unión de otros valores o arrays especificados como argumentos.

Este método recibe uno o varios argumentos:

Valores cualesquiera y/o arrays para concatenar

```js
const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

const rta = elements.concat(othersElements);
console.log('concat', rta);
```
