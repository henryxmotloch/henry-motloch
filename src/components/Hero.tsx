
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <p className="text-sm uppercase tracking-wider text-gray-600 mb-4">Junior Data Analyst</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-6">
            Transforming Data into 
            <span className="text-gray-800"> Actionable Insights</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Passionate about uncovering patterns and telling stories through data visualization
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </a>
    </section>
  );
};

export default Hero;
