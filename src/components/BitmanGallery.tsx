import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BitmanGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const projectImages = [
    {
      src: "/lovable-uploads/a0c6f826-fb3f-4f94-a942-e220a591aefe.png",
      caption: "BITMAN MVP Dashboard",
      alt: "BITMAN MVP Dashboard showing data visualization"
    },
    {
      src: "/lovable-uploads/142111a7-b12c-463e-8ae3-341527871d01.png",
      caption: "Program Performance Overview",
      alt: "Overview of program performance metrics"
    },
    {
      src: "/lovable-uploads/2af5f087-e34e-44d0-9860-dea9b6f5f5e5.png",
      caption: "Student Achievement Tracking",
      alt: "Student achievement metrics and performance indicators"
    },
    {
      src: "/lovable-uploads/59633ec1-2286-4440-82d7-71a99dcd6465.png",
      caption: "Faculty Assessment Dashboard",
      alt: "Faculty assessment and performance metrics"
    },
    {
      src: "/lovable-uploads/73d7bbf9-eb20-42e0-a0c6-a6cf659913b5.png",
      caption: "Program Improvement Recommendations",
      alt: "Recommendations for program improvement based on data analysis"
    },
    {
      src: "/lovable-uploads/87d3880a-4714-48b3-af78-24c20d610c86.png",
      caption: "Curriculum Gap Analysis",
      alt: "Analysis of gaps between curriculum and industry requirements"
    },
    {
      src: "/lovable-uploads/92f121c7-0724-4e49-a239-4f60eb7fb828.png",
      caption: "Stakeholder Feedback Integration",
      alt: "Dashboard showing how stakeholder feedback is integrated"
    },
    {
      src: "/lovable-uploads/9d84dc41-bd70-4acb-be89-e2015f9126b1.png",
      caption: "Longitudinal Trend Analysis",
      alt: "Analysis of trends over time in program performance"
    },
    {
      src: "/lovable-uploads/b0c5955c-6044-49c3-8d97-8fb3e59974fe.png",
      caption: "Industry Partnership Metrics",
      alt: "Metrics tracking industry partnerships and engagement"
    },
    {
      src: "/lovable-uploads/c273ea5c-2b40-4747-940c-730654e29e45.png",
      caption: "Resource Allocation Overview",
      alt: "Overview of resource allocation across program components"
    },
    {
      src: "/lovable-uploads/d26cdffa-2861-412f-9634-7a0cc0fde68f.png",
      caption: "Course-Level Assessment Data",
      alt: "Detailed assessment data at the course level"
    },
    {
      src: "/lovable-uploads/e21cb63e-3362-46a2-b680-f8fea494097f.png",
      caption: "Program Learning Outcome Alignment",
      alt: "Alignment between program learning outcomes and assessments"
    },
    {
      src: "/lovable-uploads/e23da353-cf2f-4dbd-a65f-38ce36843e9b.png",
      caption: "Student Progress Visualization",
      alt: "Visual representation of student progress through the program"
    },
    {
      src: "/lovable-uploads/effb4be1-77d5-4da5-b077-ff039de6faf5.png",
      caption: "Competency Framework Mapping",
      alt: "Mapping of curriculum to competency frameworks"
    },
    {
      src: "/lovable-uploads/f7c9f275-16ee-43b4-adf1-734c2cbbf652.png",
      caption: "Data Collection Methodology",
      alt: "Explanation of data collection methodology for the dashboard"
    },
    {
      src: "/lovable-uploads/104020fa-8d99-46ec-8459-eab05eb4c771.png",
      caption: "Executive Summary of Findings",
      alt: "Executive summary of key findings from the dashboard analysis"
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
            BITMAN MVP Dashboard
          </h1>
          
          <div className="mb-8 text-gray-700 dark:text-gray-300">
            <p className="mb-4">
              A comprehensive Power BI dashboard designed to align curriculum goals with industry standards,
              providing valuable insights for students, faculty, and educational institutions.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm dark:text-gray-200">Power BI</span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm dark:text-gray-200">Education</span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm dark:text-gray-200">Data Analysis</span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm dark:text-gray-200">Curriculum Design</span>
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
                The BITMAN MVP is a Power BI dashboard project that addresses the critical need for
                alignment between educational curriculum and industry requirements. The dashboard provides
                a clear visualization of how program outcomes map to industry standards, helping all
                stakeholders understand the relevance and effectiveness of educational programs.
              </p>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Key features include:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Curriculum mapping to industry competency frameworks</li>
                <li>Student achievement tracking against program outcomes</li>
                <li>Faculty assessment tools for continuous improvement</li>
                <li>Gap analysis between curriculum design and industry needs</li>
                <li>Longitudinal performance tracking over multiple program cycles</li>
                <li>Resource allocation visualization for program optimization</li>
                <li>Stakeholder feedback integration and actionable insights</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitmanGallery;
