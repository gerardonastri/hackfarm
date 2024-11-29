import React from "react";
import ContactForm from "./_components/contact-form";

const Contact = () => {
  return (
    <main className="mt-[150px] lg:max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-[100px]">
      <section className="flex-1">
        <h1 className="text-4xl md:text-5xl lg:text-8xl text-secondary">
          Contattaci
        </h1>
        <p className="md:max-w-[80%] text-gray font-secondary lg:ml-5 text-sm leading-6 tracking-wide mt-8">
          Crediamo nella forza della collaborazione. Se sei un’azienda, un ente
          pubblico, una scuola, un professionista, unisciti a noi per costruire
          nuove opportunità per il territorio e per i giovani.
        </p>
        <ul className="flex flex-col gap-4 lg:ml-5 mt-[60px] text-gray font-secondary">
          <li className="flex items-center gap-1">
            📧 Email:{" "}
            <a href="mailto:info@hackfarm.it" className="underline">
              info@hackfarm.it
            </a>
          </li>
          <li className="">📍 Sede: Baronissi, Valle dell'inro</li>
          <li>
            🌐 Seguici sui nostri canali per rimanere aggiornato sulle novità!
          </li>
        </ul>
      </section>
      <section className="flex-1">
        <ContactForm />
      </section>
    </main>
  );
};

export default Contact;
