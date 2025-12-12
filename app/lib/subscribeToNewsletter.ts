export async function subscribeToNewsletter(email: string) {
    const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Nie udało się zapisać do newslettera.");
    }

    return data;
}