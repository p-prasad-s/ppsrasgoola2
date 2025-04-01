import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for the app
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'April Fool\'s Day Joke Server is running!' });
  });

  // This is a joke website, so we don't need any real API functionality
  // But we'll add these routes for completeness
  app.get('/api/products', (req, res) => {
    res.json({
      products: [
        {
          id: 1,
          name: "Classic Rasgulla",
          description: "Traditional recipe with our special twist that makes it softer and juicier than any other.",
          price: 249,
          image: "https://images.pexels.com/photos/7449136/pexels-photo-7449136.jpeg"
        },
        {
          id: 2,
          name: "Saffron Delights",
          description: "Premium saffron-infused sweet treats that simply outshine anything from Pahala.",
          price: 399,
          image: "https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg"
        },
        {
          id: 3,
          name: "Pistachio Treats",
          description: "Rich pistachio-flavored sweets that are a customer favorite and completely unique to our shop.",
          price: 349,
          image: "https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg"
        }
      ]
    });
  });

  app.get('/api/testimonials', (req, res) => {
    res.json({
      testimonials: [
        {
          id: 1,
          name: "Rahul Mishra",
          initials: "RM",
          title: "Sweet Enthusiast",
          text: "\"I never thought I'd find anything better than Pahala Rasgoola until I tried Satapathy's. The softness, the sweetness - it's simply incomparable!\"",
          stars: 5
        },
        {
          id: 2,
          name: "Ananya Patel",
          initials: "AP",
          title: "Food Critic",
          text: "\"As someone who grew up with Pahala sweets, I was skeptical at first. But Satapathy's has converted me completely. Their rasgullas are simply divine!\"",
          stars: 5
        },
        {
          id: 3,
          name: "Vikram Kumar",
          initials: "VK",
          title: "Loyal Customer",
          text: "\"I've been buying sweets for my family for decades, and I can confidently say that Satapathy's has redefined what quality sweets should taste like.\"",
          stars: 4
        }
      ]
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
