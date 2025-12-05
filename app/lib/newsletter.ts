// export async function subscribeToNewsletter(email: string) {
//   const response = await fetch("http://localhost:8895/newsletter", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email }),
//   });

//   if (!response.ok) throw new Error("Newsletter subscription failed");

//   return response.json().catch(() => null);
// }

export async function subscribeToNewsletter(email: string) {
    const response = await fetch("http://localhost:8895/newsletter", {
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