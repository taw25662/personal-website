// Script for the navbar

document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    const heroElement = document.getElementById('heroElement');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        const heroHeight = heroElement.offsetHeight;

        if (currentScroll <= heroHeight) {
            navbar.style.top = '0';
        } else if (currentScroll > lastScrollTop) {
            navbar.style.top = '-100px'; 
        } else {
            navbar.style.top = '0'; 
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
});

// Script for the toggle button for smaller screen sizes

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const hiddenMenu = document.querySelector('.hidden-menu');
    const overlay = document.querySelector('.overlay');
    const menuLinks = document.querySelectorAll('.hidden-menu a'); 

    
    menuToggle.addEventListener('click', function() {
        hiddenMenu.classList.toggle('active');
        overlay.classList.toggle('active');
    });
    
    overlay.addEventListener('click', function() {
        hiddenMenu.classList.remove('active');
        overlay.classList.remove('active');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            hiddenMenu.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
});

// Initial bounce on page load
document.addEventListener('DOMContentLoaded', () => {
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.classList.add('bounce');
            setTimeout(() => {
                letter.classList.remove('bounce');
            }, 500); 
        }, index * 50); 
    });
});

// Script to initiate the bounce effect on mobile with touch
document.addEventListener("DOMContentLoaded", function() {
    const letters = document.querySelectorAll('.letters');
  
    letters.forEach(letter => {
      letter.addEventListener('touchstart', () => {
        letter.classList.add('bounce');
      });
  
      letter.addEventListener('touchmove', () => {
        letter.classList.add('bounce');
      });
  
      letter.addEventListener('touchend', () => {
        setTimeout(() => {
          letter.classList.remove('bounce');
        }, 1000); 
      });
    });
  });
  






