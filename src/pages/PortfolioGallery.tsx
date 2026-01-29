import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import calligraphy1 from "@/assets/calligraphy-1.jpg";
import calligraphy2 from "@/assets/calligraphy-2.jpg";
import calligraphy3 from "@/assets/calligraphy-3.jpg";
import calligraphy4 from "@/assets/calligraphy-4.jpg";
import naturescape1 from "@/assets/naturescape-1.jpg";
import naturescape2 from "@/assets/naturescape-2.jpg";
import naturescape3 from "@/assets/naturescape-3.jpg";
import tableDecor1 from "@/assets/table-decor-1.jpg";
import tableDecor2 from "@/assets/table-decor-2.jpg";
import tableDecor4 from "@/assets/table-decor-4.jpg";
import weddingArt2 from "@/assets/wedding-art-2.jpg";
import watercolorImage from "@/assets/watercolor-dreams.jpg";
import faithImage from "@/assets/faith-in-form.jpg";
import natureImage from "@/assets/natures-canvas.jpg";
import abstractImage from "@/assets/abstract-reflections.jpg";

const portfolioItems = [
  {
    title: "Islamic Calligraphy Art",
    image: calligraphy1,
    category: "Calligraphy",
    description: "Beautiful Arabic calligraphy with radial design",
  },
  {
    title: "Abstract Calligraphy",
    image: calligraphy2,
    category: "Calligraphy",
    description: "Modern calligraphy on textured canvas",
  },
  {
    title: "Traditional Islamic Art",
    image: calligraphy3,
    category: "Calligraphy",
    description: "Golden calligraphy with Quranic verses",
  },
  {
    title: "Peaceful Reflections",
    image: calligraphy4,
    category: "Calligraphy",
    description: "Serene gradient calligraphy artwork",
  },
  {
    title: "Mountain Lake Serenity",
    image: naturescape1,
    category: "Naturescapes",
    description: "Peaceful cabin by crystal clear mountain lake",
  },
  {
    title: "Sunset Meadow",
    image: naturescape2,
    category: "Naturescapes",
    description: "Golden sunset over lavender fields",
  },
  {
    title: "River Rapids",
    image: naturescape3,
    category: "Naturescapes",
    description: "Dynamic water flow through natural landscape",
  },
  {
    title: "Miniature Inspiration",
    image: tableDecor1,
    category: "Table Decor",
    description: "Motivational mini canvas art pieces",
  },
  {
    title: "Rose Canvas Miniature",
    image: tableDecor2,
    category: "Table Decor",
    description: "Delicate rose painting on small canvas",
  },
  {
    title: "Superstar of the Year",
    image: tableDecor4,
    category: "Table Decor",
    description: "Unique artistic expressions and vibrant designs",
  },
  {
    title: "Wedding Art",
    image: weddingArt2,
    category: "Special Occasions",
    description: "Custom wedding artworks and celebrations",
  },
  {
    title: "Watercolor Dreams",
    image: watercolorImage,
    category: "Abstract",
    description: "Ethereal landscapes and flowing compositions",
  },
  {
    title: "Faith in Form",
    image: faithImage,
    category: "Abstract",
    description: "Sacred geometry and spiritual expressions",
  },
  {
    title: "Nature's Canvas",
    image: natureImage,
    category: "Abstract",
    description: "Botanical studies and organic beauty",
  },
  {
    title: "Abstract Reflections",
    image: abstractImage,
    category: "Abstract",
    description: "Contemporary expressions and bold explorations",
  },
];

const PortfolioGallery = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
              
              <div className="text-center mb-16 animate-fade-in">
                <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
                  Complete Portfolio
                </h1>
                <div className="w-20 h-1 bg-primary mx-auto mb-6" />
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Explore my complete collection of artwork across different styles and mediums, from traditional calligraphy to contemporary naturescapes.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems.map((item, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in bg-card"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 text-white w-full">
                        <div className="text-xs uppercase tracking-wider mb-2 text-primary-foreground/80">
                          {item.category}
                        </div>
                        <h3 className="font-serif text-xl font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm opacity-90">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioGallery;
