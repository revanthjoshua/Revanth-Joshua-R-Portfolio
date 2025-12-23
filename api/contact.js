export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).end();
    }

    const { name, email, message } = req.body;

    // ✅ LOG ONLY WHEN DATA EXISTS
    if (name && email && message) {
        console.log("📩 New Contact Message");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        console.log("───────────────");
    }

    return res.status(200).json({ success: true });
}
