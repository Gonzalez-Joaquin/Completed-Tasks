document.getElementById('formButtons').addEventListener('submit', (e) => {
    e.preventDefault();

    document.querySelectorAll('.btn-click').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            document.getElementById('btn-res').innerHTML = 'Botón ' + (index + 1);
        });
    });
});

function handleFormView(event) {
    event.preventDefault();
    const form = event.target.closest('.form');
    const formBack = form.querySelector('.form-back');
    formBack.style.display = 'flex';
}

document.querySelectorAll('.btn-viewForms').forEach((btn) => {
    btn.addEventListener('click', handleFormView);
});

document.getElementById('problematica-1').addEventListener('submit', (e) => {
    e.preventDefault()
    document.getElementById('btn-resP1').innerHTML = document.querySelector('#problematica-1 [ name="number" ]').value * document.querySelector('#problematica-1 [ name="number" ]').value;
})

document.getElementById('problematica-2').addEventListener('submit', (e) => {
    e.preventDefault();

    const calcular = (n1, n2) => {
        return result = n1 < n2 ? n1 : n2;
    }

    document.getElementById('btn-resP2').innerHTML = calcular(document.querySelector('#problematica-2 [ name="number1" ]').value, document.querySelector('#problematica-2 [ name="number2" ]').value)
})

document.getElementById('problematica-3').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('btn-resP3').innerHTML = document.querySelector('#problematica-3 [ name = "name"]').value + ' ' + document.querySelector('#problematica-3 [ name = "surname"]').value;
})

document.getElementById('passForm').addEventListener('submit', (e) => {
    e.preventDefault()
    document.getElementById('res-pass').innerHTML = resultado = document.querySelector('#passForm [ name = "primer"]').value === document.querySelector('#passForm [ name = "segunda"]').value ? 'si' : 'no';
})

const selectPizza = document.getElementById('selectPizza');
const precioTexto = document.getElementById('precioTexto');

selectPizza.addEventListener('change', () => {
    const selectedPizza = selectPizza.value;
    switch (selectedPizza) {
        case 'jamonyqueso':
            precioTexto.value = 'Precio: $10';
            break;
        case 'muzzarella':
            precioTexto.value = 'Precio: $8';
            break;
        case 'morrones':
            precioTexto.value = 'Precio: $12';
            break;
    }
});

document.getElementById('problematica-5').addEventListener('submit', (e) => {
    e.preventDefault();

    const procesadorPrecios = {
        "i3": 400,
        "i5": 600,
        "i7": 800
    };

    const monitorPrecios = {
        "20": 250,
        "22": 350,
        "26": 550
    };

    const discoDuroPrecios = {
        "500gb": 300,
        "1tb": 440,
        "3tb": 500
    };

    const calcularPrice = () => {
        return result = (procesadorPrecios[document.querySelector('#problematica-5 [ name="procesador"]').value]) + (monitorPrecios[document.querySelector('#problematica-5 [ name="monitor"]').value]) + (discoDuroPrecios[document.querySelector('#problematica-5 [ name="discoDuro"]').value]);
    }

    document.getElementById('presupuestoTexto').value = calcularPrice();
})

document.getElementById('problematica-6').addEventListener('submit', (e) => {
    e.preventDefault();

    const precioPorPizza = {
        queso: 4,
        jamonqueso: 6,
        especial: 10
    };

    document.getElementById('importeTotal').value = precioPorPizza[document.querySelector('#problematica-6 [name = "pizza"]').value] * document.querySelector('#problematica-6 [name = "cantidad"]').value;
})

const deportes = [
    "Fútbol",
    "Baloncesto",
    "Tenis",
    "Natación",
    "Atletismo",
    "Golf",
    "Voleibol",
    "Rugby",
    "Ciclismo",
    "Hockey"
].forEach(deporte => {
    let check = `<label class="text"><input type="checkbox" class="checkbox" name="deporte" value="${deporte}">${deporte}</label>`;
    document.getElementById('rootDeportes').insertAdjacentHTML('beforeend', check);
});

document.getElementById('formDeportes').addEventListener('submit', (e) => {
    e.preventDefault();

    let deportesSelected = '';

    document.querySelectorAll('#formDeportes [ name = "deporte"]:checked').forEach(key => {
        deportesSelected += key.value + ' ';
    })

    document.getElementById('res-deportes').innerHTML = deportesSelected;
});