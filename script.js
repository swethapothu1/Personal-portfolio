// Cursor followers and floating elements
document.addEventListener('DOMContentLoaded', function() {
    const cursorFollower = document.querySelector('.cursor-follower');
    const cursorFollower2 = document.querySelector('.cursor-follower-2');
    const floatingBlue = document.querySelector('.floating-blue');
    const floatingGreen = document.querySelector('.floating-green');
    const floatingPink = document.querySelector('.floating-pink');
    const floatingOrange = document.querySelector('.floating-orange');
    const floatingPurple = document.querySelector('.floating-purple');
    
    const elements = [cursorFollower, cursorFollower2, floatingBlue, floatingGreen, floatingPink, floatingOrange, floatingPurple];
    elements.forEach(el => {
        if (el) { 
            el.style.display = 'block'; 
            el.style.transform = 'translate(50px, 50px)'; 
        }
    });
    
    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX; 
        mouseY = e.clientY;
        
        if (cursorFollower) { 
            cursorFollower.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px)`;
        }
        if (cursorFollower2) { 
            cursorFollower2.style.transform = `translate(${mouseX - 7.5}px, ${mouseY - 7.5}px)`;
        }
        
        setTimeout(() => { 
            if (floatingBlue) { 
                floatingBlue.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`; 
                floatingBlue.style.opacity = '0.6';
            }
        }, 100);
        
        setTimeout(() => { 
            if (floatingGreen) { 
                floatingGreen.style.transform = `translate(${mouseX - 3.5}px, ${mouseY - 3.5}px)`; 
                floatingGreen.style.opacity = '0.5';
            }
        }, 250);
        
        setTimeout(() => { 
            if (floatingPink) { 
                floatingPink.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`; 
                floatingPink.style.opacity = '0.4';
            }
        }, 400);
        
        setTimeout(() => { 
            if (floatingOrange) { 
                floatingOrange.style.transform = `translate(${mouseX - 3.5}px, ${mouseY - 3.5}px)`; 
                floatingOrange.style.opacity = '0.5';
            }
        }, 150);
        
        setTimeout(() => { 
            if (floatingPurple) { 
                floatingPurple.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`; 
                floatingPurple.style.opacity = '0.4';
            }
        }, 350);
    });
});

// Mobile menu and navbar scroll effect
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
}

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 100) { 
            navbar.classList.add('scrolled'); 
        } else { 
            navbar.classList.remove('scrolled'); 
        }
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            if (navLinks) { navLinks.classList.remove('active'); }
            if (mobileMenuBtn) { mobileMenuBtn.textContent = '☰'; }
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Fade-in scroll animations
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { 
        if (entry.isIntersecting) { 
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => { observer.observe(el); });

// Hover shimmer effect
const addShimmerEffect = (element) => {
    element.addEventListener('mouseenter', () => {
        element.style.boxShadow = '0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.4)';
        element.style.borderColor = 'rgba(59, 130, 246, 1)';
    });
    element.addEventListener('mouseleave', () => {
        element.style.boxShadow = '';
        element.style.borderColor = '';
    });
};

document.querySelectorAll('.project-card, .cert-card, .contact-item, .skill-card, .cta-button').forEach(addShimmerEffect);

// Close mobile menu on outside click
document.addEventListener('click', (e) => {
    if (navLinks && mobileMenuBtn && !e.target.closest('nav') && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenuBtn.textContent = '☰';
    }
});