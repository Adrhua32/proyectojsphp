//CLASIFICACION DE RENDIMIENTO ACADEMICO
let promedio = parseFloat(prompt("ingrese su promedio: "));

if (prompt >= 18 && promedio <= 20){
    console.log("Rendiemiento ¡EXCELENTE!");
}else if (promedio >= 14){
    console.log("Rendimiento ¡BUENO!");
}else if (promedio >= 11){
    console.log("Rendimeinto ¡MALO!");
}else if (promedio >= 0){
    ("Rendimiento ¡PESIMO!");
}else{
    console.log("Promedio ¡INVALIDO!");
}