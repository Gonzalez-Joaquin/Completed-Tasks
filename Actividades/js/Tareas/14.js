//
// Función para calcular la distancia de hamming.
//

document.getElementById(`dist-Hamming`).addEventListener('submit', (event) => {
    event.preventDefault();

    let input1 = document.querySelector('#dist-Hamming [name = "input1"]').value;
    let input2 = document.querySelector('#dist-Hamming [name = "input2"]').value;

    if (input1.length !== input2.length) {
        alert('Las cadenas deben tener la misma longitud');
    }

    let distancia = 0;

    for (let i = 0; i < input1.length; i++) {
        if (input1 !== input2) {
            distancia++;
        }
    }

    document.getElementById('result-Hamming').innerHTML = distancia;
    
    document.querySelector('#dist-Hamming [name = "input1"]').value = '';
    document.querySelector('#dist-Hamming [name = "input2"]').value = ''; 
});