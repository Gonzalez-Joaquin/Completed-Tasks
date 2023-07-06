document.getElementById('completos').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const selectedDay1 = form.elements.day.value;
    const selectedMonth1 = form.elements.month.value;
    const selectedYear1 = form.elements.year.value;
    const selectedDay2 = form.elements.day2.value;
    const selectedMonth2 = form.elements.month2.value;
    const selectedYear2 = form.elements.year2.value;

    // Crear las fechas
    const date1 = new Date(selectedYear1, selectedMonth1 - 1, selectedDay1);
    const date2 = new Date(selectedYear2, selectedMonth2 - 1, selectedDay2);

    // Calcular la diferencia en años
    const yearDiff = date2.getFullYear() - date1.getFullYear();

    // Verificar si se ha pasado el aniversario de date2 en el año actual
    if (
        date2.getMonth() < date1.getMonth() ||
        (date2.getMonth() === date1.getMonth() && date2.getDate() < date1.getDate())
    ) {
        yearDiff--;
    }

    document.getElementById('resultado-fechas').innerText = `Han pasado ${yearDiff} años completos entre las fechas.`;
});