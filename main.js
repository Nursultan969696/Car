document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const slides = document.querySelectorAll('.slider img');
    let currentSlide = 0;

    // Toggle menu on small screens
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Function to show the current slide
    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    };

    // Show the first slide initially
    showSlide(currentSlide);

    // Automatically change slides every 3 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 3000);
});
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const slides = document.querySelectorAll('.slider img');
    let currentSlide = 0;

    // Toggle menu on small screens
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Function to show the current slide
    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    };

    // Show the first slide initially
    showSlide(currentSlide);

    // Automatically change slides every 3 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 3000);
});
