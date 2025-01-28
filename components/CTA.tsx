"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewsletterFormSchema } from "@/lib/schemas";

import { subscribe } from "@/lib/action";

type Inputs = z.infer<typeof NewsletterFormSchema>;

export default function CtaSection() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  //NEWSLETTER FORM
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isSubmitting },
    } = useForm<Inputs>({
      resolver: zodResolver(NewsletterFormSchema),
      defaultValues: {
        email: "",
      },
    });
  
    const processForm: SubmitHandler<Inputs> = async (data) => {
      const result = await subscribe(data);
  
      if (result?.error) {
        toast.error("An error occurred! Please try again.");
        return;
      }
  
      toast.success("Subscribed successfully!");
      reset();
    };


  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[rgb(200,255,0)] text-4xl sm:text-5xl font-bold"
        >
          Resta aggiornato sulle nostre iniziative
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto"
        >
          Iscriviti alla nostra newsletter per ricevere aggiornamenti sui prossimi eventi, hackathon e opportunità di
          formazione nel mondo del gaming e dello sviluppo.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onSubmit={handleSubmit(processForm)}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto items-center justify-center"
        >
          <Input
            type="email"
            placeholder="Inserisci la tua email"
            {...register("email")}
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-[rgb(200,255,0)] text-black hover:bg-[rgb(220,255,100)] transition-colors w-full sm:w-auto"
          >
            {isLoading ? "Iscrizione..." : "Iscriviti ora"}
          </Button>
        </motion.form>
      </div>
    </section>
  )
}

