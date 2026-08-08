let currentSlide = 0;

const track = document.getElementById("slideTrack");
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("sliderDots");

function createDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement("span");

        dot.classList.add("slider-dot");

        if (index === 0) {
            dot.classList.add("active");
        }

        dot.onclick = function () {
            goToSlide(index);
        };

        dotsContainer.appendChild(dot);
    });
}

function updateSlider() {
    track.style.transform =
        `translateX(-${currentSlide * 100}%)`;

    document.querySelectorAll(".slider-dot")
        .forEach((dot, index) => {
            dot.classList.toggle(
                "active",
                index === currentSlide
            );
        });
}

function nextSlide() {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    updateSlider();
}

function prevSlide() {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    updateSlider();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

createDots();

setInterval(nextSlide, 4000);