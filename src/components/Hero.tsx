
import { ChevronDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <Avatar className="w-48 h-48 border-4 border-white shadow-lg">
              <AvatarImage src="/lovable-uploads/1139eff2-4f0b-4af7-8817-cc6daf689ad8.png" alt="Henry Motloch" />
              <AvatarFallback>HM</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left">
              <p className="text-sm uppercase tracking-wider text-gray-600 mb-2">Business IT Management | Data Analytics</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-4">
                Henry Motloch
              </h1>
              <p className="text-lg text-gray-600">
                Process Optimization Specialist
              </p>
            </div>
          </div>
          
          <div className="prose max-w-none text-gray-600 mb-8">
            <p className="mb-4">
              A results-driven taskmaster with a keen eye for efficiency, quality assurance, and project execution, I specialize in streamlining processes, optimizing workflows, and ensuring data integrity. With a diploma in Business IT Management from BCIT (GPA 4.0) and hands-on experience in Power BI, SQL, and ERP systems, I excel at data cleaning, modeling, and compliance.
            </p>
            <p className="mb-4">
              I thrive in fast-paced environments where attention to detail and strategic oversight are crucial. My leadership experience as a Day Manager at Earls Kitchen and Bar has honed my ability to coordinate teams, enforce standards, and drive performance.
            </p>
            <p className="font-semibold">
              🔹 Strengths: Data analysis, quality control, business intelligence, process optimization, and leadership.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <a
        href="#skills"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </a>
    </section>
  );
};

export default Hero;
