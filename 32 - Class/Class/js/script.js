class CPassword {
    constructor(longitud = 8, contraseña = '') {
        this.longitud = longitud;
        this.contraseña = contraseña;
    }

    esFuerte() {
        let mayusculas = 0;
        let minusculas = 0;
        let numeros = 0;

        for (let i = 0; i < this.contraseña.length; i++) {
            const caracter = this.contraseña[i];
            if (/[A-Z]/.test(caracter)) {
                mayusculas++;
            } else if (/[a-z]/.test(caracter)) {
                minusculas++;
            } else if (/[0-9]/.test(caracter)) {
                numeros++;
            }
        }

        return mayusculas > 2 && minusculas > 1 && numeros > 5;
    }

    generarPassword() {
        const caracteresPermitidos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let contraseñaGenerada = '';

        for (let i = 0; i < this.longitud; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
            contraseñaGenerada += caracteresPermitidos[indiceAleatorio];
        }

        this.contraseña = contraseñaGenerada;
    }
}

const password = new CPassword();

password.generarPassword();
document.write(`<p>Contraseña generada: ${password.contraseña}</p>`);
document.write(`<p>¿Es fuerte? ${password.esFuerte()}</p>`);
