import { motion } from "framer-motion";
import aboutImage from "../assets/the-artist-2.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative"
          >
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              src={aboutImage}
              alt="Juveriya painting outdoors"
              className="w-full h-auto rounded shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/30 rounded -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="space-y-6"
          >
            <div className="inline-block">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                About Me
              </h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                className="w-20 h-1 bg-primary mt-2 origin-left"
              />
            </div>

            <p className="text-foreground/80 leading-relaxed">
              I am a passionate artist from Pune breathing life into the fusion of faith, nature, and creativity. Through my work, I explore the beauty of our shared experiences and the world around us.
            </p>

            <p className="text-foreground/80 leading-relaxed">
              Each piece I create is a reflection of my journey - where Islamic art meets
              natural landscapes, where traditional patterns dance with modern expression. I
              believe in the power of art to tell stories, preserve memories, and inspire
              reflection.
            </p>

            <p className="text-foreground/80 leading-relaxed">
              Whether it's through delicate watercolors, bold acrylics, or intricate
              illustrations, my goal is to create pieces that resonate with the soul. I'm
              always exploring new techniques and pushing the boundaries of my craft.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex-1 h-px bg-border" />
              <p className="text-sm text-muted-foreground italic">
                "Art is the journey of a free soul"
              </p>
              <div className="flex-1 h-px bg-border" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
