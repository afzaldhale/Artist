import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl font-semibold text-primary hover:opacity-80 transition-opacity">
            Juveriya
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="text-sm text-foreground hover:text-primary transition-colors">
              About Me
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="text-sm text-foreground hover:text-primary transition-colors">
              Portfolio
            </button>
            
            <button onClick={() => scrollToSection("contact")} className="px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all rounded">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            <button onClick={() => scrollToSection("about")} className="text-left text-sm text-foreground hover:text-primary transition-colors">
              About Me
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="text-left text-sm text-foreground hover:text-primary transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection("pricing")} className="text-left text-sm text-foreground hover:text-primary transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-left px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all rounded">
              Contact
            </button>
          </div>}
      </div>
    </nav>;
};
export default Navigation;