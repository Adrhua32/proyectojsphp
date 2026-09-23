
let nombre = prompt("Ingresa el nombre de la persona:");
let edad = Number(prompt("Ingresa la edad:"));

nombre = nombre.toUpperCase();

let nuevaEdad = 0;

if (nombre === "ANA" || nombre === "JUANA" || nombre === "NANCY") {
    nuevaEdad = edad * 1.30;
    alert("El nombre es " + nombre + ". La edad incrementó un 30%: " + nuevaEdad);
} else {
    nuevaEdad = edad * 1.90;
    alert("El nombre es " + nombre + ". La edad incrementó un 90%: " + nuevaEdad);
}