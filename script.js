// document.addEventListener('DOMContentLoaded', function () {
//     // Dark mode toggle
//     const darkModeToggle = document.getElementById('dark-mode-toggle');
//     const body = document.body;

//     darkModeToggle.addEventListener('click', function () {
//         body.classList.toggle('dark-mode');
//         updateDarkModeIcon();
//     });

//     function updateDarkModeIcon() {
//         const icon = darkModeToggle.querySelector('i');
//         if (body.classList.contains('dark-mode')) {
//             icon.classList.remove('fa-moon');
//             icon.classList.add('fa-sun');
//         } else {
//             icon.classList.remove('fa-sun');
//             icon.classList.add('fa-moon');
//         }
//     }

//     // Mobile menu toggle
//     const nav = document.querySelector('nav ul');
//     const menuToggle = document.createElement('button');
//     menuToggle.innerHTML = '&#9776;';
//     menuToggle.classList.add('menu-toggle');
//     document.querySelector('header').insertBefore(menuToggle, nav);

//     menuToggle.addEventListener('click', function () {
//         nav.classList.toggle('show');
//     });

//     // Smooth scrolling for navigation links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             document.querySelector(this.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });

//     // Initialize Google Map
//     function initMap() {
//         const workshopLocation = { lat: 40.7128, lng: -74.0060 }; // Replace with your actual coordinates
//         const map = new google.maps.Map(document.getElementById('map'), {
//             zoom: 15,
//             center: workshopLocation,
//         });
//         const marker = new google.maps.Marker({
//             position: workshopLocation,
//             map: map,
//             title: 'Patel Cars Workshop'
//         });
//     }

//     // Call initMap when the Google Maps API is loaded
//     if (typeof google !== 'undefined') {
//         google.maps.event.addDomListener(window, 'load', initMap);
//     }

//     // Animate service cards on scroll
//     const serviceCards = document.querySelectorAll('.service-card');
//     const animateOnScroll = (entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('animate');
//                 observer.unobserve(entry.target);
//             }
//         });
//     };

//     const observer = new IntersectionObserver(animateOnScroll, {
//         root: null,
//         threshold: 0.1,
//     });

//     serviceCards.forEach(card => {
//         observer.observe(card);
//     });

//     // Animate hero content
//     const heroContent = document.querySelector('.hero-content');
//     heroContent.style.opacity = '0';
//     heroContent.style.transform = 'translateY(50px)';

//     setTimeout(() => {
//         heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
//         heroContent.style.opacity = '1';
//         heroContent.style.transform = 'translateY(0)';
//     }, 500);

//     // Animate gallery images on hover
//     const galleryImages = document.querySelectorAll('.gallery-grid img');
//     galleryImages.forEach(img => {
//         img.addEventListener('mouseover', () => {
//             img.style.transition = 'transform 0.3s ease, filter 0.3s ease';
//             img.style.transform = 'scale(1.05)';
//             img.style.filter = 'brightness(1.2)';
//         });
//         img.addEventListener('mouseout', () => {
//             img.style.transform = 'scale(1)';
//             img.style.filter = 'brightness(1)';
//         });
//     });

//     // Show preview images on hover over service cards
//     serviceCards.forEach(card => {
//         card.addEventListener('mouseover', function () {
//             const imagePath = this.getAttribute('data-image');
//             const previewImage = document.createElement('img');
//             previewImage.src = imagePath;
//             previewImage.classList.add('preview-image');
//             document.body.appendChild(previewImage);
//             const cardRect = this.getBoundingClientRect();
//             previewImage.style.top = `${cardRect.bottom + window.scrollY}px`;
//             previewImage.style.left = `${cardRect.left + window.scrollX}px`;
//         });

//         card.addEventListener('mouseleave', function () {
//             const image = document.querySelector('.preview-image');
//             if (image) {
//                 image.remove();
//             }
//         });
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        updateDarkModeIcon();
    });

    function updateDarkModeIcon() {
        const icon = darkModeToggle.querySelector('i');
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // Mobile menu toggle
    const nav = document.querySelector('nav ul');
    const menuToggle = document.createElement('button');
    menuToggle.innerHTML = '&#9776;';
    menuToggle.classList.add('menu-toggle');
    document.querySelector('header').insertBefore(menuToggle, nav);

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('show');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // ======== REMOVE Google Maps INIT FUNCTION ========
    // function initMap() { ... }  
    // =================================================

    // ======== ADD Leaflet.js Map Initialization ========
    var map = L.map('map').setView([28.4595, 77.0266], 15); // Gurgaon Coordinates

    // Add OpenStreetMap Layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Add Marker
    L.marker([28.4595, 77.0266]).addTo(map)
        .bindPopup('Patel Cars, Gurgaon')
        .openPopup();
    // ===================================================

    // Animate service cards on scroll
    const serviceCards = document.querySelectorAll('.service-card');
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, {
        root: null,
        threshold: 0.1,
    });

    serviceCards.forEach(card => {
        observer.observe(card);
    });

    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(50px)';

    setTimeout(() => {
        heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 500);

    // Animate gallery images on hover
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    galleryImages.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transition = 'transform 0.3s ease, filter 0.3s ease';
            img.style.transform = 'scale(1.05)';
            img.style.filter = 'brightness(1.2)';
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
            img.style.filter = 'brightness(1)';
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards.forEach(card => {
        const hoverImageSrc = card.getAttribute("data-hover-image");

        if (hoverImageSrc) {
            const hoverImage = document.createElement("img");
            hoverImage.src = hoverImageSrc;
            hoverImage.classList.add("hover-image");
            card.appendChild(hoverImage);
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.createElement("button");
    menuToggle.innerHTML = "&#9776;";
    menuToggle.classList.add("menu-toggle");
    document.querySelector("header").appendChild(menuToggle);

    const nav = document.querySelector("nav ul");
    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("show");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.createElement("button");
    menuToggle.innerHTML = "&#9776;";
    menuToggle.classList.add("menu-toggle");
    document.querySelector("header").appendChild(menuToggle);

    const nav = document.querySelector("nav ul");
    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("show");
        menuToggle.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.createElement("button");
    menuToggle.innerHTML = "&#9776;"; // Hamburger icon
    menuToggle.classList.add("menu-toggle");

    // Append menu button only if screen is small
    if (window.innerWidth <= 768) {
        document.querySelector("header").appendChild(menuToggle);
    }

    const nav = document.querySelector("nav ul");
    
    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("show");
        menuToggle.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.createElement("button");
    menuToggle.innerHTML = "&#9776;"; // Hamburger icon
    menuToggle.classList.add("menu-toggle");

    const header = document.querySelector("header");
    const nav = document.querySelector("nav ul");

    if (window.innerWidth <= 768) {
        header.insertBefore(menuToggle, nav);
        nav.classList.add("nav-links"); // Add class for styling
    }

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("show");
    });
});


