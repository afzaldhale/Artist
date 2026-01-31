import { motion } from "framer-motion";
import heroLogo from "../assets/hero-image.png";
import { Instagram, Mail } from "lucide-react";
import { SiPinterest } from "@icons-pack/react-simple-icons";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-background"
    >
      {/* Content */}
      <div className="flex min-h-screen flex-col justify-center px-6">
        <div className="mx-auto max-w-3xl text-center pt-24 md:pt-28">

          {/* HERO LOGO (Primary Identity) */}
          <motion.img
            src={heroLogo}
            alt="Juveriya Art Journey Logo"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
              mx-auto
              mb-10
              w-56
              md:w-72
              pointer-events-none
              select-none
            "
          />

          {/* Quote */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-10 text-base font-medium text-primary md:text-lg"
          >
            “Discover the fusion of faith and nature”
          </motion.p>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-primary-foreground shadow-lg transition hover:bg-primary/90 hover:shadow-xl"
          >
            Let’s Create Together
          </motion.button>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-12 flex justify-center gap-6"
          >
            <a
              href="https://www.instagram.com/juveriyasartjourney"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 transition hover:text-primary"
            >
              <Instagram size={20} />
            </a>

            <a
              href="https://www.pinterest.com/juveriyasartjourney"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 transition hover:text-primary"
            >
              <SiPinterest size={20} />
            </a>

            <a
              href="mailto:juveriyasartjourney@gmail.com"
              className="text-foreground/60 transition hover:text-primary"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mx-auto mt-20 grid max-w-2xl grid-cols-3 gap-8 border-t border-border/30 pt-12"
        >
          {[
            { value: "2+", label: "Years Experience" },
            { value: "35+", label: "Happy Clients" },
            { value: "80+", label: "Artworks Created" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
