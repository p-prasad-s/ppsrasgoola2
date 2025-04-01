import { useState, useEffect } from 'react';
import { useToast } from './use-toast';

// Types for our easter eggs
export type EasterEggType = {
  id: string;
  message: string;
  discovered: boolean;
  points: number;
};

// Initial easter eggs for the site
const initialEasterEggs: EasterEggType[] = [
  {
    id: 'logo-egg',
    message: 'You discovered the logo secret! Hogyee is just a joke!',
    discovered: false,
    points: 10
  },
  {
    id: 'desert-typo',
    message: 'You found it! It\'s "Desserts" not "Deserts". We can\'t even spell correctly! 🏜️',
    discovered: false,
    points: 20
  },
  {
    id: 'fake-review',
    message: 'Good catch! These reviews are completely made up. Nobody has ever tasted our sweets!',
    discovered: false,
    points: 15
  },
  {
    id: 'store-location',
    message: 'You got us! Our store doesn\'t exist. The address is completely fictional!',
    discovered: false,
    points: 15
  },
  {
    id: 'product-price',
    message: 'Who would pay these prices? These sweets are definitely overpriced!',
    discovered: false,
    points: 10
  },
  {
    id: 'konami-code',
    message: 'Konami code activated! You\'re a true gamer and detective!',
    discovered: false,
    points: 50
  }
];

export const useEasterEggs = () => {
  // Load easter eggs from localStorage if available
  const [easterEggs, setEasterEggs] = useState<EasterEggType[]>(() => {
    const saved = localStorage.getItem('satapathy-easter-eggs');
    return saved ? JSON.parse(saved) : initialEasterEggs;
  });
  
  const [totalPoints, setTotalPoints] = useState<number>(() => {
    return easterEggs.reduce((sum, egg) => sum + (egg.discovered ? egg.points : 0), 0);
  });
  
  const { toast } = useToast();

  // Save easter eggs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('satapathy-easter-eggs', JSON.stringify(easterEggs));
    const newTotal = easterEggs.reduce((sum, egg) => sum + (egg.discovered ? egg.points : 0), 0);
    setTotalPoints(newTotal);
  }, [easterEggs]);

  // Function to trigger an easter egg discovery
  const discoverEasterEgg = (id: string) => {
    setEasterEggs(prev => {
      const newEggs = prev.map(egg => {
        if (egg.id === id && !egg.discovered) {
          // Show toast notification for newly discovered egg
          toast({
            title: "🎉 Easter Egg Found!",
            description: egg.message,
            duration: 5000,
          });
          return { ...egg, discovered: true };
        }
        return egg;
      });
      return newEggs;
    });
  };

  // Function to check if an egg has been discovered
  const isDiscovered = (id: string) => {
    return easterEggs.find(egg => egg.id === id)?.discovered || false;
  };

  // Function to reset all easter eggs
  const resetEasterEggs = () => {
    setEasterEggs(initialEasterEggs);
    toast({
      title: "Easter Eggs Reset",
      description: "All easter eggs have been reset. Happy hunting!",
      duration: 3000,
    });
  };

  return {
    easterEggs,
    totalPoints,
    discoverEasterEgg,
    isDiscovered,
    resetEasterEggs
  };
};