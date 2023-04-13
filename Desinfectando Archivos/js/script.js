function decifrar() {
    let palabra = document.getElementById('newText').value;
    let infected = document.getElementById('infected').value;
    let replace = document.getElementById('replaceText');
    let nuevaPalabra = '';
    for (let i = 0; i < palabra.length; i++) {
        if (palabra.charAt(i) == infected.charAt(1)) {
            if (palabra.charAt(i - 1) && palabra.charAt(i + 1) == infected.charAt(0)) {
                nuevaPalabra = palabra.replace(infected.charAt(1), '');
            }
        }
    }
    replace.innerHTML = nuevaPalabra;
}