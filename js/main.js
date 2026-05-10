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

            // Simulate sending (replace with backend integration)
            contactForm.querySelector('button').disabled = true;
            contactForm.querySelector('button').textContent = 'Sending...';

            setTimeout(() => {
                alert('Thank you for your message, ' + data.name + '!');
                contactForm.reset();
                contactForm.querySelector('button').disabled = false;
                contactForm.querySelector('button').textContent = 'Send Message';
            }, 1200);
        });
    }

    // Graduation Slideshow (multiple images)
    const graduationImages = [
        'pictures/graduation.jpg',
        'pictures/graduation2.jpg', // Add more images as needed
        'pictures/graduation3.jpg',
        // Example: 'pictures/your-other-image.jpg'
    ];

    const gradImgElement = document.querySelector('.graduation-image img');
    if (gradImgElement && graduationImages.length > 1) {
        let current = 0;
        setInterval(() => {
            current = (current + 1) % graduationImages.length;
            gradImgElement.src = graduationImages[current];
        }, 2500); // Change image every 2.5 seconds
    }

    // Graduation Slider Animation
    let slideIndex = 0;
    function showSlides() {
        let slides = document.getElementsByClassName("slides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1;}
        if (slides.length > 0) {
            slides[slideIndex - 1].style.display = "block";
        }
        setTimeout(showSlides, 3000);
    }
    showSlides();

});
