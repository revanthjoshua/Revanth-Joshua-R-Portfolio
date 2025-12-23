/* ===== NAVBAR SCROLL EFFECT ===== */
const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll <= 10) {
        navbar.classList.remove("white", "hidden");
    } 
    else if (currentScroll > lastScrollY) {
        navbar.classList.add("white");
        navbar.classList.add("hidden");
    } 
    else {
    fetch("/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(res => res.json())
    .then(() => {
        statusMsg.style.color = "#2e7d32";
        statusMsg.textContent = "Message sent successfully.";
        contactForm.reset();
    })
    .catch(() => {
        statusMsg.style.color = "#d32f2f";
        statusMsg.textContent = "Something went wrong. Try again.";
    });
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

        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

/* ===== CONTACT FORM (NO REFRESH) ===== */
const contactForm = document.getElementById("contactForm");
const statusMsg = document.getElementById("formStatus");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        statusMsg.style.color = "#d32f2f";

        if (name === "" || email === "" || message === "") {
            statusMsg.textContent = "Please write all required fields.";
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            statusMsg.textContent = "Please enter a valid email address.";
        }
        else {
            statusMsg.style.color = "#2e7d32";
            statusMsg.textContent = "Message sent successfully.";
            contactForm.reset();
        }
    });
}
/* ===== SCROLL REVEAL (FIX FOR FADE-SLIDE) ===== */
const fadeElements = document.querySelectorAll(".fade-slide");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.15 }
);

fadeElements.forEach(el => observer.observe(el));
