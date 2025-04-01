import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";
import AnimatedLogo from "./AnimatedLogo";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer id="contact" className="bg-dark text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4 flex items-center">
              <AnimatedLogo />
              <span className="ml-2">Satapathy's</span>
            </div>
            <p className="mb-4">Bringing you sweets that are better than Pahala Rasgoola. Your taste buds will thank you!</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-secondary transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-secondary transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection('products')} className="hover:text-secondary transition-colors">Our Sweets</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-secondary transition-colors">Testimonials</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-secondary transition-colors">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-secondary transition-colors">Rasgulla</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Gulab Jamun</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Saffron Delights</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Pistachio Treats</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Gift Boxes</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 text-secondary h-5 w-5 mt-0.5" />
                <span>123 Sweet Lane, Dessert District</span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 text-secondary h-5 w-5 mt-0.5" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 text-secondary h-5 w-5 mt-0.5" />
                <span>info@satapathysdeserts.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-sm">© 2023 Satapathy's Deserts. All rights reserved.</p>
          <p className="text-xs mt-2 text-gray-400">This website is an April Fool's joke. Pahala Rasgoola is still amazing!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
