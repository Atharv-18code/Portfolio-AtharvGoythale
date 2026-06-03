import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Web Development: The Complete 2024 Web Development Bootcamp",
      issuer: "Udemy",
      date: "Nov 2024"
    },
    {
      title: "AWS Academy Cloud Foundations",
      issuer: "AWS Academy",
      date: "Dec 2024"
    },
    {
      title: "MERN Stack Crash Course",
      issuer: "Wisdom Sprouts IT Training Hub",
      date: "Dec 2024"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text-primary mb-4 flex items-center justify-center gap-3 gradient-text">
            <Award size={40} className="text-yellow-400" />
            Certifications
          </h2>
          <div className="w-24 h-1 primary-gradient mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card-2 p-6 rounded-2xl hover:glow-purple transition-all"
            >
              <Award size={32} className="text-yellow-400 mb-4" />
              <h3 className="text-lg font-bold text-text-primary mb-2">{cert.title}</h3>
              <p className="text-text-muted mb-1">{cert.issuer}</p>
              <p className="text-cyan-400 font-medium">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
