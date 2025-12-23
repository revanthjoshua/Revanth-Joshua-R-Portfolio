/* ===== NAVBAR ELEMENTS ===== */
const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

let lastScrollY = window.scrollY;

/* ===== HEADER SCROLL BEHAVIOR ===== */
window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    // At top → original black navbar
    if (currentScroll <= 10) {
        navbar.classList.remove("white", "hidden");
    }
    // Scrolling down → turn white then hide
    else if (currentScroll > lastScrollY) {
        navbar.classList.add("white");

        setTimeout(() => {
            navbar.classList.add("hidden");
        }, 120);
    }
    // Scrolling up → show white navbar
    else {
        navbar.classList.remove("hidden");
        navbar.classList.add("white");
    }

    lastScrollY = currentScroll;
});

/* ===== MOBILE MENU TOGGLE ===== */
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

/* ===== SMOOTH SCROLL ===== */
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        if (navLinks) {
            navLinks.classList.remove("active");
        }

        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
