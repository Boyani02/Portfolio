const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxes = document.querySelectorAll('.resume-box');

// Initialize first tab as active if none is active
if (!document.querySelector('.resume-list.active')) {
    resumeLists[0].classList.add('active');
    resumeBoxes[0].classList.add('active');
}

resumeLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        // Remove active class from all lists and boxes
        resumeLists.forEach(l => l.classList.remove('active'));
        resumeBoxes.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked list and corresponding box
        list.classList.add('active');
        resumeBoxes[idx].classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.navbar ul');

    function toggleMenu() {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    }

    menuToggle.addEventListener('click', toggleMenu);

    // Close mobile menu when clicking a link
    document.querySelectorAll('.navbar ul li a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Smooth Scrolling for Navigation
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update active link
                document.querySelectorAll('.navbar ul li a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

    // Highlight active section while scrolling
    function highlightNav() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navbar ul li a');
        
        let currentSection = '';
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNav);
    highlightNav(); // Initialize on load

    // Resume Tab Functionality
    const tabLists = document.querySelectorAll('.tab-list');
    const tabGrids = document.querySelectorAll('.tab-grid');

    tabLists.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Update active tab
            tabLists.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Show corresponding content
            tabGrids.forEach(grid => grid.classList.remove('active'));
            tabGrids[index].classList.add('active');
        });
    });

    // Portfolio Item Animation
    const portfolioItems = document.querySelectorAll('.portfolio-box');
    
    function animatePortfolioItems() {
        portfolioItems.forEach((item, index) => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (itemPosition < screenPosition) {
                item.style.animation = `fadeInUp 0.5s ease-out forwards ${index * 0.1}s`;
            }
        });
    }

    window.addEventListener('scroll', animatePortfolioItems);
    animatePortfolioItems(); // Initialize on load

    // Skill Bar Animation
    const skillBars = document.querySelectorAll('.skillbar-container .skills');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (barPosition < screenPosition) {
                bar.style.animationPlayState = 'running';
            }
        });
    }

    window.addEventListener('scroll', animateSkillBars);
    animateSkillBars(); // Initialize on load
});




