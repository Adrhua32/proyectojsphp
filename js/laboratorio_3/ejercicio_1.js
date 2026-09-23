/* SISTEMA DE PRECIOS SEGUN EDAD */
// parseint: Sierve para convertir un dato a valor numerico 
//entero.
let edad = parseInt(prompt("ingrese su edad: "));

if (edad <= 10){
    console.log("entrada gratuita.");
}else if (edad <=14){
    console.log("Precio de entrada:S/ 8.00 (adolecente)");
}else if (edad <= 60){
    console.log("Precio de entrada:S/20.00 (adulto)");
}else{
    console.log("Precio de entrada: S/ 7.00 (adulto mayor)");
}