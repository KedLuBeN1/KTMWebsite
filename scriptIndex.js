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
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const countdownTimer = (targetDate, elementId) => {
        const target = new Date(targetDate).getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = target - now;

            if (difference < 0) {
                clearInterval(timer);
                document.getElementById(elementId).innerHTML = "Odpočet skončil!";
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById(elementId).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;
        }, 1000);
    }

    const targetDate = "2023-12-24T00:00:00";
    countdownTimer(targetDate, "countdown-timer");
});
