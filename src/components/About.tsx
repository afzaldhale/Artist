import { motion } from "framer-motion";
import aboutImage from "../assets/the-artist-2.jpg";

const About = () => {
  return (
    <section id="about" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative"
          >
            <motion.img
              src={aboutImage}
              alt="Fine art artist working outdoors"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="w-full rounded shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded border-2 border-primary/30" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="space-y-6"
          >
            {/* Heading */}
            <div className="inline-block">
              <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
                About Me
              </h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="mt-2 h-1 w-20 origin-left bg-primary"
              />
            </div>

            {/* Paragraphs – EXACT CONTENT */}
            <p className="leading-relaxed text-foreground/80">
              I am a fine art artist based in Pune, exploring the intersection of faith,
              nature, and creative expression. My work reflects a personal journey shaped
              by calligraphy and a deep admiration for the natural world. By blending
              traditional patterns with contemporary visual language, I seek to create
              compositions that honor my heritage while embracing modern artistic
              sensibilities.
            </p>

            <p className="leading-relaxed text-foreground/80">
              From bold acrylic calligraphy paintings to detailed realistic illustrations
              — I aim to produce artworks that evoke emotion and invite contemplation.
              I believe in art’s ability to tell stories, preserve memories, and spark
              meaningful reflection.
            </p>

            <p className="leading-relaxed text-foreground/80">
              I am constantly exploring new styles and compositions, pushing the
              boundaries of my creativity with every piece.
            </p>

            {/* Divider Quote */}
            <div className="flex items-center gap-4 pt-4">
              <div className="h-px flex-1 bg-border" />
              <p className="text-sm italic text-muted-foreground">
                “Art is the journey of a free soul”
              </p>
              <div className="h-px flex-1 bg-border" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
