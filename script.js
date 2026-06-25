// Artist Data for scrolling marquee
const marqueeArtists = [
    {
        name: "Luna James",
        genre: "R&B / Soul",
        image: "images/artists/aaa/a1.jpg",
        social: {
            instagram: "#",
            spotify: "#",
            youtube: "#"
        }
    },
    {
        name: "The Resonance Collective",
        genre: "Alternative Rock",
        image: "images/artists/aaa/a2.png",
        social: {
            instagram: "#",
            spotify: "#",
            youtube: "#"
        }
    },
    {
        name: "DJ Quantum",
        genre: "Electronic",
        image: "images/artists/aaa/a3.png",
        social: {
            instagram: "#",
            spotify: "#",
            soundcloud: "#"
        }
    },
    {
        name: "Aria Mitchell",
        genre: "Pop",
        image: "images/artists/aaa/a4.png",
        social: {
            instagram: "#",
            spotify: "#",
            youtube: "#"
        }
    },
    {
        name: "The Woodland Collective",
        genre: "Folk / Indie",
        image: "images/artists/aaa/a5.png",
        social: {
            instagram: "#",
            spotify: "#",
            bandcamp: "#"
        }
    },
    {
        name: "Marcus Lee",
        genre: "Hip Hop",
        image: "images/artists/aaa/a6.png",
        social: {
            instagram: "#",
            spotify: "#",
            soundcloud: "#"
        }
    },
    {
        name: "Electro Syndicate",
        genre: "Electronic / Dance",
        image: "images/artists/aaa/a7.png",
        social: {
            instagram: "#",
            spotify: "#",
            soundcloud: "#"
        }
    },
    {
        name: "Skylar Davis",
        genre: "Singer-Songwriter",
        image: "images/artists/aaa/a8.png",
        social: {
            instagram: "#",
            spotify: "#",
            youtube: "#"
        }
    },
    {
        name: "Skylar Davis",
        genre: "Singer-Songwriter",
        image: "images/artists/aaa/a9.png",
        social: {
            instagram: "#",
            spotify: "#",
            youtube: "#"
        }
    },
    {
        name: "Skylar Davis",
        genre: "Singer-Songwriter",
        image: "images/artists/aaa/a10.jpg",
        social: {
            instagram: "#",
            spotify: "#",
            youtube: "#"
        }
    },
    {
        name: "Skylar Davis",
        genre: "Singer-Songwriter",
        image: "images/artists/aaa/a11.png",
        social: {
            instagram: "#",
            spotify: "#",
            youtube: "#"
        }
    },
    {
        name: "Skylar Davis",
        genre: "Singer-Songwriter",
        image: "images/artists/aaa/a12.png",
        social: {
            instagram: "#",
            spotify: "#",
            youtube: "#"
        }
    },
    {
        name: "Skylar Davis",
        genre: "Singer-Songwriter",
        image: "images/artists/aaa/a13.png",
        social: {
            instagram: "#",
            spotify: "#",
            youtube: "#"
        }
    },
    {
        name: "Skylar Davis",
        genre: "Singer-Songwriter",
        image: "images/artists/aaa/a14.png",
        social: {
            instagram: "#",
            spotify: "#",
            youtube: "#"
        }
    },
    {
        name: "Skylar Davis",
        genre: "Singer-Songwriter",
        image: "images/artists/aaa/a15.png",
        social: {
            instagram: "#",
            spotify: "#",
            youtube: "#"
        }
    }
];

// Artists for grid display
const artists = [
    {
        name: "Aarya",
        image: "images/artists/aa1.jpg",
        social: {
            instagram: "https://www.instagram.com/aaryaraimedhi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
            spotify: "https://open.spotify.com/artist/2gWT951sSkMBAs8bptymjz",
            youtube: "https://www.youtube.com/channel/UCjBsGk2MT-WS6L1YHAooO3w"
        }
    },
    {
        name: "BANZ2FADED",
        image: "images/artists/aa2.jpg",
        social: {
            instagram: "https://www.instagram.com/banz2faded?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
            spotify: "https://open.spotify.com/artist/3JxrtXHsZCwFb61jgslKFT?si=UzO-hOruQs6LdByuNDVejQ",
            youtube: "https://music.youtube.com/channel/UCrLwdv7m21gU0Cq4lasS4Pw?si=6QEEkR8B7_05wACX"
        }
    }
];

// Initialize everything when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    populateArtistScroll();
    populateArtistsGrid();
    initScrollEffects();
    
    // Fix for iOS touch events
    addTouchSupport();
});

// Initialize Navigation
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-links li a');
    
    // Use touchstart for better responsiveness on iOS
    hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close menu when link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Update active links on scroll (throttled)
    let lastScrollTime = 0;
    window.addEventListener('scroll', function() {
        const now = Date.now();
        if (now - lastScrollTime < 50) return; // Throttle to 50ms
        lastScrollTime = now;
        
        updateActiveNavLink();
        updateNavBackground();
    });
    
    // Initial check for active link and nav background
    updateActiveNavLink();
    updateNavBackground();
}

// Update the active navigation link based on scroll position
function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 200;
    const sections = document.querySelectorAll('section, header');
    const links = document.querySelectorAll('.nav-links li a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionId = section.getAttribute('id');
        if (!sectionId) return;
        
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = sectionId;
        }
    });
    
    links.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Update navigation background on scroll
function updateNavBackground() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

// Populate scrolling artists in header
function populateArtistScroll() {
    const artistScroll = document.getElementById('artistScroll');
    if (!artistScroll) return;
    
    // Clear existing content (in case function is called multiple times)
    artistScroll.innerHTML = '';
    
    // Create 4 copies of the artists array for infinite scroll effect
    const duplicatedArtists = [...marqueeArtists, ...marqueeArtists, ...marqueeArtists, ...marqueeArtists];
    
    // Create and append image elements
    duplicatedArtists.forEach(artist => {
        const img = document.createElement('img');
        img.src = artist.image;
        img.alt = artist.name;
        img.loading = "lazy"; // Lazy load images for better performance
        artistScroll.appendChild(img);
    });
    
    // Set proper animation duration based on the number of images
    setMarqueeAnimationDuration(artistScroll, duplicatedArtists.length);
}

// Set the animation duration for the marquee
function setMarqueeAnimationDuration(element, itemCount) {
    // Base speed in seconds
    const speedPerItem = 1;
    const duration = itemCount * speedPerItem;
    
    // Set animation properties
    element.style.animationDuration = `${duration}s`;
    element.style.animationName = 'scrollLeft';
    element.style.animationTimingFunction = 'linear';
    element.style.animationIterationCount = 'infinite';
    
    // Force reflow
    void element.offsetWidth;
}

// Handle window resize for the marquee animation
window.addEventListener('resize', function() {
    const artistScroll = document.getElementById('artistScroll');
    if (!artistScroll) return;
    
    // Reset animation
    artistScroll.style.animation = 'none';
    
    // Force reflow
    void artistScroll.offsetWidth;
    
    // Reset animation duration
    const itemCount = artistScroll.children.length || (marqueeArtists.length * 4);
    setMarqueeAnimationDuration(artistScroll, itemCount);
});

// Populate Artists Grid
function populateArtistsGrid() {
    const artistsGrid = document.querySelector('.artists-grid');
    
    artists.forEach(artist => {
        // Create artist card
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card');
        
        // Artist image
        const img = document.createElement('img');
        img.src = artist.image;
        img.alt = artist.name;
        artistCard.appendChild(img);
        
        // Artist info
        const artistInfo = document.createElement('div');
        artistInfo.classList.add('artist-info');
        
        // Artist name
        const name = document.createElement('h3');
        name.textContent = artist.name;
        artistInfo.appendChild(name);
        
        // Artist social links
        const socialLinks = document.createElement('div');
        socialLinks.classList.add('artist-social');
        
        // Add social icons
        for (const [platform, url] of Object.entries(artist.social)) {
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('aria-label', platform);
            
            const icon = document.createElement('i');
            // Set appropriate icon class based on platform
            switch (platform) {
                case 'instagram':
                    icon.className = 'fab fa-instagram';
                    break;
                case 'spotify':
                    icon.className = 'fab fa-spotify';
                    break;
                case 'youtube':
                    icon.className = 'fab fa-youtube';
                    break;
                case 'soundcloud':
                    icon.className = 'fab fa-soundcloud';
                    break;
                case 'bandcamp':
                    icon.className = 'fab fa-bandcamp';
                    break;
                default:
                    icon.className = 'fab fa-music';
            }
            
            link.appendChild(icon);
            socialLinks.appendChild(link);
        }
        
        artistInfo.appendChild(socialLinks);
        artistCard.appendChild(artistInfo);
        
        // Add artist card to grid
        artistsGrid.appendChild(artistCard);
    });
}

// Create an artist card element
function createArtistCard(artist) {
    // Create artist card
    const artistCard = document.createElement('div');
    artistCard.classList.add('artist-card');
    
    // Artist image
    const img = document.createElement('img');
    img.src = artist.image;
    img.alt = artist.name;
    img.loading = "lazy";
    artistCard.appendChild(img);
    
    // Artist info
    const artistInfo = document.createElement('div');
    artistInfo.classList.add('artist-info');
    
    // Artist name
    const name = document.createElement('h3');
    name.textContent = artist.name;
    artistInfo.appendChild(name);
    
    // Social links
    const socialLinks = document.createElement('div');
    socialLinks.classList.add('artist-social');
    
    // Add social icons
    for (const [platform, url] of Object.entries(artist.social)) {
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('aria-label', platform);
        
        const icon = document.createElement('i');
        // Set appropriate icon class based on platform
        switch (platform) {
            case 'instagram':
                icon.className = 'fab fa-instagram';
                break;
            case 'spotify':
                icon.className = 'fab fa-spotify';
                break;
            case 'youtube':
                icon.className = 'fab fa-youtube';
                break;
            case 'soundcloud':
                icon.className = 'fab fa-soundcloud';
                break;
            case 'bandcamp':
                icon.className = 'fab fa-bandcamp';
                break;
            default:
                icon.className = 'fab fa-music';
        }
        
        link.appendChild(icon);
        socialLinks.appendChild(link);
    }
    
    artistInfo.appendChild(socialLinks);
    artistCard.appendChild(artistInfo);
    
    return artistCard;
}

// Initialize Scroll Effects with better performance
function initScrollEffects() {
    // Get elements to animate on scroll
    const animateElements = document.querySelectorAll('.service, .project, .artist-card, .stat');
    
    // Set initial styles
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Throttled scroll handler
    let lastRevealScrollTime = 0;
    function handleRevealScroll() {
        const now = Date.now();
        if (now - lastRevealScrollTime < 50) return; // Throttle to 50ms
        lastRevealScrollTime = now;
        
        revealElementsOnScroll();
    }
    
    // Reveal elements when they enter viewport
    function revealElementsOnScroll() {
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        
        animateElements.forEach(element => {
            const elementRect = element.getBoundingClientRect();
            const elementTop = elementRect.top + scrollTop;
            
            // Check if element is in viewport
            if (scrollTop + windowHeight > elementTop + 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleRevealScroll);
    
    // Check on initial load
    revealElementsOnScroll();
}

// Projects slider functionality - optimized for better performance and iOS compatibility
function scrollSlider(direction) {
    const slider = document.getElementById('projectsSlider');
    if (!slider) return;
    
    // Get project width including margin
    const projectElement = slider.querySelector('.project');
    if (!projectElement) return;
    
    const projectStyle = window.getComputedStyle(projectElement);
    const projectWidth = projectElement.offsetWidth + 
                         parseInt(projectStyle.marginLeft) + 
                         parseInt(projectStyle.marginRight) || 300;
    
    // Scroll by exactly one project width
    slider.scrollBy({
        left: direction * projectWidth,
        behavior: 'smooth'
    });
}

// Fix for iOS touch events - make hover states work with taps
function addTouchSupport() {
    // Fix for project hover effects on iOS
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('touchstart', function() {
            // First remove any existing active class
            document.querySelectorAll('.project-active').forEach(p => {
                if (p !== project) {
                    p.classList.remove('project-active');
                }
            });
            // Toggle active class on the current project
            project.classList.toggle('project-active');
        }, { passive: true });
    });
    
    // Fix for artist card hover effects on iOS
    const artistCards = document.querySelectorAll('.artist-card');
    artistCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            // First remove any existing active class
            document.querySelectorAll('.artist-card-active').forEach(c => {
                if (c !== card) {
                    c.classList.remove('artist-card-active');
                }
            });
            // Toggle active class on the current card
            card.classList.toggle('artist-card-active');
        }, { passive: true });
    });
}