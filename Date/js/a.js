document.getElementById('newYear').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const selectedDay = parseInt(form.elements.day.value);
    const selectedMonth = parseInt(form.elements.month.value);
    const selectedYear = parseInt(form.elements.year.value);


    const selectedDate = new Date(selectedYear, selectedMonth - 1, selectedDay);
    const targetDate = new Date(2023, 11, 31);
    const timeDiff = targetDate.getTime() - selectedDate.getTime();
    const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (daysRemaining >= 0) {
        document.getElementById('resultado-year').innerText = `Faltan ${daysRemaining} días desde la fecha ingresada hasta el 31 de diciembre de 2023.`;
    } else {
        document.getElementById('resultado-year').innerText = `La fecha ingresada es posterior al 31 de diciembre de 2023.`;
    }
});
