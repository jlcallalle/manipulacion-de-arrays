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