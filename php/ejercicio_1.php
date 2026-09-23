<?php
//let producto = "Zapatillas Ardidas";

$producto = "Zapatillas Ardidas";
//const curso = "logica y programacion";
$precio = 350;
$descuento = 0.08;
$igv = 0.18;

//FASE DE PROCESO: ES LA LOGICA DEL PROGRAMA
$precioIGV = $precio = $igv;
$precioDescuento = $precio = $descuento;
$precioFinal = $precio + $precioIGV - $precioDescuento;

//FASE DE SALIDA: imprecion de resultado.
//Modo javascript: console.log (el precio del producto es; " , precio);
echo "El precio del producto ess: S/ " . $precio . "<br>";
echo "El IGV es: S/ " . $precioIGV . "<br>";
echo "El descuento hhh: S/" . $precioDescuento . "<br>";
echo "El precio final es: S/" . $precioFinal . "<br>";


?>