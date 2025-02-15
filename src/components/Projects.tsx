
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Sales Data Analysis",
      description: "Analyzed historical sales data to identify trends and opportunities for growth.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["SQL", "Tableau", "Excel"],
    },
    {
      title: "Customer Segmentation",
      description: "Developed customer segments based on purchasing behavior and demographics.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["Python", "Power BI", "Statistics"],
    },
    {
      title: "Market Research Dashboard",
      description: "Created interactive dashboard for real-time market insights.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["Tableau", "Data Visualization"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-display font-semibold mb-4">Featured Projects</h2>
          <p className="text-gray-600">
            A selection of my recent data analysis work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <a
                  href="#"
                  className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
