
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex w-1/2 items-center justify-between">
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
        
        {/* Mobile navigation menu - positioned on the right directly under the button */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute right-0 mt-2 w-full px-6">
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col py-2">
                <a 
                  href="#skills" 
                  className="text-sm hover:text-gray-900 hover:bg-gray-100 px-4 py-3 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Skills
                </a>
                <a 
                  href="#projects" 
                  className="text-sm hover:text-gray-900 hover:bg-gray-100 px-4 py-3 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a 
                  href="#contact" 
                  className="text-sm hover:text-gray-900 hover:bg-gray-100 px-4 py-3 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <a 
                  href="https://www.linkedin.com/in/henry-motloch/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm hover:text-gray-900 hover:bg-gray-100 px-4 py-3 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
