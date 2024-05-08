const bars = document.querySelector(".bar"),
close = document.querySelector(".close"),
menu = document.querySelector(".menu");

bars.addEventListener("click", () => {
    menu.classList.add("active");
    gsap.from(".menu", {
        opacity: 0,
        duration: .3
    })

    gsap.from(".menu ul", {
        opacity: 0,
        x: -300
    })
});

close.addEventListener("click", () => {
    menu.classList.remove("active")
});

function animateContent(selector) {
    selector.forEach((selector) => {
        gsap.to(selector, {
            y: 30,
            duration: 0.1,
            opacity: 1,
            delay: 0.2,
            stagger: 0.2,
            ease: "power2.out",
        });
    });
}

function scrollTirggerAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 80%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            y: 0,
            duration: 1,
            opacity: 1,
        });
    })
}

function swipeAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 100%",
            scrub: 3,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            x: 0,
            duration: 1,
            opacity:1,
        });
    });
}

function galleryAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 100%",
            end: "bottom 100%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            y: 0,
            opacity: 1,
            duration: 1,
        });
    });
}
// Show popup when user scrolls to footer section
window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    var popup = document.getElementById('popup');
    if (isInViewport(footer)) {
        popup.style.display = 'block';
        document.getElementById('special-offer').classList.add('special-offer');
    } else {
        popup.style.display = 'none';
        document.getElementById('special-offer').classList.remove('special-offer');
    }
});

// Close popup when close button is clicked
document.querySelector('.close-popup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('special-offer').classList.remove('special-offer');
});

// Check if an element is in the viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener("DOMContentLoaded", function() {
    const scrollUpButton = document.getElementById("scroll-up-btn");
    const scrollIcon = document.getElementById("scroll-icon");
    const navbarSection = document.getElementById("navbar-section");
    const footerSection = document.getElementById("footer-section");

    // Function to toggle scroll-up button icon based on scroll position
    function toggleScrollIcon() {
        const scrollPosition = window.pageYOffset;
        const navbarOffset = navbarSection.offsetTop;
        const footerOffset = footerSection.offsetTop;

        if (scrollPosition < navbarOffset) {
            scrollIcon.classList.remove("fa-arrow-down");
            scrollIcon.classList.add("fa-arrow-up");
        } else if (scrollPosition > footerOffset) {
            scrollIcon.classList.remove("fa-arrow-up");
            scrollIcon.classList.add("fa-arrow-down");
        } else {
            scrollIcon.classList.remove("fa-arrow-down");
            scrollIcon.classList.add("fa-arrow-up");
        }
    }

    // Show the button when scrolling down
    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 100) {
            scrollUpButton.style.display = "block";
            toggleScrollIcon();
        } else {
            scrollUpButton.style.display = "none";
        }
    });

    // Smooth scrolling to navbar section when the button is clicked
    scrollUpButton.addEventListener("click", function(e) {
        e.preventDefault();
        navbarSection.scrollIntoView({ behavior: "smooth" });
    });
});

animateContent([".home .content h5, .home .content h1, .home .content p, .home .content .search"]);

scrollTirggerAnimation(".travel", [".travel .box1", ".travel .box2", ".travel .box3"]);

scrollTirggerAnimation(".feedback .container", [".feedback .label", ".feedback .heading", ".feedback .paragraph"]);

scrollTirggerAnimation(".article", [".article .label", ".article .heading"]);

swipeAnimation(".destinations", [".destinations .heading", ".destinations .content"])

swipeAnimation(".article", [".article .latest-article", ".article .box1", ".article .box2", ".article .box3", ".article .box4"])

galleryAnimation(".destinations .gallery", [".destinations .gallery .box1",".destinations .gallery .box2",".destinations .gallery .box3",".destinations .gallery .box4",".destinations .gallery .box5"])

galleryAnimation(".featured .gallery", [".featured .gallery .box1",".featured .gallery .box2",".featured .gallery .box3",".featured .gallery .box4"])

galleryAnimation(".feedback .voices", [".feedback .voices .box1",".feedback .voices .box2",".feedback .voices .box3",".feedback .voices .box4",".feedback .voices .box5",".feedback .voices .box6"])

