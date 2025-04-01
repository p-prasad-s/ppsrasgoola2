import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-secondary/10">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-bold text-3xl md:text-4xl mb-3">Our Sweet <span className="text-primary">Story</span></h2>
          <p className="max-w-2xl mx-auto text-lg">How we became the best sweet shop in the region (even better than Pahala Rasgoola!)</p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-lg overflow-hidden shadow-xl group">
              <img 
                src="https://images.pexels.com/photos/3992131/pexels-photo-3992131.jpeg" 
                alt="Pabani's Desert Shop Interior" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/10">
                <div className="bg-primary p-4 rounded-full text-white font-bold transform rotate-[-30deg]">
                  April Fool's!
                </div>
              </div>
            </div>
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg transform rotate-3 hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/4553031/pexels-photo-4553031.jpeg" 
                alt="Chef Making Sweets" 
                className="w-32 h-32 object-cover rounded"
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-semibold text-2xl mb-4">Revolutionizing the Sweet Industry</h3>
            <p className="mb-4">Founded in 2023, <strong>Pabani's Deserts</strong> began with a simple mission: to create the most delectable sweets that would outshine even the famous Pahala Rasgoola.</p>
            <p className="mb-4">Our founder, inspired by traditional recipes but driven by innovation, perfected the art of sweet-making through years of dedicated research and taste-testing.</p>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="italic">"My grandmother always said my sweets were better than any shop she'd ever visited. One day, I decided to prove it to the world!"</p>
              <p className="font-semibold mt-2">- Pabani, Founder</p>
            </motion.div>
            <div className="flex items-center gap-6 mt-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="font-bold text-3xl text-primary">100+</div>
                <div className="text-sm">Varieties</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="font-bold text-3xl text-primary">3</div>
                <div className="text-sm">Generations</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="font-bold text-3xl text-primary">1000+</div>
                <div className="text-sm">Happy Customers</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
