
import { ChartBar, ChartLine, Database, Code2, GitBranch, Settings, Palette, Users } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Management",
      description: "Proficient in SQL, Excel, and database management for effective data organization and retrieval.",
    },
    {
      icon: <ChartLine className="w-6 h-6" />,
      title: "Data Visualization",
      description: "Creating compelling visualizations using Tableau and Power BI to communicate insights effectively.",
    },
    {
      icon: <ChartBar className="w-6 h-6" />,
      title: "Statistical Analysis",
      description: "Applying statistical methods to extract meaningful patterns and trends from complex datasets.",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Programming",
      description: "Experience with Python, VS Code, and various data analysis libraries for automation and analysis.",
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Project Management",
      description: "Leading cross-functional teams using JIRA, Trello, MS Teams, and Agile methodologies. Expertise in project documentation and planning.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Process Optimization",
      description: "Business analysis using SWOT, PESTEL, and process modeling. Creating user journeys and wireframes with Figma.",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Graphic Design",
      description: "Crafts clean, purpose-driven visuals rooted in brand strategy, print design, and storytelling for both digital and physical formats.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Management",
      description: "Leads high-performing teams with empathy and efficiency, balancing day-to-day operations with long-term team and customer success.",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-display font-semibold mb-4">Core Skills</h2>
          <p className="text-gray-600">
            Leveraging technical expertise to deliver data-driven solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-white mb-6">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
