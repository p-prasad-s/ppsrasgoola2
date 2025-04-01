import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { products } from "@/lib/data";

const Products = () => {
  return (
    <section id="products" className="py-16 bg-light">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-bold text-3xl md:text-4xl mb-3">Our Premium <span className="text-primary">Sweets</span></h2>
          <p className="max-w-2xl mx-auto text-lg">Taste the difference that makes us better than Pahala Rasgoola</p>
        </motion.div>
        
        {/* Featured Product */}
        <motion.div 
          className="bg-white rounded-xl shadow-xl overflow-hidden mb-16 group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 relative">
              <img 
                src="https://images.pexels.com/photos/14705144/pexels-photo-14705144.jpeg" 
                alt="Premium Rasgulla" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/10">
                <div className="bg-primary p-4 rounded-full text-white font-bold transform rotate-[-30deg]">
                  April Fool's!
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-secondary/20 text-primary font-semibold rounded-full text-sm mb-4">
                SIGNATURE SWEET
              </div>
              <h3 className="font-bold text-2xl md:text-3xl mb-3">Royal Pabani Rasgulla</h3>
              <p className="mb-6">Our signature dish that has people questioning their loyalty to Pahala. Soft, spongy, and melt-in-your-mouth goodness with a secret ingredient passed down through generations.</p>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className="text-secondary fill-secondary" size={16} />
                  ))}
                </div>
                <span className="text-sm">(143 reviews)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-bold text-2xl">₹299<span className="text-sm font-normal"> / kg</span></div>
                <button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-full transition-all transform hover:scale-105">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/10">
                  <div className="bg-primary p-3 rounded-full text-white font-bold text-sm transform rotate-[-30deg]">
                    April Fool's!
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <div className="font-bold text-xl">₹{product.price}<span className="text-sm font-normal"> / kg</span></div>
                  <button className="bg-primary/10 hover:bg-primary/20 text-primary font-semibold px-4 py-2 rounded-full transition-all">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button className="inline-block bg-secondary hover:bg-secondary/90 text-dark font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105">
            View All Sweets
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
