
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-lg font-display font-semibold">
            Data Analyst
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm hover:text-gray-600 transition-colors">About</a>
            <a href="#skills" className="text-sm hover:text-gray-600 transition-colors">Skills</a>
            <a href="#projects" className="text-sm hover:text-gray-600 transition-colors">Projects</a>
            <a href="#contact" className="text-sm hover:text-gray-600 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
