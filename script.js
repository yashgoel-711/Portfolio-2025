document.addEventListener('DOMContentLoaded', function() {
    
    // 🔀 Section 1: Initialize AOS Animation Engine
    AOS.init({
        duration: 800,
        once: true,
        offset: 120,
        easing: 'ease-out-cubic'
    });

    // 🔀 Section 2: Mobile Slide-Out Menu Lifecycle Controller
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        navLinksItems.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        document.addEventListener('click', function(e) {
            if (!mobileMenuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // 🔀 Section 3: Fixed Header Scroll Detection Pipeline
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    }, { passive: true });

    // 🔀 Section 4: High-Performance GPU Parallax Interface Hook
    const heroImage = document.querySelector('.hero-image');
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        if (heroImage && scrolled < window.innerHeight) {
            heroImage.style.transform = `translateY(${scrolled * 0.15}px)`;
        }
    }, { passive: true });

    // 🔀 Section 5: Dynamic Text Subtitle Typographical Engine
    function typeWriter(element, text, speed = 40) {
        let characterIndex = 0;
        element.innerHTML = '';
        
        function type() {
            if (characterIndex < text.length) {
                element.innerHTML += text.charAt(characterIndex);
                characterIndex++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    const subtitleElement = document.querySelector('.hero .subtitle');
    if (subtitleElement) {
        const rawContentText = subtitleElement.textContent;
        setTimeout(() => {
            typeWriter(subtitleElement, rawContentText, 40);
        }, 800);
    }
});