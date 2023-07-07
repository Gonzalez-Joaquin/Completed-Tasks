class CEmpleado {
    constructor(nombre, anioIngreso, salario, direccion) {
        this.nombre = nombre;
        this.anioIngreso = anioIngreso;
        this.salario = salario;
        this.direccion = direccion;
    }

    calcularAntiguedad() {
        const anioActual = new Date().getFullYear();
        return anioActual - this.anioIngreso;
    }

    viveEnWallStreet() {
        return this.direccion.includes('WallStreet');
    }
}

const empleado = new CEmpleado('Robert', 2014, 5000, '64C- WallStreet');

const resultadoElement = document.getElementById('resultado');

const nombreElement = document.createElement('p');
nombreElement.textContent = `Nombre: ${empleado.nombre}`;

const anioIngresoElement = document.createElement('p');
anioIngresoElement.textContent = `Año de ingreso: ${empleado.anioIngreso}`;

const direccionElement = document.createElement('p');
direccionElement.textContent = `Dirección: ${empleado.direccion}`;

resultadoElement.appendChild(nombreElement);
resultadoElement.appendChild(anioIngresoElement);
resultadoElement.appendChild(direccionElement);

const antiguedadElement = document.createElement('p');
antiguedadElement.textContent = `Años de antigüedad: ${empleado.calcularAntiguedad()}`;
resultadoElement.appendChild(antiguedadElement);

const wallStreetElement = document.createElement('p');
wallStreetElement.textContent = `¿Vive en Wall Street? ${empleado.viveEnWallStreet() ? 'Sí' : 'No'}`;
resultadoElement.appendChild(wallStreetElement);
