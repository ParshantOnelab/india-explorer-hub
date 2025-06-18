
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-900 to-blue-700">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-900 font-bold text-xl">TR</span>
            </div>
            <span className="text-white font-bold text-xl">Travel Rajasthan</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-blue-200 transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-blue-200 transition-colors">About</a>
            <a href="#gallery" className="text-white hover:text-blue-200 transition-colors">Gallery</a>
            <a href="#testimonials" className="text-white hover:text-blue-200 transition-colors">Reviews</a>
            <a href="#contact" className="text-white hover:text-blue-200 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-blue-900 bg-opacity-95 p-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-blue-200 transition-colors">Home</a>
              <a href="#about" className="text-white hover:text-blue-200 transition-colors">About</a>
              <a href="#gallery" className="text-white hover:text-blue-200 transition-colors">Gallery</a>
              <a href="#testimonials" className="text-white hover:text-blue-200 transition-colors">Reviews</a>
              <a href="#contact" className="text-white hover:text-blue-200 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover the Magic of
            <span className="block text-yellow-400">Incredible India</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience authentic local culture, breathtaking landscapes, and unforgettable adventures with our expert local guides
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              View Packages
            </button>
          </div>
        </div>
      </div>

      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=5616&q=80')"
        }}
      />
    </div>
  );
};

export default Hero;
