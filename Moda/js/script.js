// Recibe el valor y supervisa que sea correcto
function buttonModa() {
    let numero = document.getElementById('numero').value;
    let value;
    if (numero > 0 && numero <= 600) {
        value = newDates(numero);
    } else {
        value = Alert(0);
    }
    return value;
}

// Alerta de que el valor no es indicado
function Alert(value) {
    let popUp = document.getElementById('alert');
    if (value == 1) {
        popUp.style.display = "none";
    } else {
        popUp.style.display = "grid";
    }
};

// Recibe el valor y lo transforma en un arreglo.
function newDates(x) {
    let values = new Array(x);

    let ctn = document.getElementById('Input');

    for (let i = 0; i < x; i++) {
        let elemento = document.createElement('p');
        values[i] = randomNumber();
        elemento.textContent += values[i];
        elemento.classList.add('texto');
        ctn.appendChild(elemento);
    }

    return print(values);
}

// Muestro el arreglo encontrado.
function print(values) {
    let article = document.querySelectorAll('article');

    article[0].style.display = "none";
    article[1].style.display = "flex";

    findModa(values);
}

// Funcion para encontrar la moda.
function findModa(x) {
    let arr = x.sort();

    let modaActual = 1;
    let numeroDeModaActual = 0;

    let mejorModa = 0;
    let numeroDeMejorModa = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            modaActual++;
            numeroDeModaActual = arr[i];
        } if (arr[i] != arr[i + 1]) {
            if (modaActual > mejorModa) {
                mejorModa = modaActual;
                numeroDeMejorModa = numeroDeModaActual;
            }
            modaActual = 1;
        }
    }
    return output(mejorModa, numeroDeMejorModa);
}

// Funcion para mostrar el resultado final.

function output(x, y) {
    let numero = document.getElementById('num');
    numero.textContent += y;
    let rep = document.getElementById('rep');
    rep.textContent += x + ' repeticiónes';
}

// Funcion para generar numeros aleatorios.
function randomNumber() {
    return Math.ceil(Math.random() * 10);
}