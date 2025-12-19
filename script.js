// Smooth scrolling
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Scroll animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-slide").forEach(section => {
    observer.observe(section);
});

// Contact form
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", async e => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    msg.style.textAlign = "center";
    msg.style.marginTop = "10px";
    msg.style.fontWeight = "bold";

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
