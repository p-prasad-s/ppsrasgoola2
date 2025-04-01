import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, Trophy, Gift } from 'lucide-react';
import { useEasterEggs } from '@/hooks/use-easter-eggs';

export const EasterEggTracker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { easterEggs, totalPoints, resetEasterEggs } = useEasterEggs();
  
  const discoveredCount = easterEggs.filter(egg => egg.discovered).length;
  const totalCount = easterEggs.length;
  
  return (
    <>
      {/* Easter Egg Button */}
      <motion.button
        className="fixed bottom-4 right-4 bg-white shadow-lg rounded-full p-3 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        aria-label="Easter Egg Tracker"
      >
        <Trophy className="h-6 w-6 text-primary" />
        {discoveredCount > 0 && (
          <motion.div 
            className="absolute -top-2 -right-2 bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            {discoveredCount}
          </motion.div>
        )}
      </motion.button>
      
      {/* Easter Egg Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold flex items-center">
                    <Gift className="mr-2 text-primary" /> 
                    Easter Eggs
                  </h2>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">Progress</div>
                    <div className="text-sm text-gray-500">{discoveredCount} of {totalCount} found</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-primary h-2.5 rounded-full transition-all duration-500" 
                      style={{ width: `${(discoveredCount / totalCount) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 mb-4 bg-primary/10 rounded-lg">
                  <div className="flex items-center">
                    <Trophy className="h-10 w-10 mr-3 text-primary" />
                    <div>
                      <div className="text-sm text-gray-500">Total Points</div>
                      <div className="text-2xl font-bold">{totalPoints}</div>
                    </div>
                  </div>
                  <button 
                    onClick={resetEasterEggs}
                    className="bg-secondary text-white px-3 py-1 rounded-full text-sm hover:bg-secondary/90 transition-colors"
                  >
                    Reset
                  </button>
                </div>
                
                <div className="space-y-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                  {easterEggs.map(egg => (
                    <div 
                      key={egg.id}
                      className={`p-3 rounded-lg border flex items-center justify-between transition-colors ${
                        egg.discovered 
                          ? 'border-primary/30 bg-primary/5' 
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center">
                        {egg.discovered ? (
                          <Award className="h-5 w-5 text-primary mr-2" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-gray-300 mr-2"></div>
                        )}
                        <div>
                          {egg.discovered ? (
                            <div className="font-medium">{egg.message}</div>
                          ) : (
                            <div className="font-medium">???</div>
                          )}
                        </div>
                      </div>
                      <div className={`px-2 py-1 rounded text-xs font-bold ${
                        egg.discovered 
                          ? 'bg-primary text-white' 
                          : 'bg-gray-200 text-gray-500'
                      }`}>
                        {egg.points} pts
                      </div>
                    </div>
                  ))}
                </div>
                
                {discoveredCount === totalCount && (
                  <motion.div
                    className="mt-4 p-4 bg-secondary/20 rounded-lg text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h3 className="font-bold text-lg mb-1">🎉 Congratulations! 🎉</h3>
                    <p>You found all the easter eggs! You're a true April Fool's detective!</p>
                  </motion.div>
                )}
              </div>
              
              <div className="bg-gray-50 px-6 py-3 text-center text-xs text-gray-500">
                Click around the site to discover more Easter eggs!
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};