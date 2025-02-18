
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
    <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", 
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="w-1/2">
            {/* Left half intentionally left empty */}
          </div>
          <div className="w-1/2 flex items-center justify-between">
            <a href="#skills" className="text-sm hover:text-gray-600 transition-colors">Skills</a>
            <a href="#projects" className="text-sm hover:text-gray-600 transition-colors">Projects</a>
            <a href="#contact" className="text-sm hover:text-gray-600 transition-colors">Contact</a>
            <a 
              href="https://www.linkedin.com/in/henry-motloch/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm hover:text-gray-600 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
