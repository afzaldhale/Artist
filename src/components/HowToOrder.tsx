import { motion } from "framer-motion";
import { Clock, Image, Ruler, Palette, CreditCard, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Clock,
    title: "Plan Ahead",
    description: "Place your order 10 days to a month in advance depending upon the size of artwork you want.",
  },
  {
    icon: Image,
    title: "Share Your Vision",
    description: "Share a reference image if you have and explain how you need it to be customised. I specialize in Arabic calligraphy, nature escapes, still life, memory art and wedding art.",
  },
  {
    icon: Ruler,
    title: "Choose Your Size",
    description: "Let me know the size of the artwork you want. I offer sizes starting as small as 5×5 inches.",
  },
  {
    icon: Palette,
    title: "Select Material",
    description: "Choose from canvas board, canvas cloth or stretched canvas. Note: Large paintings (above A3) shipped outside Pune are made only on canvas cloth.",
  },
  {
    icon: CreditCard,
    title: "Confirm & Pay",
    description: "Confirm your order with 50% advance payment. Remaining 50% is paid before shipping. Shipping charges are extra based on your location.",
  },
  {
    icon: MessageCircle,
    title: "Get in Touch",
    description: "Request a commission through Instagram or email. I'll provide a quotation once I have all the details.",
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

const HowToOrder = () => {
  return (
    <section id="how-to-order" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              How to Place an Order
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              className="w-20 h-1 bg-primary mx-auto mb-6 origin-center"
            />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Commissioning a custom artwork is simple. Follow these steps to bring your vision to life.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-background p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-border/50"
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                  >
                    <step.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <span className="text-3xl font-serif font-bold text-primary/30">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-12 p-6 bg-accent/10 rounded-lg border border-accent/20"
          >
            <div className="text-center">
              <p className="text-foreground font-medium mb-2">
                Important Note
              </p>
              <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
                I do not paint portraits or animals. Due to the nature of custom artwork, refunds are not accepted. 
                If any cancellation is made on my behalf after taking the advance payment, only then the refund will be made.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mt-10"
          >
            <a 
              href="https://www.instagram.com/juveriyasartjourney?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="font-semibold">
                Start Your Commission
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
