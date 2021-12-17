/* 
Condicionales:

if(condición){
    bloque

}else if(){
    
}else{
}
*/
/* 
Función

Bloque de código reutilizable
function nombre(parametros){
    return
}
nombre(argumentos);

*/

/* function procesadorDeFrutas(manzanas, naranjas){
    let jugo = 'Jugo de' + manzanas + 'manzanas y' + naranjas + 'naranjas.';
    return jugo;
}
let jugoDeManzana = procesadorDeFrutas(4,0);
console.log(jugoDeManzana);

let jugoDeNaranja = procesadorDeFrutas(0,5);
console.log(jugoDeNaranja);
 */


function descuentoCompra(compraFormula){
    let descuentoContenedor;
    if(compraFormula<100){
      descuentoContenedor= compraFormula *0.9;
    }
    else if(compraFormula>=100&&compraFormula<200){
     descuentoContenedor= compra*.8;
    }
    else if(compraFormula>200){
    descuento =compraFormula*.7;
    }
   return descuentoContenedor;
}

let compraIngreso = parseInt(prompt('Ingresa tu compra')); 
let descuentoImpresion= descuentoCompra(compraIngreso);
document.write("<h1>"+ "El precio final es: "+ descuentoImpresion + "</h1>");