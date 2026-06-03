import { motion } from 'framer-motion';
import { Briefcase, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "MERN Stack Intern",
      company: "Scalefull Technologies",
      period: "Dec 2024 – Feb 2025",
      points: [
        "Completed a 45-day MERN Stack Development Program.",
        "Worked with MongoDB, Express.js, React.js, and Node.js.",
        "Built a Travel Agency Ticket Booking and Reservation System.",
        "Improved booking workflows and enhanced user experience.",
        "Gained practical experience in full-stack web development."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text-primary mb-4 flex items-center justify-center gap-3 gradient-text">
            <Briefcase size={40} className="text-blue-400" />
            Experience
          </h2>
          <div className="w-24 h-1 primary-gradient mx-auto rounded-full"></div>
        </motion.div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card-2 p-8 rounded-2xl hover:glow-purple transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">{exp.title}</h3>
                  <p className="text-purple-400 font-semibold">{exp.company}</p>
                </div>
                <p className="text-text-muted font-medium mt-2 md:mt-0">{exp.period}</p>
              </div>
              <ul className="space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <ChevronRight size={20} className="text-cyan-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-text-secondary">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
