document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return; 
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            let startTime = null;

            
            const duration = 800; 

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                
                
                const run = ease(timeElapsed, startPosition, distance, duration);

                window.scrollTo(0, run);

                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    
    
    const learnMoreBtns = document.querySelectorAll('.learn-more-btn');
    
    learnMoreBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); 
            
            const panel = btn.closest('.topic-tile').querySelector('.details-panel');
            panel.classList.add('is-active'); 
        });
    });

    const closeBtns = document.querySelectorAll('.close-btn');
    
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const panel = btn.closest('.details-panel');
            panel.classList.remove('is-active'); 
        });
    });
});
    
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu-overlay');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click',() => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');

        const menuLabel = document.querySelector ('.menu-label');
        if (hamburger.classList.contains ('active')) {
            menuLabel.textContent = 'Close';
            document.body.style.overflow = '';
        } else {
            menuLabel.textContent = "Menu";
            document.body.style.overflow = '';
        }
        });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            const menuLabel = document.querySelector('.menu-label');
            if (menuLabel) menuLabel.textContent = "Menu";
            document.body.style.overflow = '';
        });
    });
}

doc