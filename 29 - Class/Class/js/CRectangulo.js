class CRectángulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    CalcularArea() {
        return this.base * this.altura;
    }
}

const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();


    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);

    const rectangulo = new CRectángulo(base, altura);
    const area = rectangulo.CalcularArea();

    const resultadoElement = document.getElementById('resultadoCRectangulo');
    resultadoElement.innerHTML = `El área del rectángulo es: ${area}`;
});