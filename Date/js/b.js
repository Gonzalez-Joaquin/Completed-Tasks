document.getElementById('campeon').addEventListener('submit', (e) => {
    e.preventDefault();

    const championshipDate = new Date(2022, 10, 18);

    const currentDate = new Date();
    
    const timeDiff = currentDate.getTime() - championshipDate.getTime();
    const daysPassed = Math.floor(timeDiff / (1000 * 3600 * 24));

    document.getElementById('resultado-campeonato').innerText = `Han pasado ${daysPassed} días desde el campeonato.`;
});