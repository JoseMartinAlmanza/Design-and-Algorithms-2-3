/* 
if(condicion){


    código
    código
    código
    código

}

*/
const edad = parseInt(prompt("Ingresa tu edad ")); 

if (edad>=18&& edad <30){
    document.write('Eres Joven');
} else if(edad>=30 && edad < 60 ) {
    document.write('Eres un adulto');
}else if(edad>=60) {
    document.write("Eres un adulto mayor");
} else{
    document.write("Eres un niño llorón");
}
/*  
if(edad>= 18){
    document.write("Eres mayor de edad, puedes votar");
    //console.log("Tu papá es hombre");
}
else
{
    document.write("Lo siento, eres menor de edad, no puedes votar");
    //console.log("Es ilegal");
}

*/