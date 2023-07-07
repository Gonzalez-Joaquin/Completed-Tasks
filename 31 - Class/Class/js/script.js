class CPersona {
    constructor(nombre, fechaNacimiento, dni, genero, peso = 0, altura = 0) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.dni = dni;
        this.genero = this.comprobarGenero(genero);
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        const alturaEnMetros = this.altura / 100;
        const imc = this.peso / (alturaEnMetros ** 2);

        if (imc < 20) {
            return -1;
        } else if (imc >= 20 && imc <= 25) {
            return 0;
        } else {
            return 1;
        }
    }

    esMayorDeEdad() {
        const fechaNacimiento = new Date(this.fechaNacimiento);
        const ahora = new Date();
        const diferencia = ahora - fechaNacimiento;
        const edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365));

        return edad >= 18;
    }

    comprobarGenero(genero) {
        const generosValidos = ['M', 'F', 'NB'];

        if (generosValidos.includes(genero)) {
            return genero;
        } else {
            return 'H';
        }
    }
}

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const dni = parseInt(document.getElementById('dni').value);
    const genero = document.getElementById('genero').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    const persona = new CPersona(nombre, fechaNacimiento, dni, genero, peso, altura);

    const imc = persona.calcularIMC();

    const esMayor = persona.esMayorDeEdad() ? 'Sí' : 'No';

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `
      <p>Nombre: ${persona.nombre}</p>
      <p>Fecha de Nacimiento: ${persona.fechaNacimiento}</p>
      <p>DNI: ${persona.dni}</p>
      <p>Género: ${persona.genero}</p>
      <p>Peso: ${persona.peso} kg</p>
      <p>Altura: ${persona.altura} cm</p>
      <p>IMC: ${imc === -1 ? 'Por debajo del peso ideal' : imc === 0 ? 'Peso ideal' : 'Sobrepeso'}</p>
      <p>¿Es mayor de edad? ${esMayor}</p>
    `;
});
