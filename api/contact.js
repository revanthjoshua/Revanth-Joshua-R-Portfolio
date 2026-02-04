export default function handler(req, res) {
    console.log("🔥 API HIT");

    if (req.method !== "POST") {
        console.log("❌ Wrong method:", req.method);
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
        console.log("❌ Missing fields:", req.body);
        return res.status(400).json({ error: "Missing fields" });
    }

    console.log("📩 New Contact Message");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("───────────────");

    return res.status(200).json({ success: true });
}
