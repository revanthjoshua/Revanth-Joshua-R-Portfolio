const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    // At top → original black navbar
    if (currentScroll <= 10) {
        navbar.classList.remove("white", "hidden");
    }
    // Scrolling down → fade to white then hide
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

/* ===== MOBILE MENU ===== */
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* ===== SMOOTH SCROLL ===== */
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        navLinks.classList.remove("active");

        document.querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});
