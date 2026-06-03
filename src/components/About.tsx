import { motion } from 'framer-motion';
import profilePhoto from '../assets/20.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text-primary mb-4 gradient-text">About Me</h2>
          <div className="w-24 h-1 primary-gradient mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 primary-gradient rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative glass-card-2 rounded-3xl p-8">
                <div className="flex items-center justify-center">
                  <img 
                    src={profilePhoto} 
                    alt="Atharv Goythale" 
                    className="w-64 h-64 object-cover rounded-full border-2 border-blue-500/30"
                  />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-6">Hello!</h3>
            <p className="text-text-secondary mb-4 text-lg">
              I am a passionate Full Stack Developer and AIML Engineering student with experience in building modern web applications using React, Node.js, MongoDB, Express, FastAPI, and TypeScript.
            </p>
            <p className="text-text-secondary text-lg">
              I enjoy solving real-world problems through technology and have worked on projects ranging from event management platforms to AI-powered healthcare systems. My goal is to create impactful software solutions that improve user experiences and streamline business processes.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass-card p-4 rounded-xl">
                <h4 className="font-semibold text-text-primary mb-1">Location</h4>
                <p className="text-text-muted">Baner, Pune, India</p>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <h4 className="font-semibold text-text-primary mb-1">Email</h4>
                <p className="text-text-muted">atharvgoythale@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
