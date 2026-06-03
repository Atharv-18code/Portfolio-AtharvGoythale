import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science Engineering (AI & ML)",
      school: "Gharda Institute of Technology, Khed",
      year: "2022 – 2026",
      grade: "SGPA: 7.15"
    },
    {
      degree: "HSC",
      school: "Shree D.G.K.V.M. Guhagar",
      year: "2021 – 2022",
      grade: "Percentage: 71.5%"
    },
    {
      degree: "SSC",
      school: "Shree D.G.K.V.M. Guhagar",
      year: "2019 – 2020",
      grade: "Percentage: 83.8%"
    }
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text-primary mb-4 flex items-center justify-center gap-3 gradient-text">
            <GraduationCap size={40} className="text-cyan-400" />
            Education
          </h2>
          <div className="w-24 h-1 primary-gradient mx-auto rounded-full"></div>
        </motion.div>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:glow-blue transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-text-primary">{edu.degree}</h3>
                  <p className="text-text-muted mt-1">{edu.school}</p>
                </div>
                <div className="mt-4 md:mt-0 md:text-right">
                  <p className="text-cyan-400 font-semibold">{edu.year}</p>
                  <p className="text-text-muted">{edu.grade}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
