//
// Función para Vectores Huston.
//

document.getElementById(`vectores-Houston`).addEventListener('submit', (event) => {
    event.preventDefault();

    let vector1 = Array.from({ length: parseInt(document.querySelector('#vectores-Houston [name="input1"]').value) }, () => Math.floor(Math.random() * 10));
    let vector2 = Array.from({ length: parseInt(document.querySelector('#vectores-Houston [name="input1"]').value) }, () => Math.floor(Math.random() * 10));

    let vector3 = Array.from({ length: vector1.length }, (_, index) => vector1[index] * vector2[index]);

    let sum = vector3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    document.getElementById('result-VectorHouston').innerHTML = sum;
    
    document.querySelector('#vectores-Houston [name = "input1"]').value = '';
    document.querySelector('#vectores-Houston [name = "input2"]').value = '';
});