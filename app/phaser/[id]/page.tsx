"use client";

import InfiniteCarousel from "@/components/Carousel";
import { Card, CardContent } from "@/components/ui/card";
import VideoPlayer from "@/components/VideoPlayer";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Trophy,
  Calendar,
  Users,
  Clock,
  Gamepad2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { senior } from "@/constants/phaser";
import Loading from "@/components/Loading";
import { useParams } from "next/navigation";

//FORM STUFF
import { z } from "zod";
import { toast } from "sonner";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewsletterFormSchema } from "@/lib/schemas";

import { subscribe } from "@/lib/action";

const editionData = [
  {
    year: 2022,
    image: "/hero-2022.jpg",
    introText:
      "La Phaser Game Jam celebra il talento, la creatività e l'innovazione. Ogni edizione premia i migliori team che, con impegno e passione, hanno trasformato idee in progetti straordinari. Scopri i vincitori e i loro lavori, esempi concreti di eccellenza nel campo della programmazione, del design e della gamification. Un tributo al loro spirito innovativo e alla loro dedizione!",
    stats: [
      { label: "Partecipanti alla formazione", value: "300" },
      { label: "Team in gara", value: "13" },
      { label: "Developer", value: "70" },
      { label: "Ore di gaming", value: "48" },
    ],
  },
  {
    year: 2023,
    image: "/phaser/2023/img-5.webp",
    introText:
      "La seconda edizione della Phaser Game Jam è stata ancora più avvincente della prima, alzando l'asticella dell'innovazione e della creatività. I vincitori si sono distinti per il loro talento e la capacità di trasformare idee brillanti in progetti straordinari, conquistando la giuria con originalità e competenze tecniche. Scopri chi ha trionfato in questa competizione entusiasmante, celebrando il meglio della programmazione, del design e della gamification!",
    stats: [
      { label: "Partecipanti alla formazione", value: "600" },
      { label: "Team in gara", value: "24" },
      { label: "Developer", value: "120" },
      { label: "Ore di gaming", value: "48" },
    ],
  },
  {
    year: 2024,
    image: "/hero-2024.jpg",
    introText:
      "La terza edizione della Phaser Game Jam ha superato ogni aspettativa, grazie anche al prezioso contributo dell'Ufficio Scolastico Regionale della Regione Campania, che ha permesso di ampliare ulteriormente la platea dei partecipanti. I vincitori di questa edizione si sono distinti per creatività, innovazione e competenze tecniche, dimostrando come il talento possa emergere attraverso la collaborazione e l'impegno. Scopri i protagonisti di questa straordinaria competizione, che continua a crescere ed entusiasmare, celebrando il meglio della programmazione, del design e della gamification!",
    stats: [
      { label: "Partecipanti alla formazione", value: "1300" },
      { label: "Team in gara", value: "28" },
      { label: "Developer", value: "220" },
      { label: "Ore di gaming", value: "48" },
    ],
  },
  {
    year: 2025,
    image: "/phaser/2025/edition.jpg",
    introText:
      "La quinta edizione della Phaser Game Jam è in arrivo! Preparati per un'esperienza ancora più coinvolgente e innovativa. Resta sintonizzato per ulteriori dettagli su questa edizione che promette di superare ogni aspettativa.",
    stats: [
      { label: "Partecipanti previsti", value: "1500+", icon: Users },
      { label: "Team attesi", value: "35+", icon: Users },
      { label: "Developer stimati", value: "300+", icon: Gamepad2 },
      { label: "Ore di gaming", value: "48", icon: Clock },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

type Inputs = z.infer<typeof NewsletterFormSchema>;

export default function page() {
  const { id } = useParams();

  if (!id) {
    return <Loading />;
  }
  const newId = Number(id);
  const isCurrentEdition = id == "4"; // Assuming 2025 is the 4th edition in the array

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
    <main className="max-w-[1600px] pt-[60px] mx-auto px-4 lg:px-[3rem]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        {/* back link  */}
        <Link
          href="/phaser"
          className={`
            inline-flex items-center justify-center
            text-white hover:text-gray-200
            transition-colors duration-300
            focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black
          `}
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          <span>Back</span>
        </Link>

        <div className="relative">
          <div className="relative h-[400px] rounded-3xl overflow-hidden">
            <Image
              src={editionData[newId - 1].image || "/placeholder.svg"}
              alt={`Edition ${senior[newId - 1].year}`}
              fill
              className="object-cover brightness-75"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-40 h-40 mb-4"
            >
              <Image
                src="/logo-phaser.png"
                alt="Phaser Game Jam Logo"
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-7xl md:text-8xl lg:text-9xl font-bold text-[#FFD700]"
            >
              {senior[newId - 1].year}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white font-secondary text-2xl md:text-3xl mt-4"
            >
              edition
            </motion.p>
          </div>
        </div>

        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 gap-8">
            <p className="text-gray font-secondary text-sm leading-relaxed">
              {editionData[newId - 1].introText}
            </p>
          </div>
        </motion.section>

        {isCurrentEdition ? (
          // Content for 2025 edition
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-[#FFD700]">
              Preparati per la Phaser Game Jam 2025
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-4 text-white">
                    Cosa aspettarsi
                  </h4>
                  <ul className="space-y-2 text-gray">
                    <li>Nuove sfide e temi innovativi</li>
                    <li>Mentori esperti del settore</li>
                    <li>Premi esclusivi per i vincitori</li>
                    <li>Networking con professionisti del gaming</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-4 text-white">
                    Come partecipare
                  </h4>
                  <ol className="space-y-2 text-gray list-decimal list-inside">
                    <li>Forma il tuo team (max 5 persone)</li>
                    <li>Registrati sul nostro sito</li>
                    <li>Partecipa alle sessioni di formazione</li>
                    <li>Preparati per 48 ore di pura creatività!</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </motion.section>
        ) : (
          // Content for past editions
          <>
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-8"
            >
              <h3 className="text-3xl mt-[80px] sm:text-4xl font-bold text-white">
                I Vincitori
              </h3>
            </motion.section>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 pt-8"
            >
              {senior[newId - 1].vincitori.map((winner, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className={`flex flex-col ${
                    index === 2
                      ? "lg:scale-110 z-10"
                      : index === 1 || index === 3
                      ? "lg:scale-105 z-5"
                      : ""
                  }`}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 h-full group">
                    <CardContent className="p-6 h-full flex flex-col items-center justify-between text-center">
                      <div className="relative">
                        <div
                          className={`mb-4 relative ${
                            index === 2
                              ? "w-24 h-24 lg:w-32 lg:h-32"
                              : index === 1 || index === 3
                              ? "w-20 h-20 lg:w-24 lg:h-24"
                              : "w-16 h-16 lg:w-20 lg:h-20"
                          }`}
                        >
                          <Image
                            src={winner.logo || "/placeholder.svg"}
                            alt={`${winner.teamName} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>

                        <div className="absolute -top-2 -right-2 bg-[#6F6FFF] rounded-full p-1">
                          <Trophy className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div className="space-y-2 flex-grow">
                        <h4 className="text-lg font-bold text-[#FFD700] group-hover:text-white transition-colors duration-300">
                          {winner.teamName}
                        </h4>
                        <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                          {winner.name}
                        </p>
                        <p className="text-xs text-white/40 group-hover:text-white/60 transition-colors duration-300">
                          {winner.location}
                        </p>
                      </div>
                      <p className="text-2xl font-bold text-[#FFD700] group-hover:text-white transition-colors duration-300 mt-4">
                        € {winner.prize}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}

        {/* media  */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent pointer-events-none" />

          <div className="relative max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFD700]">
                  {isCurrentEdition ? "Edizione 2025" : "Video e Media"}
                </h2>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <div className="h-[2px] w-12 bg-gradient-to-r from-[#6F6FFF] to-transparent" />
                  <span className="text-white/60 text-sm uppercase tracking-wider">
                    Edizione {senior[newId - 1].year}
                  </span>
                </motion.div>
              </div>

              {isCurrentEdition ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-semibold mb-4 text-white">
                        Rimani Aggiornato
                      </h3>
                      <p className="text-gray mb-4">
                        Iscriviti alla nostra newsletter per ricevere tutte le
                        novità sulla Phaser Game Jam 2025.
                      </p>
                      <form
                        onSubmit={handleSubmit(processForm)}
                        className="flex flex-col sm:flex-row gap-2"
                      >
                        <input
                          type="email"
                          placeholder="La tua email"
                          className="flex-grow px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6F6FFF]"
                          {...register("email")}
                        />
                        {errors.email?.message && (
                          <p className="ml-1 mt-2 text-sm text-rose-400">
                            {errors.email.message}
                          </p>
                        )}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-4 py-2 bg-[#6F6FFF] text-white rounded-md hover:bg-[#5050FF] transition-colors duration-300"
                        >
                          {isSubmitting ? "Iscrizione..." : "Iscriviti"}
                        </button>
                      </form>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-semibold mb-4 text-white">
                        Date Importanti
                      </h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center">
                          <Calendar className="mr-2 h-5 w-5 text-[#FFD700]" />
                          <span className="text-gray">
                            Apertura iscrizioni: 30 Settembre 2024
                          </span>
                        </li>
                        <li className="flex items-center">
                          <Calendar className="mr-2 h-5 w-5 text-[#FFD700]" />
                          <span className="text-gray">
                            Sessioni di formazione: Ottobre - Febbraio 2025
                          </span>
                        </li>
                        <li className="flex items-center">
                          <Calendar className="mr-2 h-5 w-5 text-[#FFD700]" />
                          <span className="text-gray">
                            Game Jam: 28-29 Marzo 2025
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                  >
                    <div className="aspect-video">
                      <VideoPlayer videoId={senior[newId - 1].videoId} />
                    </div>
                    <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-white/10" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8"
                  >
                    {editionData[newId - 1].stats.map((stat, index) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-[#FFD700]">
                          {stat.value}
                        </div>
                        <div className="text-sm text-white/60 mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </>
              )}
            </motion.div>
          </div>
        </section>

        {!isCurrentEdition && (
          <InfiniteCarousel images={senior[newId - 1].media} />
        )}
      </motion.div>
    </main>
  );
}
