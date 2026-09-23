let n1 = prompt("Ingresa el primer número:");
let n2 = prompt("Ingresa el segundo número:");
let n3 = prompt("Ingresa el tercer número:");

if (n3 > n1 && n3 > n2) {
    let promedio = (Number(n1) + Number(n2) + Number(n3)) / 3;
    alert("El tercero es el mayor. El promedio es: " + promedio);
} 
else if (n1 % 2 != 0 && n2 % 2 != 0 && n3 % 2 != 0) {
    alert("Los tres son impares. Nuevos valores:\n" +
          "Número 1: " + (n1 * 1.89) + "\n" +
          "Número 2: " + (n2 * 1.89) + "\n" +
          "Número 3: " + (n3 * 1.89));
} 
else {
    alert("El tercero no es el mayor y los tres no son impares.");
}