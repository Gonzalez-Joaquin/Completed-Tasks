//
// Función para Vectores;
//

document.getElementById('vectores').addEventListener('submit', (event) => {
    event.preventDefault();

    let n = parseInt(document.querySelector('#vectores [name="input1"]').value);

    if (isNaN(n)) alert('Ingrese un número válido para N');

    let A = generarVectorAleatorio(n, 32000);
    let promedio = calcularPromedio(A);
    let B = obtenerElementosMayoresAlPromedio(A, promedio);
    let cantidadMultiplos = contarMultiplosDosTres(A);
    let suma = calcularSuma(A);
    let C = multiplicarElementosPorDos(A);

    mostrarResultados(A, B, C, promedio, cantidadMultiplos, suma);
});

function generarVectorAleatorio(n, max) {
    let vector = [];

    for (let i = 0; i < n; i++) {
        vector.push(Math.floor(Math.random() * max));
    }

    return vector;
}

function calcularPromedio(vector) {
    let suma = vector.reduce((acumulador, elemento) => acumulador + elemento, 0);
    return suma / vector.length;
}

function obtenerElementosMayoresAlPromedio(vector, promedio) {
    return vector.filter(elemento => elemento > promedio);
}

function contarMultiplosDosTres(vector) {
    let contador = 0;

    for (let i = 0; i < vector.length; i++) {
        if (vector[i] % 2 === 0 && vector[i] % 3 === 0) {
            contador++;
        }
    }

    return contador;
}

function calcularSuma(vector) {
    return vector.reduce((acumulador, elemento) => acumulador + elemento, 0);
}

function multiplicarElementosPorDos(vector) {
    return vector.map(elemento => elemento * 2);
}

function mostrarResultados(A, B, C, promedio, cantidadMultiplos, suma) {
    let resultado = `
        Vector A: ${A.join(', ')}<br><br>
        Vector B: ${B.join(', ')}<br><br>
        Vector C: ${C.join(', ')}<br><br>
        Promedio: ${promedio}<br><br>
        Cantidad de elementos múltiplos de 2 y 3: ${cantidadMultiplos}<br><br>
        Suma de todos los elementos: ${suma}
    `;

    document.getElementById('result-Vector').innerHTML = resultado;
}