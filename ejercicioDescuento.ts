/*Implemente un algoritmo que calcule y muestre por pantalla el precio final de un producto después de aplicarle un descuento
El precio inicial lo ingresa el usuario usando prompt
El descuento a aplicar es del 10%. Recuerde que puede obtener el 10% de un valor multiplicado por 0,1
El descuento debe ser guardados en una variable (no ingresados por teclado)*/

let precioProducto: number = Number(prompt("ingrese el precio del producto"));
let porcentajeDescuento10: number = 0.1;
let descuento: number = precioProducto * porcentajeDescuento10;
let precioFinal: number = precioProducto - descuento;
console.log("el precio final del producto es: " + precioFinal);
