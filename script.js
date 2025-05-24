// Menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Comments slider
        const commentsTrack = document.getElementById('commentsTrack');
        const navDots = document.querySelectorAll('.nav-dot');
        
        navDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                moveSlider(index);
                setActiveDot(index);
            });
        });

        function moveSlider(index) {
            commentsTrack.style.transform = `translateX(-${index * 100}%)`;
        }

        function setActiveDot(index) {
            navDots.forEach(dot => dot.classList.remove('active'));
            navDots[index].classList.add('active');
        }

        // Auto slider
        let currentSlide = 0;
        const totalSlides = navDots.length;

        setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            moveSlider(currentSlide);
            setActiveDot(currentSlide);
        }, 5000);

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });

        // Form submission
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Mesajınız göndərildi! Qısa müddətdə sizinlə əlaqə saxlayacağıq.');
                contactForm.reset();
            });
        }

        // Animation on scroll
        window.addEventListener('scroll', () => {
            const elements = document.querySelectorAll('.service-card, .portfolio-item, .comments-card, .pricing-card');
            
            elements.forEach(el => {
                const elementTop = el.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }
            });
        });

        // Initialize elements with starting animation state
        document.addEventListener('DOMContentLoaded', () => {
            const elements = document.querySelectorAll('.service-card, .portfolio-item, .comments-card, .pricing-card');
            
            elements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });

            // Trigger initial scroll check
            window.dispatchEvent(new Event('scroll'));
        });