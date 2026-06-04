import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import eventiaThumbnail from '../assets/eventia.svg';

const Projects = () => {
  const projects = [
    {
      title: "EVENTIA – Event Management Platform",
      thumbnail: eventiaThumbnail,
      tech: ["React.js", "TypeScript", "Node.js", "MongoDB", "Prisma", "Tailwind CSS"],
      description: "Developed an event planning platform that simplifies venue discovery, vendor coordination, service comparison, bookings, and smart scheduling. Designed to improve communication between clients and organizers while streamlining event management processes.",
      features: ["Venue Search", "Vendor Management", "Event Scheduling", "Ticket Booking", "User Authentication"],
      github: "https://github.com/Atharv-18code",
      demo: "#"
    },
    {
      title: "GramArogya – AI Based Rural Healthcare System",
      tech: ["React.js", "FastAPI", "SQL", "JWT Authentication", "AI", "Tailwind CSS"],
      description: "Developing a rural healthcare platform that connects health workers, patients, and medical facilities through multilingual AI assistance and real-time healthcare data synchronization.",
      features: ["AI Health Assistant", "Health Surveys", "Real-time Sync", "Multi-language Support", "Patient Management"],
      highlight: "🏆 Hackathon Project | Team Lead",
      github: "https://github.com/Atharv-18code",
      demo: "#"
    },
    {
      title: "Eco-Marketplace",
      tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
      description: "A sustainable e-commerce platform promoting eco-friendly products and responsible shopping. Enables vendors to list green alternatives while improving product discovery and checkout experiences.",
      features: ["Product Catalog", "Vendor Dashboard", "Shopping Cart", "Order Management", "Responsive UI"],
      github: "https://github.com/Atharv-18code",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-3 sm:mb-4 gradient-text">Projects</h2>
          <div className="w-20 sm:w-24 h-1 primary-gradient mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card-2 rounded-xl sm:rounded-2xl overflow-hidden hover:glow-purple transition-all group"
            >
              {project.thumbnail ? (
                <div className="h-36 sm:h-48 primary-gradient flex items-center justify-center">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="h-36 sm:h-48 primary-gradient flex items-center justify-center">
                  <Code2 size={64} className="text-white opacity-50" />
                </div>
              )}
              <div className="p-4 sm:p-6">
                {project.highlight && (
                  <span className="inline-block px-2.5 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-3">
                    {project.highlight}
                  </span>
                )}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-text-primary mb-2 sm:mb-3 gradient-text">{project.title}</h3>
                <p className="text-text-secondary mb-3 sm:mb-4 text-sm sm:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 text-cyan-400 rounded text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.features.map((f, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-800/50 text-text-muted rounded text-xs">
                      {f}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 btn-gradient text-white rounded-lg font-medium hover:glow-blue transition-all flex-1 sm:flex-none"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 glass-card text-text-primary border border-purple-500/20 rounded-lg font-medium hover:border-purple-400 hover:glow-purple transition-all flex-1 sm:flex-none"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
