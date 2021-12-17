//ciclos, bucles o loops

/*
while 

let condición = 1;    --> valor inicial, en el que queremos que comience nuestro ciclo
while(condición) {
    bloque de código
    modificación al valor inicial --> muy importante, sin ella el bucle sería infinito, error de cilcado
}

Mientras la condición sea verdadera, el ciclo seguirá ejecutándose

*/

let condicion = 1;

while(condicion <= 10) { 
    console.log(condicion);
    //condicion = condicion + 1;
    condicion++;
}

//variable++  --> incrementar una unidad al valor de la variable --> variable + 1
//variable--  --> disminuir una unidad al valor de la variable --> variable - 1

//do while

//for utiliza un contador

for (let control = 1; control ==10; control++) {
    console.log('hola');
}

/* 
Tomar los números de un arreglo llamado 'numeros', [1, 4, 7, 9, 19, 15, 46, 27, 40, 123]
- multiplicar cada numero por dos
-guardar los resultados en un arreglo llamado 'resultado'
-imprimir en consola o en el body cada elemento del arreglo 'resultado'


*/