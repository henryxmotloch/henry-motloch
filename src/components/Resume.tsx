
import React from 'react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Henry Motloch's Resume</h1>
          <p className="mt-2 text-gray-600">Click on any page to download the full PDF</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
          <a 
            href="/lovable-uploads/63cd02b9-7da5-4c04-a423-3a52e34f1685.png" 
            download="Henry_Motloch_Resume_Page1.png"
            className="block shadow-lg hover:shadow-xl transition-shadow"
          >
            <img 
              src="/lovable-uploads/63cd02b9-7da5-4c04-a423-3a52e34f1685.png" 
              alt="Resume Page 1" 
              className="w-full object-contain border border-gray-200 rounded-lg"
            />
          </a>
          
          <a 
            href="/lovable-uploads/dfc1e144-b851-4b84-8633-81e60ae3ae5b.png" 
            download="Henry_Motloch_Resume_Page2.png"
            className="block shadow-lg hover:shadow-xl transition-shadow"
          >
            <img 
              src="/lovable-uploads/dfc1e144-b851-4b84-8633-81e60ae3ae5b.png" 
              alt="Resume Page 2" 
              className="w-full object-contain border border-gray-200 rounded-lg"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
