"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  nome: z.string().min(2, {
    message: "Il nome deve essere di almeno 2 caratteri.",
  }),
  cognome: z.string().min(2, {
    message: "Il cognome deve essere di almeno 2 caratteri.",
  }),
  email: z.string().email({
    message: "Inserisci un indirizzo email valido.",
  }),
  messaggio: z.string().min(10, {
    message: "Il messaggio deve essere di almeno 10 caratteri.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      cognome: "",
      email: "",
      messaggio: "",
    },
  });

  async function onSubmit(data: FormValues) {
    const { nome, cognome, email, messaggio } = data;
    const payload = {
      name: `${nome} ${cognome}`, // Rinomina fullName in name
      email, // email rimane invariato
      message: messaggio, // Rinomina description in message
    };
    try {
       // Simula una chiamata API
       const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast({
          title: "Messaggio inviato",
          description: "Il tuo messaggio è stato inviato con successo!",
          action: <ToastAction altText="Chiudi">Chiudi</ToastAction>,
        });
      }
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Errore",
        description: "Si è verificato un errore durante l'invio del messaggio.",
        action: <ToastAction altText="Riprova">Riprova</ToastAction>,
      });
    }
  }

  return (
    <div className="w-full bg-gradient-to-br flex items-center justify-center md:p-4">
      <Card className="w-full max-w-xl">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-6">Hai qualcosa da dirci?</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cognome"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Cognome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="E-mail" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="messaggio"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Cosa vuoi dirci"
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-[#c8ff00] text-black hover:bg-[#b3e600]"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Invio in corso..." : "Invia"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
