/* 

Colección de elementos 
Tienen métodos o funciones que nos permiten ordenar o manipular los datos almacenados

*/

/* Manera 1 */const arreglo1= [];
console.log(arreglo1);


/* manera2 */const arreglo2= Array.of(1, 'Hola', true);
console.log(arreglo2);

/* Manera 3 */ const arreglo3 = new Array(3,true, 'adiós');
console.log(arreglo3);

const frutas = ['manzana', 'naranjas', 'uvas', 'sandías'];
console.log(frutas[1]);
console.log(frutas[3]);

const cosasQueMeGustan = ['Me gustas tú', 'tu papá', 'tu hermana', 'tu tio', 'tu mamita'];
console.log(cosasQueMeGustan[4]);

// Metodos
/* length = longitud */

const letras = ['A', 'B', 'C','D'];
console.log(letras.length);

//Push = añade un elemento al final de nuestro arreglo 

letras.push('E');
console.log(letras);

// Pop = elimina el último elemento del arreglo

letras.pop();
console.log(letras);
letras.pop();
console.log(letras);
/* unshift= agrega un elemento al inicio del arreglo */

letras.unshift('Abc');
console.log(letras);
/* shift = elimina el primer elemento del arreglo */

letras.shift();
console.log(letras);