function mensaje() {
    let frase = document.getElementById('newText').value;
    let palabra = '';
    let palabraDecifrada = '';
    let nuevaFrase = '';
    let aux = new Array(0, 0);
    let x = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i) == '(') {
            i++;
            aux[0] = i;
            do {
                palabra += frase.charAt(i);
                i++;
            } while (frase.charAt(i) != ')');
            aux[1] = i - 1;
            palabraDecifrada = invertir(palabra);
            nuevaFrase = frase.replace(palabra, palabraDecifrada);
        }
        palabra.replace(palabra, '');
        palabraDecifrada.replace(palabraDecifrada, '');
    }
    print(nuevaFrase);
}

function invertir(palabra) {
    return palabra.split('').reverse().join("");
}

function print(nuevaFrase) {
    let replace = document.getElementById('replaceText');
    replace.innerHTML = nuevaFrase;
}