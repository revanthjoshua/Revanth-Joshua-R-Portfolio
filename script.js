/* ===== CONTACT FORM VALIDATION ===== */
const contactForm = document.getElementById("contactForm");
const statusMsg = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // stops page refresh

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    statusMsg.style.color = "#d32f2f"; // default error color

    // EMPTY CHECK
    if (name === "" || email === "" || message === "") {
        statusMsg.textContent = "Please write all required fields.";
    }

    // EMAIL CHECK
    else if (!validateEmail(email)) {
        statusMsg.textContent = "Please enter a valid email address.";
    }

    // SUCCESS (frontend only)
    else {
        statusMsg.style.color = "#2e7d32";
        statusMsg.textContent = "Message sent successfully.";

        // Clear inputs
        contactForm.reset();
    }
});

// Email validation function
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
