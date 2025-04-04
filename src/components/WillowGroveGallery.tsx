
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WillowGroveGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const projectImages = [
    {
      src: "/lovable-uploads/deef486c-1bd2-45c7-bf19-2a5643b472dd.png",
      caption: "Cover Page - Willow Grove Stationery Package",
      alt: "Willow Grove logo with stationery package title"
    },
    {
      src: "/lovable-uploads/474e068e-831a-4676-b386-846da073dfbc.png",
      caption: "Business Card Design",
      alt: "Business card design for Sienna Volpati, senior vice president"
    },
    {
      src: "/lovable-uploads/498535bd-c338-42d7-9fa5-d21cccc37701.png",
      caption: "Business Cards Specifications",
      alt: "Business cards specifications showing 3.5\" x 2\" dimensions"
    },
    {
      src: "/lovable-uploads/56cf5c82-6bfe-47d1-b29f-95d5588587de.png",
      caption: "Letterhead Design",
      alt: "Full letterhead design with sample text describing the eco-friendly community"
    },
    {
      src: "/lovable-uploads/44a3c64e-6643-442e-adae-6877916c71a3.png",
      caption: "Envelope Design",
      alt: "Envelope design showing #10 envelope with dimensions 9.5\" x 4.125\""
    },
    {
      src: "/lovable-uploads/565dae29-9f61-4aac-97df-496046b388d5.png",
      caption: "Complete Stationery Suite Mockup",
      alt: "Complete stationery suite showing letterhead, business cards and envelopes together"
    },
    {
      src: "/lovable-uploads/8bb401a2-8f07-44df-9874-cdf22556d86c.png",
      caption: "Color Palette Rationale",
      alt: "Color palette showing Saratoga, Crete and Chrome White color chips with hex codes"
    },
    {
      src: "/lovable-uploads/f500fbfb-7134-4a90-841a-8bdb74f4f7b9.png",
      caption: "Font Choices Rationale",
      alt: "Font selection showing Questa Sans Medium, Questa Grande Bold and Questa Grande Medium"
    },
    {
      src: "/lovable-uploads/8162a5bb-deb3-4ba1-acff-890c0d9cdb7b.png",
      caption: "Logo Development Process",
      alt: "Process of logo development showing sketches to final logo design"
    },
    {
      src: "/lovable-uploads/b2a8c650-552c-415a-b4a3-ee567274f96d.png",
      caption: "Final Logo Design",
      alt: "Final willow grove logo design with rationale"
    },
    {
      src: "/lovable-uploads/3c725237-4a76-4ea9-a593-08e8987874eb.png",
      caption: "Design Rationale and Explanation",
      alt: "Detailed explanation of logo design and color choices"
    }
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projectImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900 flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Willow Grove Stationery Package
          </h1>
          
          <div className="mb-8 text-gray-700">
            <p className="mb-4">
              A cohesive stationery suite designed for a sustainable townhouse development, 
              featuring a minimal, eco-friendly aesthetic with nature-inspired colors and typography.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Print Design</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Identity</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Eco-Friendly</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Logo Design</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative">
              <img 
                src={projectImages[currentIndex].src} 
                alt={projectImages[currentIndex].alt}
                className="w-full object-contain max-h-[800px]"
              />
              
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button 
                  onClick={goToPrevious}
                  className="bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
                  aria-label="Previous image"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={goToNext}
                  className="bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
                  aria-label="Next image"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between">
                <p className="text-gray-700">
                  {currentIndex + 1} / {projectImages.length}
                </p>
                <p className="text-gray-700 font-medium">
                  {projectImages[currentIndex].caption}
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
            <div className="prose max-w-none">
              <p>
                This project involved creating a complete stationery package for Willow Grove, an eco-friendly 
                townhouse development that prioritizes sustainability and community. The design reflects the 
                brand's commitment to environmental values through thoughtful color choices, minimal design, 
                and nature-inspired elements.
              </p>
              <p className="mt-4">
                The stationery suite includes:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Business cards showcasing the willow tree logo on a light green background</li>
                <li>Letterhead with comprehensive community information and contact details</li>
                <li>#10 envelope with strategic logo placement for brand recognition</li>
                <li>A color palette featuring Saratoga and Crete greens with Chrome White for balance</li>
                <li>Typography selection of Questa Sans and Questa Grande fonts for their organic yet refined character</li>
                <li>Logo design depicting a willow tree that symbolizes growth, sustainability, and community</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WillowGroveGallery;
