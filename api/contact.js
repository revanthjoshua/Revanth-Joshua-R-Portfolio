export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { name, email, message } = req.body;

    console.log("📩 New Contact Message");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("----------------------");

    return res.status(200).json({ success: true });
}
