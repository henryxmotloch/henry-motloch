
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const projectImages = [
    {
      src: "/lovable-uploads/b4cc085e-5339-48a6-8612-5ad0c857464d.png",
      caption: "Cover Page - BSYS-3205 Business Intelligence 1",
      alt: "Cover page of the VPD Crime Statistics project"
    },
    {
      src: "/lovable-uploads/2d4f89a0-ad78-47d5-b66a-142749428bed.png",
      caption: "Table of Contents",
      alt: "Table of Contents showing the project structure"
    },
    {
      src: "/lovable-uploads/e247a7cf-eb57-4a02-bdd2-d435f6fdbddb.png",
      caption: "Background of the Crime Statistics Analysis",
      alt: "Background section detailing the project's purpose"
    },
    {
      src: "/lovable-uploads/05880f1d-74ed-422f-9e8e-b5b485de912f.png",
      caption: "Executive Summary and Recommendations",
      alt: "Executive Summary and initial recommendations"
    },
    {
      src: "/lovable-uploads/10522d66-a5ab-4c8e-9344-ffe94ff47479.png",
      caption: "Data Used in the Analysis",
      alt: "Description of datasets used for analysis"
    },
    {
      src: "/lovable-uploads/e0828e2f-5b85-465c-8942-7268af91b105.png",
      caption: "Dashboard: Crime Incident Density and Distribution",
      alt: "Dashboard showing crime incident density across Vancouver"
    },
    {
      src: "/lovable-uploads/004c0553-e7d5-4338-906f-8b187d57a3d4.png",
      caption: "Correlation between Extreme Crimes and Petty Crimes",
      alt: "Analysis of correlation between extreme and petty crimes"
    },
    {
      src: "/lovable-uploads/35f2875f-a6c7-4039-86fe-a19e33f42e67.png",
      caption: "Crime Environment Analysis (2021-2023)",
      alt: "Analysis of recent crime environment in Vancouver"
    },
    {
      src: "/lovable-uploads/5659838e-4e47-4f18-a814-f600f9c69fbe.png",
      caption: "Correlation between Property Crimes and Violent Crimes",
      alt: "Analysis of correlation between property crimes and violent crimes"
    },
    {
      src: "/lovable-uploads/7539be80-dfa1-4569-97c2-504a75271a12.png",
      caption: "Dashboard: Percentage of 'Mischief' Among All Crime Types",
      alt: "Dashboard showing percentage of mischief crimes"
    },
    {
      src: "/lovable-uploads/8a4b5943-79b0-4333-831c-876b2068cab7.png",
      caption: "Trends and Neighborhood Analysis",
      alt: "Analysis of crime trends by neighborhood"
    },
    {
      src: "/lovable-uploads/7ce8fb25-7f47-4907-86ad-914a64d81ec5.png",
      caption: "Dashboard: Prevalence of Crime and Proximity to Homeless Shelter",
      alt: "Analysis of crime proximity to homeless shelters"
    },
    {
      src: "/lovable-uploads/bb13db8e-3e43-4c09-bff1-66f06824a92b.png",
      caption: "Prevalence of Crime and Proximity to Special Businesses",
      alt: "Analysis of crime proximity to special businesses"
    },
    {
      src: "/lovable-uploads/c7cda9f1-4a95-482f-8ad0-62bdad2de646.png",
      caption: "Limitations and Cautions",
      alt: "Research limitations and cautions"
    },
    {
      src: "/lovable-uploads/422032f8-78a4-4b19-9288-53fb4e569f45.png",
      caption: "Appendix: Data Sources",
      alt: "Appendix showing data sources"
    },
    {
      src: "/lovable-uploads/5a72276d-726c-45df-b2cf-6f071da5b152.png",
      caption: "Data Cleaning Steps",
      alt: "Description of data cleaning process"
    },
    {
      src: "/lovable-uploads/87edc18c-180a-4d99-933f-b5f3a20f82df.png",
      caption: "Further Data Processing Steps",
      alt: "Additional data processing steps"
    },
    {
      src: "/lovable-uploads/0446f147-433e-4a4c-909e-bc8679002ddf.png",
      caption: "Data Iteration and Analysis",
      alt: "Methodology for data iteration"
    },
    {
      src: "/lovable-uploads/a7bc19a9-78d6-45e4-9df7-d7ff4dc74cbe.png",
      caption: "Entity Relationship Diagram",
      alt: "ERD showing the database structure"
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
            Power BI Dashboard for Prospective Homeowners
          </h1>
          
          <div className="mb-8 text-gray-700">
            <p className="mb-4">
              A comprehensive analysis of crime statistics in Vancouver, designed to help prospective 
              homeowners make informed decisions about neighborhood safety. This project was completed 
              as part of the BSYS-3205 Business Intelligence 1 course.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Power BI</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">SQL</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Excel</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Data Visualization</span>
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
                This project analyzed crime statistics in Vancouver from 2003 to 2024, using data from the Vancouver 
                Police Department. Our team created interactive Power BI dashboards to help prospective homeowners 
                compare neighborhoods by crime rates, severity, and trends.
              </p>
              <p className="mt-4">
                Key findings included:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>No significant increase in total crime incident counts since 2003</li>
                <li>No observed correlation between petty crimes and extreme crimes</li>
                <li>Crime severity in Vancouver has steadily decreased over the years</li>
                <li>Strong evidence of higher theft prevalence near homeless shelters</li>
                <li>No evidence supporting higher crime rates near special businesses</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
