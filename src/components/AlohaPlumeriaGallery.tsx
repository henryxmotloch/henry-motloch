
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AlohaPlumeriaGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const projectImages = [
    {
      src: "/lovable-uploads/df7432ba-f467-46db-8bcf-465a9846de6e.png",
      caption: "Cover Page - Aloha Plumeria 2023 Brand Guide",
      alt: "Cover page of the Aloha Plumeria brand guide showing the logo"
    },
    {
      src: "/lovable-uploads/8107645f-205f-45a7-9fdf-0aee91e9f9f8.png",
      caption: "Brand Personality and Mission",
      alt: "Brand personality keywords with description of the hotel's mission"
    },
    {
      src: "/lovable-uploads/ee36b185-b1cb-4af3-929d-558122915787.png",
      caption: "Resort Accommodation Photography",
      alt: "Collage of resort accommodations including beach and luxury rooms"
    },
    {
      src: "/lovable-uploads/f563e992-c7ca-42b3-8970-291965a9336c.png",
      caption: "Logo Development Process",
      alt: "Logo development showing different iterations and concepts"
    },
    {
      src: "/lovable-uploads/dfc1e144-b851-4b84-8633-81e60ae3ae5b.png",
      caption: "Logo Rationale and Symbolism",
      alt: "Explanation of logo elements and their symbolic meaning"
    },
    {
      src: "/lovable-uploads/141aea59-2605-4fe4-b12f-4d874bf0baa2.png",
      caption: "Logo on Orange Background",
      alt: "Aloha Plumeria logo displayed on orange background"
    },
    {
      src: "/lovable-uploads/ff937fd0-baaf-43cf-8596-3e58fe984b52.png",
      caption: "Logo on Purple Background",
      alt: "Aloha Plumeria logo displayed on purple background"
    },
    {
      src: "/lovable-uploads/9199615a-b049-4492-b461-851fa05ff16e.png",
      caption: "Typography Selection - Biko and Area Font Families",
      alt: "Typography choices showing Biko and Area font families"
    },
    {
      src: "/lovable-uploads/2056cbfa-a91b-4a43-a937-ef9f769a0ea9.png",
      caption: "Brand Color Palette",
      alt: "Color palette showing Pizazz Orange and Tapestry Purple with color codes"
    },
    {
      src: "/lovable-uploads/9ebd00e5-9ae7-4167-8171-070c4cd0a92a.png",
      caption: "Logo Variations and Graphics",
      alt: "Different variations of the Aloha Plumeria logo and graphic elements"
    },
    {
      src: "/lovable-uploads/af8b8418-fc36-48eb-b5e3-89687ca6817c.png",
      caption: "Thank You Page",
      alt: "Thank you page of the brand guide"
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
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-8">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-6 dark:text-white">
            Aloha Plumeria Brand Guide
          </h1>
          
          <div className="mb-8 text-gray-700 dark:text-gray-300">
            <p className="mb-4">
              A comprehensive brand identity developed for a luxury boutique hotel in Hawaii, featuring a 
              distinctive visual language that captures the essence of island hospitality and luxury.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm dark:text-gray-200">Branding</span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm dark:text-gray-200">Logo Design</span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm dark:text-gray-200">Typography</span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm dark:text-gray-200">Color Theory</span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-colors">
            <div className="relative">
              <img 
                src={projectImages[currentIndex].src} 
                alt={projectImages[currentIndex].alt}
                className="w-full object-contain max-h-[800px] transition-opacity"
                loading="lazy"
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
                <p className="text-gray-700 dark:text-gray-300">
                  {currentIndex + 1} / {projectImages.length}
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  {projectImages[currentIndex].caption}
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">Project Details</h2>
            <div className="prose max-w-none dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300">
                This brand identity project for Aloha Plumeria, a boutique hotel in Hawaii, focused on creating a 
                visual language that embodies the hotel's core values: charm, bohemian style, and refreshing hospitality.
              </p>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Key components of the brand identity include:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>A logo that combines a plumeria flower with butterfly wings, symbolizing transformation and renewal</li>
                <li>A color palette featuring warm orange tones and soft purples to represent sunrise and island flora</li>
                <li>Typography selections that balance modern simplicity with organic character</li>
                <li>Brand personality defined by keywords: Adventurous, Refreshing, Cozy, Charming, and Bohemian</li>
                <li>Pattern work and graphic elements inspired by local flora</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlohaPlumeriaGallery;
