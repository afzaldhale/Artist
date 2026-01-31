import { motion } from "framer-motion";
import { Instagram, Mail, Heart } from "lucide-react";
import logo from "../assets/hero-image.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }}
      className="bg-foreground/5 border-t border-border"
    >
      <div className="container mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-3 text-center md:text-left mb-10">

          {/* Column 1 – Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { id: "about", label: "About Me" },
                { id: "portfolio", label: "Portfolio" },
                { id: "pricing", label: "Pricing" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() =>
                      document
                        .getElementById(item.id)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2 – Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-foreground mb-4">
              Stay Inspired
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Follow my creative journey on social media.
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/juveriyasartjourney"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:juveriyasartjourney@gmail.com"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Column 3 – Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center md:items-end justify-center"
          >
            <img
              src={logo}
              alt="Juveriya Art Journey"
              className="h-16 mb-2 opacity-80 hover:opacity-100 transition-opacity"
            />

            <span className="text-xs text-muted-foreground italic">
              Juveriya’s Art Journey
            </span>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-center"
        >
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Juveriya. Made with{" "}
            <Heart size={14} className="text-primary" /> and creativity.
          </p>

          <p className="text-sm text-muted-foreground">
            All artwork © Juveriya. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
