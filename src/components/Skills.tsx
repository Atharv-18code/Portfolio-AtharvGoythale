import { motion } from 'framer-motion';
import { Code2, Globe, Server, Database, Briefcase, Users } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SQL", "JSON"],
      icon: Code2
    },
    {
      category: "Frontend",
      items: ["React.js", "Tailwind CSS", "Bootstrap", "Responsive Design"],
      icon: Globe
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Authentication"],
      icon: Server
    },
    {
      category: "Database",
      items: ["MongoDB", "MySQL", "Prisma ORM"],
      icon: Database
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code", "Postman", "Prisma Studio", "npm", "CI/CD"],
      icon: Briefcase
    },
    {
      category: "Soft Skills",
      items: ["Problem Solving", "Logical Thinking", "Teamwork", "Collaboration", "Time Management", "Adaptability", "English Communication", "Willingness to Learn"],
      icon: Users
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-3 sm:mb-4 gradient-text">Skills</h2>
          <div className="w-20 sm:w-24 h-1 primary-gradient mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skills.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:glow-blue transition-all"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Icon size={28} className="text-cyan-400" />
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 text-cyan-400 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
