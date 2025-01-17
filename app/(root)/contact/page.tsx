import React from "react";
import ContactForm from "./_components/contact-form";
import { Facebook, Twitter, Youtube, Instagram, Globe } from 'lucide-react'

const Contact = () => {
  return (
    <main className="md:mt-[150px] lg:max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-[100px]">
      <section className="flex-1 w-[90%] mx-auto md:w-[unset] md:mx-0">
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
          <li className="">📍 Sede: Corso Garibaldi, 193 - Baronissi (SA) C.F. 95200300655</li>
          <li>
          <div className="flex items-center gap-3">
          <Globe className="w-5 h-5" />
          <span>Seguici sui nostri canali social</span>
        </div>
        <div className="flex items-center mt-4 gap-4">
          <a 
            href="https://facebook.com/hackfarm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#92fa1c] transition-colors"
            aria-label="Seguici su Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a 
            href="https://twitter.com/hackfarm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#92fa1c] transition-colors"
            aria-label="Seguici su X (Twitter)"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a 
            href="https://youtube.com/hackfarm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#92fa1c] transition-colors"
            aria-label="Seguici su YouTube"
          >
            <Youtube className="w-6 h-6" />
          </a>
          <a 
            href="https://instagram.com/hackfarm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#92fa1c] transition-colors"
            aria-label="Seguici su Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
          </li>
        </ul>
      </section>
      <section className="flex-1 w-[90%] mx-auto md:w-[unset] md:mx-0">
        <ContactForm />
      </section>
    </main>
  );
};

export default Contact;
