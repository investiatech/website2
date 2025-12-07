export async function sendContactMessage(data: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}) {
    const response = await fetch("http://investia.tech:8891/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    const res = await response.json();

    if (!response.ok) {
        throw new Error(res.message || "Nie udało się wysłać wiadomości.");
    }

    return res;
}