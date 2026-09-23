
let nota = prompt("Ingresa la calificación (del 1 al 20):");

nota = parseInt(nota);

let letra = "";

if (nota >= 17 && nota <= 20) {
    letra = "A";
} else if (nota >= 14) {
    letra = "B";
} else if (nota >= 11) {
    letra = "C";
} else if (nota >= 7) {
    letra = "D";
} else if (nota >= 1) {
    letra = "F";
} else {
    letra = "Nota fuera de rango";
}

console.log("La nota " + nota + " equivale a la letra: " + letra);
alert("La nota " + nota + " equivale a la letra: " + letra);