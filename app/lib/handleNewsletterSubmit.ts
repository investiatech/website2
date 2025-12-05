"use client";

import { toast } from "sonner";
import { subscribeToNewsletter } from "./subscribeToNewsletter";

export async function handleNewsletterSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const emailField = form.elements.namedItem("email");

    if (!(emailField instanceof HTMLInputElement)) {
        toast.error("Nie udało się odczytać adresu e-mail.");
        return;
    }

    const email = emailField.value;

    try {
        const result = await subscribeToNewsletter(email);

        toast.success("Zapisano do newslettera!", {
            description: result.message || "Dziękujemy za dołączenie do Investia.Tech",
            style: {
                background: "#22C55E",
                color: "white",
                fontSize: "16px",
                padding: "18px 20px",
                borderRadius: "12px",
            },
        });

        form.reset();
    } catch (error: any) {
        toast.error("Nie udało się zapisać.", {
            description: error.message ?? "Spróbuj ponownie później.",
        });
    }
}