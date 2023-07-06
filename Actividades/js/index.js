const nav = document.querySelector('.nav');
const listElements = document.querySelectorAll('.list__button--click');

nav.addEventListener('mouseleave', () => {
    const activeButton = document.querySelector('.list__button--click.arrow');
    if (activeButton) {
        activeButton.classList.remove('arrow');
        activeButton.nextElementSibling.style.height = '0';
    }
});

listElements.forEach(listElement => {
    listElement.addEventListener('click', () => {
        const activeButton = document.querySelector('.list__button--click.arrow');
        if (activeButton && activeButton !== listElement) {
            activeButton.classList.remove('arrow');
            activeButton.nextElementSibling.style.height = '0';
        }

        listElement.classList.toggle('arrow');

        const height = listElement.nextElementSibling.clientHeight === 0 ? listElement.nextElementSibling.scrollHeight : 0;
        listElement.nextElementSibling.style.height = `${height}px`;
    });
});

document.querySelectorAll('.list__inside').forEach((button, index) => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.article').forEach((article, articleIndex) => {
            if (index === articleIndex) {
                article.classList.remove('desactive');
            }
            if (index !== articleIndex) {
                article.classList.add('desactive');
            }
        });
    });
});