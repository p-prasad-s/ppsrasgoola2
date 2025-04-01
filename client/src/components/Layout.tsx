import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { EasterEggTracker } from "./EasterEggTracker";
import { Toaster } from "./ui/toaster";
import { useKonami } from "@/hooks/use-konami";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Initialize Konami code detection
  useKonami();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <EasterEggTracker />
      <Toaster />
    </div>
  );
};

export default Layout;
