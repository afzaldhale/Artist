import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import watercolorImage from "@/assets/watercolor-dreams.jpg";
import faithImage from "@/assets/faith-in-form.jpg";
import natureImage from "@/assets/natures-canvas.jpg";
import abstractImage from "@/assets/abstract-reflections.jpg";
import tableDecor4Image from "@/assets/table-decor-4.jpg";
import weddingArt2Image from "@/assets/wedding-art-2.jpg";

const portfolioItems = [
  {
    title: "Watercolor Dreams",
    image: watercolorImage,
    description: "Ethereal landscapes and flowing compositions",
  },
  {
    title: "Faith in Form",
    image: faithImage,
    description: "Sacred geometry and spiritual expressions",
  },
  {
    title: "Nature's Canvas",
    image: natureImage,
    description: "Botanical studies and organic beauty",
  },
  {
    title: "Abstract Reflections",
    image: abstractImage,
    description: "Contemporary expressions and bold explorations",
  },
  {
    title: "Superstar of the Year",
    image: tableDecor4Image,
    description: "Unique artistic expressions and vibrant designs",
  },
  {
    title: "Wedding Art",
    image: weddingArt2Image,
    description: "Custom wedding artworks and celebrations",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Portfolio
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              className="w-20 h-1 bg-primary mx-auto mb-6 origin-center"
            />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore my creative journey through different styles and mediums, each piece
              telling its own unique story.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="mt-8"
            >
              <Link to="/portfolio">
                <Button size="lg" className="font-semibold">
                  View Full Portfolio
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white w-full">
                    <h3 className="font-serif text-2xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
