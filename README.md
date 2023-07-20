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