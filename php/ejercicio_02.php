<?php
//vamos a declarar todas las variables
//necesarios
$precios = [
    "pantalones de Lana" => 45.00,
    "sueter de casimir" => 100.00,
    "blusa de seda" => 14.00,
    "Camisola de seda" => 10.00,
    "falda recta" => 40.00,
    "saco de lana" => 120.00,
];

$prenda = "sueter de casimir";
$cantidad = 8;

//Ahora obtenemos el precio unitario 
// desde el tablero
$precioUnitario = $precios[$prenda];

//realizamos el calculo
$montoVenta = $precioUnitario * $cantidad;

//determinamos el porcaentaje de descuento
if ($montoVenta < 100){
    $porcentajeDescuento = 0.02;
}elseif($montoVenta <= 500){
    $porcentajeDescuento = 0.04;
}elseif($montoVenta <= 1000){
    $porcentajeDescuento = 0.06;
}elseif($montoVenta <= 1500){
    $porcentajeDescuento = 0.08;
}else{
    $porcentajeDescuento = 0.20;
}
//Calculamos el monto de descuento
$montoDescuento = $montoVenta * $porcentajeDescuento;

//Calculamos el monto neto a pagar
$montoNeto = $montoVenta - $montoDescuento;

//calculamos al IFg
$tasaIGV = 0.18;
$montoIGV = $montoNeto * $tasaIGV;

//fase de salid: imprimimos TODO
echo "-----------------------------------------------------" . "<br>";
echo ":::::::DETALLE DE COMPRA: TELAS Y MODA DE OTOÑO ISABEL:::::::" . "<br>";
echo "-----------------------------------------------------" . "<br>";
echo "Prenda selecccionada: " . $prenda . "<br>";
echo "cantidad: " . $cantidad . "<br>";
echo "precio unitario: " . $precioUnitario . "<br>";
echo "-----------------------------------------------------" . "<br>";
echo "Monto de venta: " . $montoVenta . "<br>";
echo "descuento: " . $montoDescuento . "<br>";
echo "IGV: " . $montoIGV . "<br>";
echo "monto neto a pagar: " . $montoNeto . "<br>";
echo "-----------------------------------------------------" . "<br>";




?>