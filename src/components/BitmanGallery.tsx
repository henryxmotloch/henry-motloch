
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BitmanGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const projectImages = [
    {
      src: "/lovable-uploads/a1d767bd-84f0-4193-b736-0d3d6785d851.png",
      caption: "Cover Page - BITMAN MVP Project",
      alt: "Cover page of the BITMAN MVP project"
    },
    {
      src: "/lovable-uploads/59633ec1-2286-4440-82d7-71a99dcd6465.png",
      caption: "Contents Page",
      alt: "Table of contents showing project structure"
    },
    {
      src: "/lovable-uploads/5be4747d-5077-41f9-b34f-f83a029cb365.png",
      caption: "Executive Summary",
      alt: "Executive summary of the BITMAN MVP project"
    },
    {
      src: "/lovable-uploads/104020fa-8d99-46ec-8459-eab05eb4c771.png",
      caption: "Tool: Skill Taxonomy Tree – By Count",
      alt: "Description of the skill taxonomy tree tool"
    },
    {
      src: "/lovable-uploads/e23da353-cf2f-4dbd-a65f-38ce36843e9b.png",
      caption: "Taxonomy Tree – By Count",
      alt: "Visual representation of taxonomy tree by count"
    },
    {
      src: "/lovable-uploads/9d84dc41-bd70-4acb-be89-e2015f9126b1.png",
      caption: "Taxonomy Tree – By Pay",
      alt: "Visual representation of taxonomy tree by pay"
    },
    {
      src: "/lovable-uploads/142111a7-b12c-463e-8ae3-341527871d01.png",
      caption: "Tool: Skill Taxonomy Dictionary",
      alt: "Description of the skill taxonomy dictionary"
    },
    {
      src: "/lovable-uploads/c273ea5c-2b40-4747-940c-730654e29e45.png",
      caption: "Skill Taxonomy Dictionary Example",
      alt: "Example of the skill taxonomy dictionary in use"
    },
    {
      src: "/lovable-uploads/b0c5955c-6044-49c3-8d97-8fb3e59974fe.png",
      caption: "Tool: Salary Impact of Skills",
      alt: "Dashboard showing salary impact of different skills"
    },
    {
      src: "/lovable-uploads/87d3880a-4714-48b3-af78-24c20d610c86.png",
      caption: "Combined Usage Demonstration: Product Data Management",
      alt: "Demonstration of combined tool usage for product data management"
    },
    {
      src: "/lovable-uploads/92f121c7-0724-4e49-a239-4f60eb7fb828.png",
      caption: "Product Data Management Interactive View",
      alt: "Interactive view of product data management taxonomy"
    },
    {
      src: "/lovable-uploads/e21cb63e-3362-46a2-b680-f8fea494097f.png",
      caption: "Taxonomy Tree Visualization",
      alt: "Visualization of the taxonomy tree structure"
    },
    {
      src: "/lovable-uploads/f7c9f275-16ee-43b4-adf1-734c2cbbf652.png",
      caption: "Tool: Course Coordination and Learning Outcomes",
      alt: "Dashboard for course coordination and learning outcomes"
    },
    {
      src: "/lovable-uploads/effb4be1-77d5-4da5-b077-ff039de6faf5.png",
      caption: "Course Coordination Continued",
      alt: "Additional course coordination information"
    },
    {
      src: "/lovable-uploads/2af5f087-e34e-44d0-9860-dea9b6f5f5e5.png",
      caption: "Conclusion",
      alt: "Conclusion of the BITMAN MVP project"
    },
    {
      src: "/lovable-uploads/73d7bbf9-eb20-42e0-a0c6-a6cf659913b5.png",
      caption: "Appendix: Data Source",
      alt: "Data sources used in the project"
    },
    {
      src: "/lovable-uploads/d26cdffa-2861-412f-9634-7a0cc0fde68f.png",
      caption: "AI Model and Data Process",
      alt: "Description of AI models and data processes used"
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
            BITMAN MVP
          </h1>
          
          <div className="mb-8 text-gray-700">
            <p className="mb-4">
              A Power BI dashboard that aligns curriculum goals with industry standards, helping students, faculty, and schools improve program clarity. This project provides an interactive dictionary and taxonomy framework for curriculum optimization.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Power BI</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Education</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Data Analysis</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Curriculum Design</span>
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
                This research project delivers a Power BI dashboard as the enabling tool, providing an 
                interactive dictionary that enhances curriculum clarity. The dashboard was developed through 
                the innovative integration of two recognized industry standards, ensuring alignment between 
                student learning outcomes, faculty instruction, and industry demands.
              </p>
              <p className="mt-4">
                Key features include:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Skill Taxonomy Tree that organizes fragmented concepts and provides clarity in curriculum design</li>
                <li>Taxonomy visualization by count and by pay to understand skill distribution and earning potential</li>
                <li>Skill Taxonomy Dictionary to ensure clear and field-specific definitions</li>
                <li>Salary Impact of Skills dashboard showing relationship between skill frequency and financial value</li>
                <li>Course Coordination tools to identify gaps and align learning outcomes across courses</li>
              </ul>
              <p className="mt-4">
                By leveraging data science techniques, this dashboard offers a dynamic and actionable resource for 
                curriculum optimization, helping institutions systematically define program direction, instructors 
                gain clearer insights into course learning outcomes, and students develop greater confidence in 
                articulating their skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitmanGallery;
