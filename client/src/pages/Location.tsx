import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const Location = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-bold text-3xl md:text-4xl mb-3">Visit Our <span className="text-primary">Shop</span></h2>
          <p className="max-w-2xl mx-auto text-lg">Come experience the taste that's making waves across the region</p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-light p-6 rounded-lg shadow-md mb-6">
              <h3 className="font-semibold text-xl mb-4">Store Address</h3>
              <p className="mb-2 flex items-center">
                <MapPin className="text-primary mr-2 h-5 w-5" />
                <span>Firestation, Dessert District</span>
              </p>
              <p className="mb-2 flex items-center">
                <Phone className="text-primary mr-2 h-5 w-5" />
                <span>+91 7846917558</span>
              </p>
              <p className="mb-4 flex items-center">
                <Mail className="text-primary mr-2 h-5 w-5" />
                <span>pawani2k20@gmail.com</span>
              </p>
              <h4 className="font-medium text-lg mb-2">Hours:</h4>
              <p className="mb-1">Monday - Saturday: 9:00 AM - 8:00 PM</p>
              <p>Sunday: 10:00 AM - 6:00 PM</p>
            </div>
            
            <motion.div 
              className="bg-secondary/10 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-semibold text-xl mb-4">Get in Touch</h3>
              <form>
                <div className="mb-4">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div className="mb-4">
                  <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div className="mb-4">
                  <textarea rows={3} placeholder="Your Message" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                </div>
                <button type="submit" className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-full transition-all transform hover:scale-105 w-full">
                  Send Message
                </button>
              </form>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 order-first md:order-last mb-8 md:mb-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-lg overflow-hidden shadow-xl relative group">
              <img 
                src="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg" 
                alt="Pabani's Deserts Store" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="bg-white/90 px-8 py-6 rounded-lg shadow-lg"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: -6 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="font-bold text-3xl text-primary mb-1">PABANI'S</h3>
                  <p className="font-semibold text-xl">DESERTS</p>
                </motion.div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/10">
                <div className="bg-primary p-3 rounded-full text-white font-bold transform rotate-[-30deg]">
                  April Fool's!
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
