// Numbers---------------------

function startRollingNumbers() {
    document.querySelectorAll(".roll-number").forEach((el) => {
        let finalValue = Math.floor(Math.random() * 900) + 100; // -------Create 3 digit random number
        let currentValue = 0;
        let interval = setInterval(() => {
            currentValue += Math.floor(Math.random() * 20) + 10; //-- Random increase
            if (currentValue >= finalValue) {
                clearInterval(interval);
                el.textContent = finalValue; // ----Stop at final number
            } else {
                el.textContent = currentValue;
            }
        }, 50);
    });
}

// chek when the section is in view
document.addEventListener("scroll", function () {
    let section = document.querySelector(".rolling-section");
    let sectionPos = section.getBoundingClientRect().top;
    if (sectionPos < window.innerHeight * 0.75) {
        startRollingNumbers();
    }
});


// Testimonial----------------

let currentIndex = 0;

    function updateCarousel() {
        document.querySelector('.carousel-container').style.transform = `translateX(${-currentIndex * 50}%)`; //make slide move 
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % 4; //returns the slide to 0
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + 4) % 4; //returns the slide to 0
        updateCarousel();
    }

    // Auto-slide every 3 seconds
    // setInterval(nextSlide, 3000);
