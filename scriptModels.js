document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Use this script if you want some animation on the close or if you want to add more interactive features
document.querySelectorAll('.gallery a').forEach(a => {
    a.onclick = function() {
        document.querySelector(a.getAttribute('href')).style.display = 'block';
        return false;
    };
});

document.querySelectorAll('.lightbox').forEach(lightbox => {
    lightbox.onclick = function() {
        lightbox.style.display = 'none';
    };
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

