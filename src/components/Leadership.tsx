import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const Leadership = () => {
  const leadership = [
    {
      role: "Team Lead",
      event: "CodeBits 4.0 Hackathon",
      period: "March 2026",
      description: "Led Team Bro-Code during the hackathon and coordinated project development activities."
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
            <Users size={40} className="text-purple-400" />
            Leadership
          </h2>
          <div className="w-24 h-1 primary-gradient mx-auto rounded-full"></div>
        </motion.div>
        <div className="space-y-6">
          {leadership.map((item, index) => (
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
                  <h3 className="text-xl font-bold text-text-primary">{item.role}</h3>
                  <p className="text-text-muted mt-1">{item.event}</p>
                </div>
                <p className="text-purple-400 font-semibold mt-2 md:mt-0">{item.period}</p>
              </div>
              <p className="text-text-secondary mt-4">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
