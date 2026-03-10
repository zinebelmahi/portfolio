// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.style.display = 'none';
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe skill cards and project cards for animation
document.querySelectorAll('.skill-category, .project-card, .interest-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Animate section titles
document.querySelectorAll('.section-title').forEach(title => {
    title.style.opacity = '0';
    title.style.transform = 'translateY(20px)';
    title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(title);
});

// Scroll to top functionality
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.opacity = '1';
        backToTop.style.pointerEvents = 'auto';
    } else {
        backToTop.style.opacity = '0';
        backToTop.style.pointerEvents = 'none';
    }
});

backToTop.style.opacity = '0';
backToTop.style.transition = 'opacity 0.3s ease';

// Add active state to navigation links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Counter animation for numbers
function animateCounters() {
    const infoItems = document.querySelectorAll('.info-value');
    infoItems.forEach(item => {
        const text = item.textContent;
        if (!isNaN(text)) {
            const target = parseInt(text);
            let current = 0;
            const increment = target / 30;
            
            const counter = setInterval(() => {
                current += increment;
                if (current >= target) {
                    item.textContent = target;
                    clearInterval(counter);
                } else {
                    item.textContent = Math.floor(current);
                }
            }, 50);
        }
    });
}

// Trigger counter animation when about section is in view
const aboutSection = document.querySelector('.about');
let counted = false;

const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !counted) {
            animateCounters();
            counted = true;
        }
    });
}, { threshold: 0.5 });

aboutObserver.observe(aboutSection);

// Mobile responsive navigation
function handleResponsiveNav() {
    const navbar = document.querySelector('.navbar');
    if (window.innerWidth <= 768) {
        document.querySelector('.nav-links').style.display = 'none';
    } else {
        document.querySelector('.nav-links').style.display = 'flex';
        hamburger.classList.remove('active');
    }
}

window.addEventListener('resize', handleResponsiveNav);

// Add ripple effect to buttons
document.querySelectorAll('.btn, .social-icon').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Theme toggle (optional - dark mode)
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    handleResponsiveNav();
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navLinks.style.display = 'none';
    }
});

console.log('Portfolio loaded successfully! 🚀');
