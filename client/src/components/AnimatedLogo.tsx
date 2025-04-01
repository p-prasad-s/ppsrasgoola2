import { motion } from "framer-motion";
import { useState } from "react";
import { useEasterEggs } from "@/hooks/use-easter-eggs";

const AnimatedLogo = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const { discoverEasterEgg, isDiscovered } = useEasterEggs();
  const logoEggDiscovered = isDiscovered('logo-egg');
  
  const logoVariants = {
    normal: {
      rotate: 0,
      scale: 1,
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1],
        rotate: [0, 5, -5, 3, 0],
        scale: [1, 1.1, 1.05, 1.08, 1]
      }
    },
    hovered: {
      rotate: 0,
      scale: 1.2,
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1],
        rotate: [0, 10, -10, 6, 0],
        scale: [1.2, 1.3, 1.2, 1.25, 1.2]
      }
    },
    egg: {
      rotate: [0, 360],
      scale: [1, 1.5, 0.8, 1.5, 1],
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const handleLogoClick = () => {
    // Increment the click count
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    // If clicked 5 times, trigger the easter egg
    if (newCount >= 5 && !logoEggDiscovered) {
      discoverEasterEgg('logo-egg');
    }
  };

  return (
    <motion.div 
      className="inline-block cursor-pointer"
      variants={logoVariants}
      animate={logoEggDiscovered && clickCount >= 5 ? "egg" : isHovered ? "hovered" : "normal"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleLogoClick}
      whileTap={{ scale: 0.9 }}
    >
      {logoEggDiscovered && clickCount >= 5 ? "🎉" : "🍬"}
    </motion.div>
  );
};

export default AnimatedLogo;
