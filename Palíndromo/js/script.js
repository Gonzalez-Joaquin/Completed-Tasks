function print(input) {
    let newText = document.getElementById('replaceText');
    if (EsGrito(input) == true) {
        cartel = 'Es Palindromo';
    } if (EsGrito(input) == false) {
        cartel = 'No es Palindromo';
    }
    newText.innerHTML = cartel;
}

function EsGrito(text) {
    let procesado = text.split(" ").join("");
    let long = procesado.length;
    let flag = false;

    for (let i = 0; i < procesado.length / 2; i++) {
        if (procesado.charAt(i) == procesado.charAt(long - 1)) {
            long--;
            flag = true
        }
    }

    return flag;
}