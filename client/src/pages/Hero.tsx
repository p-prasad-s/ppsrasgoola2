import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import { useEasterEggs } from "@/hooks/use-easter-eggs";
import { Ghost } from "lucide-react";

// Hogyee Logo Easter Egg
const HogyeeLogoEasterEgg = () => {
  const [clickCount, setClickCount] = useState(0);
  const [revealGhost, setRevealGhost] = useState(false);
  const { discoverEasterEgg, isDiscovered } = useEasterEggs();
  const logoEggDiscovered = isDiscovered('logo-egg');
  
  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    // After 3 clicks, reveal the easter egg
    if (newCount >= 3 && !logoEggDiscovered) {
      setRevealGhost(true);
      discoverEasterEgg('logo-egg');
      
      // Hide ghost animation after a few seconds
      setTimeout(() => {
        setRevealGhost(false);
      }, 3000);
    }
  };
  
  return (
    <motion.div 
      className="relative cursor-pointer"
      onClick={handleClick}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div 
        className="bg-white p-3 rounded-full shadow-lg"
        animate={{
          rotate: [0, 5, -5, 3, 0],
          scale: [1, 1.1, 1.05, 1.08, 1]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          Hogyee!
        </div>
      </motion.div>
      
      {/* Ghost animation that appears when easter egg is discovered */}
      {revealGhost && (
        <motion.div 
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            y: [10, 0, -20, -40],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ duration: 3 }}
        >
          <div className="flex flex-col items-center">
            <Ghost className="w-8 h-8 text-primary" />
            <div className="mt-1 bg-white px-3 py-1 rounded-full shadow-md text-xs">
              I'm not real! 👻
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

// Desert vs Dessert Easter Egg Component
const DesertEasterEgg = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { discoverEasterEgg, isDiscovered } = useEasterEggs();
  const desertEggDiscovered = isDiscovered('desert-typo');
  
  const handleClick = () => {
    if (!desertEggDiscovered) {
      discoverEasterEgg('desert-typo');
    }
    setIsClicked(true);
    
    // Reset after animation completes
    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
  };
  
  return (
    <motion.span 
      className="block relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {desertEggDiscovered ? (
        <>
          <motion.span 
            className={`inline-block ${isClicked ? "text-secondary" : ""}`}
            animate={isClicked ? { 
              y: [0, -20, 0],
              rotateZ: [0, -10, 10, -5, 0],
              transition: { duration: 1 }
            } : {}}
          >
            DE
          </motion.span>
          <motion.span 
            className={`inline-block relative ${isClicked ? "text-primary" : ""}`}
            animate={isClicked ? { 
              y: [0, -30, 0],
              rotateZ: [0, 20, -15, 5, 0],
              transition: { duration: 1.5 }
            } : {}}
          >
            S
            <motion.span 
              className="absolute -top-1 left-1/2 transform -translate-x-1/2 text-xs text-primary font-normal"
              initial={{ opacity: 0, y: 10 }}
              animate={isHovered || isClicked ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              *
            </motion.span>
          </motion.span>
          <motion.span 
            className={`inline-block ${isClicked ? "text-secondary" : ""}`}
            animate={isClicked ? { 
              y: [0, -15, 0],
              rotateZ: [0, 15, -10, 0],
              transition: { duration: 1.2 }
            } : {}}
          >
            S
          </motion.span>
          <motion.span 
            className={`inline-block ${isClicked ? "text-primary" : ""}`}
            animate={isClicked ? { 
              y: [0, -25, 0],
              rotateZ: [0, -15, 10, -5, 0],
              transition: { duration: 1.3 }
            } : {}}
          >
            ERTS
          </motion.span>
          {(isHovered || desertEggDiscovered) && (
            <motion.div 
              className="absolute -bottom-6 left-0 text-xs text-primary font-normal whitespace-nowrap"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              *Actually desserts, not hot sand! 🏜️
            </motion.div>
          )}
        </>
      ) : (
        <span>DESERTS</span>
      )}
    </motion.span>
  );
};

const Hero = () => {
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
    <section id="home" className="relative overflow-hidden bg-light py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <motion.h1 
            className="font-bold text-4xl md:text-5xl lg:text-6xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary">Pabani's</span> 
            <DesertEasterEgg />
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-3xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="font-bold">Better Than</span> 
            <span className="text-primary italic">Pahala Rasgoola</span>
          </motion.h2>
          <motion.p 
            className="text-lg mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience our heavenly sweets that will transport your taste buds to paradise. 
            Our traditional recipes with a modern twist are guaranteed to make you forget all other desserts!
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              onClick={() => scrollToSection('products')}
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-full transition-all transform hover:scale-105"
            >
              View Our Sweets
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="border-2 border-primary text-primary hover:bg-primary/10 font-semibold px-6 py-3 rounded-full transition-all"
            >
              Our Story
            </button>
          </motion.div>
        </div>
        <motion.div 
          className="w-full md:w-1/2 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative rounded-lg overflow-hidden shadow-xl transform hover:rotate-2 transition-transform duration-300 group">
            <img 
              src="https://images.pexels.com/photos/6747303/pexels-photo-6747303.jpeg" 
              alt="Pabani's Deserts Storefront" 
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/70 to-transparent p-4">
              <div className="text-white text-lg md:text-xl">
                <span className="font-bold">Grand Opening</span> - Visit Today!
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/10">
              <div className="bg-primary p-4 rounded-full text-white font-bold transform rotate-[-30deg]">
                April Fool's!
              </div>
            </div>
          </div>
          <motion.div 
            className="absolute -top-10 -right-10 bg-secondary text-dark p-4 rounded-full font-bold text-xl rotate-12 shadow-lg"
            animate={{ 
              scale: [1, 1.1, 1, 1.1, 1],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            NEW!
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated logo element */}
      <motion.div 
        className="absolute top-40 right-10 hidden lg:block"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <HogyeeLogoEasterEgg />
      </motion.div>
    </section>
  );
};

export default Hero;
