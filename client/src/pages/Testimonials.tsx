import { motion } from "framer-motion";
import { Star, ThumbsUp, ThumbsDown } from "lucide-react";
import { testimonials } from "@/lib/data";
import { useState } from "react";
import { useEasterEggs } from "@/hooks/use-easter-eggs";

// Testimonial Easter Egg
const FakeReviewEasterEgg = ({ id }: { id: number }) => {
  const [revealed, setRevealed] = useState(false);
  const { discoverEasterEgg, isDiscovered } = useEasterEggs();
  const reviewEggDiscovered = isDiscovered('fake-review');
  
  const handleReveal = () => {
    setRevealed(true);
    if (!reviewEggDiscovered) {
      discoverEasterEgg('fake-review');
    }
  };
  
  if (!revealed && !reviewEggDiscovered) {
    return (
      <motion.div 
        className="absolute bottom-3 right-3 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleReveal}
      >
        <ThumbsUp className="w-5 h-5 text-gray-400 hover:text-primary" />
      </motion.div>
    );
  }
  
  return (
    <motion.div 
      className="absolute bottom-0 left-0 right-0 bg-red-50 p-3 border-t border-red-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <p className="text-xs text-red-500 font-medium flex items-center">
        <ThumbsDown className="w-4 h-4 mr-1" />
        This review is completely made up! Nobody has ever actually tried our sweets.
      </p>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-bold text-3xl md:text-4xl mb-3">What Customers <span className="text-primary">Say</span></h2>
          <p className="max-w-2xl mx-auto text-lg">People who switched from Pahala Rasgoola to Satapathy's Deserts</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 group">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="flex">
                  {Array(testimonial.stars).fill(0).map((_, i) => (
                    <Star key={i} className="text-secondary fill-secondary" size={16} />
                  ))}
                  {testimonial.stars < 5 && (
                    <Star className="text-secondary fill-secondary/50" size={16} />
                  )}
                </div>
              </div>
              <p className="italic mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                  {testimonial.initials}
                </div>
                <div className="ml-3">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                </div>
              </div>
              
              {/* April Fool's overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/0 hover:bg-primary/10">
                <div className="bg-primary p-3 rounded-full text-white font-bold transform rotate-[-30deg] opacity-0 hover:opacity-100">
                  April Fool's!
                </div>
              </div>
              
              {/* Easter Egg Component */}
              <FakeReviewEasterEgg id={testimonial.id} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
