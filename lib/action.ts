"use server";

import { z } from "zod";
import { Resend } from "resend";
import { ContactFormSchema, NewsletterFormSchema } from "@/lib/schemas";
import ContactFormEmail from "@/emails/contact-form-email";

type ContactFormInputs = z.infer<typeof ContactFormSchema>;
type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);

  if (result.error) {
    return { error: result.error.format() };
  }

  try {
    const { name, email, message } = result.data;
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["gerardonastri7@gmail.com"],
      cc: ["Acme <onboarding@resend.dev>"],
      subject: "Contact form submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: ContactFormEmail({ name, email, message }),
    });

    if (!data || error) {
      throw new Error("Failed to send email");
    }

    console.log(error, data);
    return { success: true };
  } catch (error) {
    return { error };
  }
}

export async function subscribe(data: NewsletterFormInputs) {
  const result = NewsletterFormSchema.safeParse(data);

  if (result.error) {
    return { error: result.error.format() };
  }

  try {
    const { email } = result.data;

    // Crea il contatto nell'audience
    const { data: contactData, error: contactError } =
      await resend.contacts.create({
        email: email,
        audienceId: process.env.RESEND_AUDIENCE_ID as string,
      });

    if (!contactData || contactError) {
      console.log(contactError);

      throw new Error("Failed to subscribe");
    }

    // Invia un'email di benvenuto
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>", // Modifica con l'indirizzo del mittente verificato
      to: [email], // Destinatario
      subject: "Benvenuto nella newsletter di Hackfarm!",
      html: `
          <h1>Benvenuto!</h1>
          <p>Grazie per esserti iscritto alla nostra newsletter. Ti terremo aggiornato con le ultime novità!</p>
        `,
    });

    if (!emailData || emailError) {
      console.log(emailError);
      throw new Error("Failed to send welcome email");
    }

    console.log("Email inviata:", emailData);

    return { success: true };
  } catch (error) {
    console.error("Errore durante l'iscrizione:", error);
    return { error };
  }
}
