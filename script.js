const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

let lastScrollY = window.scrollY;

/* ================================
   HEADER SCROLL BEHAVIOR
================================ */
window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    // At very top → original black header
    if (currentScroll <= 10) {
        navbar.classList.remove("nav-hidden");
        navbar.classList.remove("nav-white");
        navbar.classList.remove("nav-fade");
    }

    // Scrolling down
    else if (currentScroll > lastScrollY) {
        navbar.classList.add("nav-fade");
        navbar.classList.add("nav-white");

        setTimeout(() => {
            navbar.classList.add("nav-hidden");
        }, 150);
    }

    // Scrolling up
    else {
        navbar.classList.remove("nav-hidden");
        navbar.classList.add("nav-white");
        navbar.classList.remove("nav-fade");
    }

    lastScrollY = currentScroll;
});

/* ================================
   MOBILE MENU TOGGLE
================================ */
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* ================================
   SMOOTH SCROLL (NAV LINKS)
================================ */
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        navLinks.classList.remove("active");

        document
            .querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

/* ================================
   SCROLL REVEAL ANIMATION
================================ */
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.2 }
);

document.querySelectorAll(".fade-slide").forEach(el => {
    observer.observe(el);
});

/* ================================
   CONTACT FORM (SAFE)
================================ */
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

if (form) {
    form.addEventListener("submit", async e => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        msg.textContent = "";
        msg.style.textAlign = "center";
        msg.style.marginTop = "10px";

        if (!name || !email || !message) {
            msg.textContent = "Please fill all fields";
            msg.style.color = "red";
            return;
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message })
            });

            if (!res.ok) throw new Error();

            msg.textContent = "Message sent successfully";
            msg.style.color = "green";
            form.reset();
        } catch {
            msg.textContent = "Server error. Try again later.";
            msg.style.color = "red";
        }
    });
}
