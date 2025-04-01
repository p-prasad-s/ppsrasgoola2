import { useEffect } from 'react';
import { useEasterEggs } from './use-easter-eggs';

// The Konami Code sequence
const konamiCode = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

export const useKonami = () => {
  const { discoverEasterEgg } = useEasterEggs();
  
  useEffect(() => {
    let keySequence: string[] = [];
    
    const keyHandler = (e: KeyboardEvent) => {
      // Get the key pressed
      const key = e.key.toLowerCase();
      
      // Add the key to the sequence
      keySequence.push(key);
      
      // Only keep the last N keys where N is the length of the Konami code
      if (keySequence.length > konamiCode.length) {
        keySequence = keySequence.slice(keySequence.length - konamiCode.length);
      }
      
      // Check if the sequence matches the Konami code
      const isKonamiCode = keySequence.every((k, i) => k.toLowerCase() === konamiCode[i].toLowerCase());
      
      if (isKonamiCode) {
        // Trigger the Konami code easter egg
        discoverEasterEgg('konami-code');
        
        // Add some visual effects when Konami code is activated
        document.body.classList.add('konami-activated');
        setTimeout(() => {
          document.body.classList.remove('konami-activated');
        }, 3000);
      }
    };
    
    window.addEventListener('keydown', keyHandler);
    
    return () => {
      window.removeEventListener('keydown', keyHandler);
    };
  }, [discoverEasterEgg]);
};