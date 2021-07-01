/**
 * Desarrollar una función que permita recorrer un texto que se le pase como parámetro 
 * y muestre cada una de sus palabras en un tiempo estipulado. 
 * Al finalizar debe ejecutar una función que se le pasa como callback.
 * 
 * Realizar tres llamadas a la función con porciones de texto que tienen que ser 
 * representados en forma ordenada. Inicialmente todas las palabras del primero, 
 * luego las del segundo y finalmente las del tercero.
 * 
 * Hacer configurable el tiempo de representación de palabras mediante un parámetro opcional.
 * Si este no se define será cada un segundo.
 * 
 * Al finalizar el la operación completa debe imprimir: ‘proceso completo’ y también mostrar
 * la cantidad de palabras totales
 * Aclaracion: no usar variables globales y clases y ejecutar con NodeJS (no tsc)
 */

const mostrarPalabras = (texto, tiempo, cantidadPalabras, callback) => {
    let i = 0;
    palabrasTexto = texto.split(" ").length;
    cantidadPalabras += texto.split(" ").length;
    let timer = setInterval(() => {
        console.log(texto.split(" ")[i]);
        if (i === palabrasTexto - 1) {
            clearInterval(timer)
            if (!texto) callback('No existe texto')
            else callback(null, cantidadPalabras)
            i = 0
        }
        i++;
    }, tiempo);
}

let texto1 = 'primer texto';
let texto2 = 'curso backend de coderhouse';
let texto3 = 'probando llamadas asincronas en nodejs';
const tiempo = 2000;

mostrarPalabras(texto1, tiempo, 0, (error, totalPalabras) => {
    mostrarPalabras(texto2, tiempo, totalPalabras, (error, totalPalabras) => {
        mostrarPalabras(texto3, tiempo, totalPalabras, (error, totalPalabras) => {
            console.log('Proceso terminado, cantidad de palabras:', totalPalabras);
        });
    });
});