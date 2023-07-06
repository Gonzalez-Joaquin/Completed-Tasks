//
// Logica para agregar mediante código las opciones de DIA - MES - AÑO - Paises.
//

const addData = () => {
    const dataMonth = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre",
    ];
    const rootDay = document.querySelectorAll("#root-day");
    const rootMonth = document.querySelectorAll("#root-month");
    const rootYear = document.querySelectorAll("#root-year");

    rootDay.forEach(key => {
        for (let i = 1; i <= 31; i++) {
            let newDay = `<option value="${i}">${i}</option>`;
            key.insertAdjacentHTML("beforeend", newDay);
        }
    });

    rootMonth.forEach(key => {
        dataMonth.forEach((month, index) => {
            let newMonth = `<option value="${index + 1}">${month}</option>`;
            key.insertAdjacentHTML("beforeend", newMonth);
        });
    });

    rootYear.forEach(key => {
        for (let i = 1930; i <= 2023; i++) {
            let newYear = `<option value="${i}">${i}</option>`;
            key.insertAdjacentHTML("beforeend", newYear);
        }
    })
};

document.addEventListener("DOMContentLoaded", addData);

/* ---- Header ---- */

document.querySelectorAll('.nav--links').forEach((button, index) => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.nav--links').forEach((button) => {
            button.classList.remove('active');
        });

        document.querySelectorAll('article').forEach((article, indexArticle) => {
            if (index === indexArticle) {
                article.classList.add('active');
                button.classList.add('active');
            }
            if (index !== indexArticle) {
                article.classList.remove('active');
            }
        });
    });
});