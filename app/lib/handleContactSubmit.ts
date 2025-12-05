"use client";

import { toast } from "sonner";
import { sendContactMessage } from "./sendContactMessage";


export async function handleContactSubmit(
    e: React.FormEvent<HTMLFormElement>
) {
    e.preventDefault();

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement)?.value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;

    if (!name || !email || !subject || !message) {
        toast.error("Uzupełnij wszystkie pola.");
        return;
    }

    try {
        const result = await sendContactMessage({ name, email, subject, message });

        toast.success("Wiadomość wysłana!", {
            description: result.message || "Dziękujemy za kontakt — odpowiemy wkrótce.",
            style: {
                background: "#22C55E",
                color: "white",
                borderRadius: "12px",
                padding: "18px 20px",
            },
        });

        form.reset();
    } catch (err: any) {
        toast.error("Nie udało się wysłać wiadomości.", {
            description: err.message ?? "Spróbuj ponownie później.",
            style: {
                background: "#EF4444",
                color: "white",
                borderRadius: "12px",
                padding: "18px 20px",
            },
        });
    }
}