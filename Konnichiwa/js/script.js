function print(input) {
    let newText = document.getElementById('replaceText');
    newText.innerHTML = ConvertirNombre(input);
}

function ConvertirNombre(text) {
    let frase = "Konnichi wa,";

    for (let i = 0; i < text.length; i++) {
        frase += text.charAt(i);
        console.log(text.charAt(i));
        if (text.charAt(i + 1) != "A" &&
            text.charAt(i + 1) != "E" &&
            text.charAt(i + 1) != "I" &&
            text.charAt(i + 1) != "O" &&
            text.charAt(i + 1) != "U") {
            frase += "u";
        }
    }
    frase += '-san';

    return frase;
}