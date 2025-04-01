import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import AnimatedLogo from "./AnimatedLogo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={`sticky top-0 z-50 bg-gradient-to-r from-primary/90 to-secondary/90 text-white transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto py-3 px-4 md:px-8 flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center">
          <AnimatedLogo />
          <span className="ml-2">Pabani's</span>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6 font-medium">
            <li><button onClick={() => scrollToSection('home')} className="hover:text-accent transition-colors">Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className="hover:text-accent transition-colors">About Us</button></li>
            <li><button onClick={() => scrollToSection('products')} className="hover:text-accent transition-colors">Our Sweets</button></li>
            <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-accent transition-colors">Testimonials</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="hover:text-accent transition-colors">Contact</button></li>
          </ul>
        </nav>
        
        <button 
          className="md:hidden text-2xl p-2" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary/95 w-full">
          <ul className="container mx-auto py-4 px-8 space-y-3 font-medium">
            <li><button onClick={() => scrollToSection('home')} className="block w-full text-left hover:text-accent transition-colors py-2">Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className="block w-full text-left hover:text-accent transition-colors py-2">About Us</button></li>
            <li><button onClick={() => scrollToSection('products')} className="block w-full text-left hover:text-accent transition-colors py-2">Our Sweets</button></li>
            <li><button onClick={() => scrollToSection('testimonials')} className="block w-full text-left hover:text-accent transition-colors py-2">Testimonials</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:text-accent transition-colors py-2">Contact</button></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
