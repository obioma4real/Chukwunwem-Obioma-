window.addEventListener('load', () => {
    const splash = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    // Wait 5 seconds
    setTimeout(() => {
        // Fade out splash
        splash.style.transition = 'opacity 1s ease';
        splash.style.opacity = '0';

        // After fade-out, hide splash and show main content
        setTimeout(() => {
            splash.style.display = 'none';
            mainContent.style.display = 'block';
        }, 1000); // matches CSS transition duration
    }, 5000); // 5000ms = 5 seconds splash
});


// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // prevent default jump
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
// Highlight active nav link on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY || window.pageYOffset;

    sections.forEach(section => {
        const top = section.offsetTop - 100; // adjust offset
        const bottom = top + section.offsetHeight;

        const id = section.getAttribute('id');
        const navLink = document.querySelector(`nav a[href="#${id}"]`);

        if (scrollPos >= top && scrollPos < bottom) {
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    });
});
// Animate elements on scroll
const animateElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');

function checkAnimations() {
    const triggerBottom = window.innerHeight * 0.85;

    animateElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkAnimations);
window.addEventListener('load', checkAnimations);