export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: "Missing fields" });
    }

    // For now, just log (Vercel stores logs)
    console.log("New Contact Message:", { name, email, message });

    return res.status(200).json({ message: "Message received" });
}
