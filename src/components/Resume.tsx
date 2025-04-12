
import React from 'react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col justify-center gap-8">
          <a 
            href="/lovable-uploads/fad15821-f70a-4319-917b-4b78a62b92ea.png" 
            download="Henry_Motloch_Resume_Page1.png"
            className="block shadow-lg hover:shadow-xl transition-shadow"
          >
            <img 
              src="/lovable-uploads/fad15821-f70a-4319-917b-4b78a62b92ea.png" 
              alt="Resume Page 1" 
              className="w-full object-contain border border-gray-200 rounded-lg"
            />
          </a>
          
          <a 
            href="/lovable-uploads/8596c227-07c0-4ccc-bb52-0a491d7cd925.png" 
            download="Henry_Motloch_Resume_Page2.png"
            className="block shadow-lg hover:shadow-xl transition-shadow"
          >
            <img 
              src="/lovable-uploads/8596c227-07c0-4ccc-bb52-0a491d7cd925.png" 
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
