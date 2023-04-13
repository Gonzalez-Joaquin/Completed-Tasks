function newDate() {
    do {
        n = prompt('Cantidad de numeros');
        n = parseInt(n);
    } while (isNaN(n));

    let entrada = document.getElementById('entrada');
    entrada.innerHTML = n;

    let arr = new Array(n);
    let aux = 0;

    let entradaArray = document.getElementById('entradaArray');

    for (i = 0; i < n; i++) {
        do {
            y = prompt('Ingrese valor: ');
            y = parseInt(y);
            entradaArray.innerHTML += y;
            entradaArray.textContent += ' ';
        } while (isNaN(y));
        arr[i] = y;
    }




    arr.sort();

    if (n % 2 == 0) {
        let mediana = arr[(n / 2) - 1];
        print(mediana);
    } if (n % 2 != 0) {
        for (let i = 0; i < n; i++) {
            aux += arr[i];
        }
        aux = (aux / 2);
        print(aux);
    }
}

function print(x) {
    let replace = document.getElementById('salida');
    replace.innerHTML = x;
}