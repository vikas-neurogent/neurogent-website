// Website Script for neurogent.ai
class WebsiteController {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.mobileNavToggle = document.getElementById('mobileNavToggle');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.setupSmoothScroll();
        this.setupScrollEffects();
        this.setupMobileNav();
        this.setupIntersectionObserver();
        this.addInteractiveEffects();
    }
    
    bindEvents() {
        // Scroll event for navbar
        window.addEventListener('scroll', () => this.handleScroll());
        
        // Mobile nav toggle
        if (this.mobileNavToggle) {
            this.mobileNavToggle.addEventListener('click', () => this.toggleMobileNav());
        }
        
        // Close mobile nav on link click
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    this.closeMobileNav();
                }
            });
        });
        
        // Close mobile nav on outside click
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && 
                !this.navMenu.contains(e.target) && 
                !this.mobileNavToggle.contains(e.target)) {
                this.closeMobileNav();
            }
        });
        
        // Resize handler
        window.addEventListener('resize', () => this.handleResize());
    }
    
    handleScroll() {
        const scrollY = window.scrollY;
        
        // Add scrolled class to navbar
        if (scrollY > 50) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        this.updateActiveNavLink();
    }
    
    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    setupSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                // Only handle hash links
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetSection = document.getElementById(targetId);
                    
                    if (targetSection) {
                        const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
                    }
                }
            });
        });
    }
    
    setupScrollEffects() {
        // Add scroll-based animations to elements
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.problem-item, .diff-item, .capability-section, .pillar, .preview-item, .process-step, .case-study-card');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                } else {
                    element.style.opacity = '0';
                    element.style.transform = 'translateY(30px)';
                }
            });
        };
        
        // Set initial state
        const elements = document.querySelectorAll('.problem-item, .diff-item, .capability-section, .pillar, .preview-item, .process-step, .case-study-card');
        elements.forEach(element => {
            element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        });
        
        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll(); // Run on load
    }
    
    setupIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '-50px 0px -50px 0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add animation class with delay to prevent overlap
                    setTimeout(() => {
                        entry.target.classList.add('animate');
                        entry.target.classList.add('visible');
                    }, 100);
                    
                    // Add specific animations for different elements
                    if (entry.target.classList.contains('metric')) {
                        this.animateMetric(entry.target);
                    }
                } else {
                    // Remove animation class when out of view
                    entry.target.classList.remove('animate');
                }
            });
        }, options);
        
        // Observe elements
        const observeElements = document.querySelectorAll('.scroll-animate, .problem-item, .diff-item, .capability-section, .metric, .tech-item');
        observeElements.forEach(element => observer.observe(element));
    }
    
    animateMetric(element) {
        const valueElement = element.querySelector('.metric-value');
        if (valueElement) {
            const text = valueElement.textContent;
            // Add subtle animation
            valueElement.style.animation = 'pulse 0.5s ease-out';
        }
    }
    
    setupMobileNav() {
        // Mobile navigation is handled by toggleMobileNav
    }
    
    toggleMobileNav() {
        this.navMenu.classList.toggle('active');
        const icon = this.mobileNavToggle.querySelector('i');
        
        if (this.navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
    
    closeMobileNav() {
        this.navMenu.classList.remove('active');
        const icon = this.mobileNavToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
    
    handleResize() {
        // Close mobile nav if window is resized to desktop
        if (window.innerWidth > 768) {
            this.closeMobileNav();
        }
    }
    
    addInteractiveEffects() {
        // Add hover effects to metrics
        const metrics = document.querySelectorAll('.metric');
        metrics.forEach(metric => {
            metric.addEventListener('mouseenter', () => {
                metric.style.transform = 'scale(1.05)';
                metric.style.transition = 'transform 0.3s ease';
            });
            
            metric.addEventListener('mouseleave', () => {
                metric.style.transform = 'scale(1)';
            });
        });
        
        // Add click effects to cards
        const cards = document.querySelectorAll('.problem-item, .diff-item, .capability-section, .pillar, .preview-item');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                card.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    card.style.transform = 'scale(1)';
                }, 150);
            });
        });
        
        // Animate AI icons
        const aiIcons = document.querySelectorAll('.ai-icons i');
        aiIcons.forEach((icon, index) => {
            icon.style.animation = `bounce 2s ease-in-out infinite ${index * 0.2}s`;
        });
    }
}

// Utility functions
class WebsiteUtils {
    static addParallaxEffect() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero-section');
            
            parallaxElements.forEach(element => {
                const speed = 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
    
    static addCounterAnimation() {
        const counters = document.querySelectorAll('.metric-value');
        
        counters.forEach(counter => {
            const updateCounter = () => {
                const target = counter.getAttribute('data-target');
                if (!target) return;
                
                const count = +counter.innerText.replace(/[^0-9]/g, '');
                const increment = target / 200;
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCounter, 1);
                } else {
                    counter.innerText = target;
                }
            };
            
            // Trigger when visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(counter);
        });
    }
    
    static enableAccessibility() {
        // Add ARIA labels
        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section, index) => {
            section.setAttribute('role', 'region');
            section.setAttribute('aria-label', section.id.replace('-', ' '));
        });
        
        // Improve keyboard navigation
        const focusableElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
        focusableElements.forEach(element => {
            element.addEventListener('focus', () => {
                element.style.outline = '2px solid var(--primary-cyan)';
                element.style.outlineOffset = '2px';
            });
            
            element.addEventListener('blur', () => {
                element.style.outline = '';
                element.style.outlineOffset = '';
            });
        });
    }
    
    static addLoadingAnimation() {
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
            
            // Animate hero section elements sequentially
            const heroElements = document.querySelectorAll('.hero-logo-container, .hero-title, .hero-subtitle, .hero-decoration, .hero-cta');
            heroElements.forEach((element, index) => {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 100);
            });
        });
    }
    
    static addScrollToTop() {
        // Create scroll to top button
        const scrollBtn = document.createElement('button');
        scrollBtn.className = 'scroll-to-top';
        scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollBtn.setAttribute('aria-label', 'Scroll to top');
        document.body.appendChild(scrollBtn);
        
        // Show/hide button based on scroll
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });
        
        // Scroll to top on click
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Initialize website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main website controller
    const website = new WebsiteController();
    
    // Add utility features
    WebsiteUtils.addParallaxEffect();
    WebsiteUtils.addCounterAnimation();
    WebsiteUtils.enableAccessibility();
    WebsiteUtils.addLoadingAnimation();
    WebsiteUtils.addScrollToTop();
    
    // Make website controller globally available
    window.website = website;
    
    // Log website ready
    console.log('neurogent.ai Website Ready! 🚀');
});

// Add CSS for scroll to top button
const scrollTopStyles = document.createElement('style');
scrollTopStyles.textContent = `
    .scroll-to-top {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: var(--gradient-neon);
        border: none;
        border-radius: 50%;
        color: var(--text-primary);
        font-size: 1.25rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: var(--shadow-neon);
    }
    
    .scroll-to-top.visible {
        opacity: 1;
        visibility: visible;
    }
    
    .scroll-to-top:hover {
        transform: translateY(-3px);
        box-shadow: var(--shadow-neon), 0 0 30px rgba(0, 212, 255, 0.5);
    }
    
    @media (max-width: 768px) {
        .scroll-to-top {
            bottom: 1rem;
            right: 1rem;
            width: 44px;
            height: 44px;
            font-size: 1rem;
        }
    }
`;
document.head.appendChild(scrollTopStyles);

// Performance optimization
function optimizePerformance() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Optimize animations for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
        document.body.classList.add('reduce-motion');
        
        // Disable animations
        const style = document.createElement('style');
        style.textContent = `
            .reduce-motion * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Set current year in footer
function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Initialize on DOM load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setCurrentYear);
} else {
    setCurrentYear();
}

// Call performance optimization
optimizePerformance();

// Export for module systems (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { WebsiteController, WebsiteUtils };
}
