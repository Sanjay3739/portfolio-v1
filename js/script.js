window.addEventListener('scroll', function () {

    const header = document.getElementById('header');

    if (window.scrollY > 50) {

        header.classList.add('scrolled');

    } else {

        header.classList.remove('scrolled');

    }

});

document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        const learnMoreBtn = card.querySelector('.learn-more');
        const closeBtn = card.querySelector('.close-details');
        const details = card.querySelector('.service-details');
        
        learnMoreBtn.addEventListener('click', () => {
            details.classList.add('active');
        });
        
        closeBtn.addEventListener('click', () => {
            details.classList.remove('active');
        });
    });
    
    // Animation on scroll
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.service-card, .section-header');
    animatedElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

function openSecondPage() {
    window.location.href = "Resume/resume.html";
  }