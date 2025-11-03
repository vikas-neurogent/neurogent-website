// Rotating Text Animation
const technologies = ['LangChain', 'Microsoft Autogen', 'AWS Bedrock', 'Google Vertex AI', 'CrewAI'];
let currentTechIndex = 0;
const rotatingTextElement = document.querySelector('.rotating-text');

function updateRotatingText() {
    if (!rotatingTextElement) return;
    
    // Fade out
    rotatingTextElement.classList.add('fade-out');
    
    setTimeout(() => {
        // Update text
        currentTechIndex = (currentTechIndex + 1) % technologies.length;
        rotatingTextElement.textContent = technologies[currentTechIndex];
        
        // Fade in
        rotatingTextElement.classList.remove('fade-out');
        rotatingTextElement.classList.add('fade-in');
        
        setTimeout(() => {
            rotatingTextElement.classList.remove('fade-in');
        }, 500);
    }, 500);
}

// Initialize with first technology
if (rotatingTextElement) {
    rotatingTextElement.textContent = technologies[0];
    // Start rotation after 2 seconds, then every 3 seconds
    setTimeout(() => {
        updateRotatingText();
        setInterval(updateRotatingText, 3000);
    }, 2000);
}

// Theme Toggle Functionality
const themeToggleButtons = document.querySelectorAll('.theme-toggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

// Toggle theme function
function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Add smooth transition
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
}

// Add click event to all theme toggle buttons
themeToggleButtons.forEach(button => {
    button.addEventListener('click', toggleTheme);
});

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const navbar = document.querySelector('.navbar');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if href is just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
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

// Observe all cards and sections
const observeElements = document.querySelectorAll('.feature-card, .use-case-card, .industry-card, .process-step');
observeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add hover effect to floating cards
const floatingCards = document.querySelectorAll('.floating-card');
floatingCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Track CTA clicks (optional - for analytics)
const ctaButtons = document.querySelectorAll('a[href*="calendar.app.google"]');
ctaButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('CTA clicked - Book consultation');
        // You can add analytics tracking here (Google Analytics, etc.)
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-visual');
    if (hero && window.innerWidth > 768) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all links
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.style.color = '';
            });
            
            // Add active class to current section link
            const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.style.color = 'var(--primary)';
            }
        }
    });
});

// Add ripple effect to buttons
document.querySelectorAll('.primary-button, .secondary-button, .cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple styles dynamically
const style = document.createElement('style');
style.textContent = `
    .primary-button, .secondary-button, .cta-button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        // Activate party mode
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);

// Use Case Tabs Functionality
const useCaseTabs = document.querySelectorAll('.use-case-tab');
const useCaseAgents = document.querySelectorAll('.use-case-agents');

useCaseTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        useCaseTabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Get the category from data attribute
        const category = tab.getAttribute('data-category');
        
        // Hide all agent sections
        useCaseAgents.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show the selected category
        const activeSection = document.querySelector(`.use-case-agents[data-category="${category}"]`);
        if (activeSection) {
            activeSection.classList.add('active');
        }
    });
});

// Industry Tabs Functionality
const industryTabs = document.querySelectorAll('.industry-tab');
const industryContents = document.querySelectorAll('.industry-content');

industryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        industryTabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Get the industry from data attribute
        const industry = tab.getAttribute('data-industry');
        
        // Hide all content sections
        industryContents.forEach(content => {
            content.classList.remove('active');
        });
        
        // Show the selected industry content
        const activeContent = document.querySelector(`.industry-content[data-industry="${industry}"]`);
        if (activeContent) {
            activeContent.classList.add('active');
        }
    });
});
