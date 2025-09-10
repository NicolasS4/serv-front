// Animations Utility
function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .level-card, .portfolio-item, .hero-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
    
    // Add scroll-triggered animation class
    window.addEventListener('scroll', addScrollAnimation);
    
    function addScrollAnimation() {
        const elements = document.querySelectorAll('.service-card, .level-card, .hero-card');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            
            if (position < windowHeight - 100) {
                element.classList.add('animate-fade-in');
            }
        });
    }
    
    // Initial call to check elements in view
    addScrollAnimation();
}