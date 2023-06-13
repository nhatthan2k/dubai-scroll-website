const stars = document.querySelector('.stars');
const burjkhalifa = document.querySelector('.burjkhalifa');
const dubaitext = document.querySelector('.dubaitext');

window.addEventListener('scroll', () => {
    const value = window.scrollY

    dubaitext.style.left = value * -2 + 'px';
    stars.style.top = value * 1 + 'px';
    burjkhalifa.style.top = value * 1 + 'px';
})