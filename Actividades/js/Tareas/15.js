//
// Función que descubre el numero del presidente;
//

document.getElementById('presidente').addEventListener('submit', (event) => {
    event.preventDefault();

    let input1 = document.querySelector('#presidente [name = "input1"]').value;
    let input2 = document.querySelector('#presidente [name = "input2"]').value;
    document.getElementById('result-presidente').innerHTML = '';

    if (input1 === input2) { alert('Los números tienen que ser diferentes') }

    if (input1 > input2) { alert('El primer número tiene que ser menor al input 2') }

    function ComprobarPrimo(n) {
        let flag = EsPrimo(n);

        if (flag && n >= 10) {
            let digitos = Array.from(n.toString());
            let sumaDigitos = digitos.reduce((suma, numero) => suma + parseInt(numero, 10), 0);

            flag = EsPrimo(sumaDigitos);
        }

        return flag;
    }

    function EsPrimo(numero) {
        let esPrimo = true;

        if (numero <= 1) esPrimo = false;
        if (numero > 1) {
            for (let i = 2; i <= Math.sqrt(numero); i++) {
                if (numero % i === 0) { esPrimo = false; break; }
            }
        }

        return esPrimo;
    }

    for (let i = input1; i <= input2; i++) {
        if (ComprobarPrimo(i)) {
            document.getElementById('result-presidente').innerHTML += i + ' ';
        }
    }


    document.querySelector('#presidente [name = "input1"]').value = '';
    document.querySelector('#presidente [name = "input2"]').value = '';
});