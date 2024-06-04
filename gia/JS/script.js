let nombreProdcuto="plantas";
let precioUnitario=200;
let cantidadDeseada=prompt("Ingrese la cantidad");
let total=cantidadDeseada*precioUnitario;
let descuento=total-total*0.10;

if (cantidadDeseada=>5) {
    alert("Su total es de $"+descuento);
}
else {
    alert("Su total es de $"+total);
}