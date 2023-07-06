document.getElementById('laboral').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const selectedDay = form.elements.day.value;
    const selectedMonth = form.elements.month.value;
    const selectedYear = form.elements.year.value;

    // Crear la fecha
    const selectedDate = new Date(selectedYear, selectedMonth - 1, selectedDay);

    // Verificar si es un día laborable (de lunes a viernes)
    const dayOfWeek = selectedDate.getDay();
    const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5;

    document.getElementById('resultado-diaLaboral').innerText = isWeekday
        ? 'La fecha ingresada es un día laborable.'
        : 'La fecha ingresada no es un día laborable.';
});
