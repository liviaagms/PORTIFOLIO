let index = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carrossel img');
    index += direction;

    if (index >= slides.length) {
        index = 0;
    } else if (index < 0) {
        index = slides.length - 1;
    }

    const carrossel = document.querySelector('.carrossel');
    carrossel.style.transform = `translateX(-${index * 100}%)`;
}
