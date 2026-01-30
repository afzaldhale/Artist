import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let's Create Together
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] as const }}
              className="w-20 h-1 bg-primary mx-auto mb-6 origin-center"
            />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about your vision and bring it to life
              through art.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] as const }}
            className="flex justify-center"
          >
            <div className="space-y-8 max-w-lg text-center">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                  Get in Touch
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-8">
                  Whether you're looking for a custom piece, want to discuss a commission, or
                  just want to say hello, feel free to reach out. I'm always excited to
                  connect with fellow art enthusiasts!
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] as const }}
                className="flex flex-col md:flex-row items-center justify-center gap-8 text-center"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:juveriyasartjourney@gmail.com" className="text-foreground hover:text-primary transition-colors">
                      juveriyasartjourney@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">Pune, India</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
