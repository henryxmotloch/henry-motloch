
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: "Power BI Dashboard for Prospective Homeowners",
      description: "Developed an interactive dashboard that helps prospective homeowners compare neighborhoods by VPD crime rates. Utilized SQL and Excel for data cleaning and modeling, achieving actionable insights for sales optimization.",
      image: "/lovable-uploads/974c6d4e-0b3e-4ff3-a16b-f27cd38e9d40.png",
      tags: ["Power BI", "SQL", "Excel"],
      url: "/projects/power-bi-dashboard", 
      isInternalLink: true,
    },
    {
      title: "Aloha Plumeria Brand Guide",
      description: "Developed a full brand identity for a boutique hotel, reflecting luxury and island warmth through typography, color, and logo design.",
      image: "/lovable-uploads/dfc1e144-b851-4b84-8633-81e60ae3ae5b.png",
      tags: ["Branding", "Logo Design", "Typography"],
      url: "/projects/aloha-plumeria",
      isInternalLink: true,
    },
    {
      title: "Willow Grove Stationery Package",
      description: "Designed a full stationery suite for a sustainable townhouse brand, using minimal design and nature-inspired colors to convey eco values.",
      image: "/lovable-uploads/deef486c-1bd2-45c7-bf19-2a5643b472dd.png",
      tags: ["Print Design", "Identity", "Eco-Friendly"],
      url: "/projects/willow-grove", 
      isInternalLink: true,
    },
    {
      title: "BITMAN MVP",
      description: "Built a Power BI dashboard aligning curriculum goals with industry standards, helping students, faculty, and schools improve program clarity.",
      image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      tags: ["Power BI", "Education", "Data Analysis"],
      url: "https://github.com/yourusername/bitman-mvp", 
      isInternalLink: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-display font-semibold mb-4">Featured Projects</h2>
          <p className="text-gray-600">
            A showcase of my data analysis and business optimization work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.isInternalLink ? (
                  <Link
                    to={project.url}
                    className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                ) : (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
