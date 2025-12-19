// Smooth scrolling
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Contact form validation
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Apply centering styles directly via JS
    msg.style.textAlign = "center";
    msg.style.fontWeight = "bold";
    msg.style.marginTop = "10px";

    if (
        name.value === "" ||
        email.value === "" ||
        message.value === ""
    ) {
        msg.textContent = "Please fill all fields";
        msg.style.color = "red";
    } else {
        msg.textContent = "Message sent successfully";
        msg.style.color = "green";
        form.addEventListener("submit", async function (e) {
    e.preventDefault();

    msg.style.textAlign = "center";
    msg.style.fontWeight = "bold";
    msg.style.marginTop = "10px";

    if (!name.value || !email.value || !message.value) {
        msg.textContent = "Please fill all fields";
        msg.style.color = "red";
        return;
    }

    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                message: message.value
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        msg.textContent = "Message sent successfully";
        msg.style.color = "green";
        form.reset();
    } catch (error) {
        msg.textContent = "Something went wrong. Try again.";
        msg.style.color = "red";
    }
});

    }
});

// Scroll animation
const animatedSections = document.querySelectorAll(".fade-slide");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

animatedSections.forEach(section => {
    observer.observe(section);
});
