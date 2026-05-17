// main.js

document.addEventListener('DOMContentLoaded', function () {

    // Smooth scroll for nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Contact form handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            const btn = contactForm.querySelector('button');
            btn.disabled = true;
            btn.textContent = 'Sending...';

            setTimeout(() => {
                alert('Thank you for your message, ' + data.name + '!');
                contactForm.reset();
                btn.disabled = false;
                btn.textContent = 'Send Message';
            }, 1200);
        });
    }

    // Graduation Slideshow
    let slideIndex = 0;
    function showSlides() {
        const slides = document.getElementsByClassName("slides");
        if (slides.length === 0) return;
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000);
    }
    showSlides();

});
