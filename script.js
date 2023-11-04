const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

document.getElementById('first-slider-nav').addEventListener('click', function() {
    slides[currentSlide].classList.remove('current');
    currentSlide = 0;
    slides[currentSlide].classList.add('current');
});

document.getElementById('second-slider-nav').addEventListener('click', function() {
    slides[currentSlide].classList.remove('current');
    currentSlide = 1;
    slides[currentSlide].classList.add('current');
});

document.getElementById('third-slider-nav').addEventListener('click', function() {
    slides[currentSlide].classList.remove('current');
    currentSlide = 2;
    slides[currentSlide].classList.add('current');
});

document.getElementById('forth-slider-nav').addEventListener('click', function() {
    slides[currentSlide].classList.remove('current');
    currentSlide = 3;
    slides[currentSlide].classList.add('current');
});

document.getElementById('backToTop').addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});