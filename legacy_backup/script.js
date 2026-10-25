document.addEventListener("DOMContentLoaded", () => {

    /* ===== NAVBAR + MOBILE MENU ===== */
    const navbar = document.querySelector(".navbar");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (!navbar || !navLinks) return;

    let lastScroll = window.scrollY;

    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;

        if (Math.abs(currentScroll - lastScroll) < 5) return;

        if (currentScroll <= 10) {
            navbar.classList.remove("white", "hidden");
        } else if (currentScroll > lastScroll) {
            navbar.classList.add("white", "hidden");
        } else {
            navbar.classList.remove("hidden");
            navbar.classList.add("white");
        }

        lastScroll = currentScroll;
    });

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", e => {
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                e.preventDefault();
                navLinks.classList.remove("active");
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    /* ===== CONTACT FORM ===== */
    const contactForm = document.getElementById("contactForm");
    const statusMsg = document.getElementById("formStatus");

    if (contactForm && statusMsg) {
        contactForm.addEventListener("submit", async e => {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            statusMsg.style.color = "#d32f2f";

            if (!name || !email || !message) {
                statusMsg.textContent = "Please fill all fields.";
                return;
            }

            try {
                const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, message })
                });

                if (res.ok) {
                    statusMsg.style.color = "#2e7d32";
                    statusMsg.textContent = "Message sent successfully.";
                    contactForm.reset();
                } else {
                    statusMsg.textContent = "Server error. Try again.";
                }
            } catch {
                statusMsg.textContent = "Network error.";
            }
        });
    }

    /* ===== SCROLL REVEAL ===== */
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

});
