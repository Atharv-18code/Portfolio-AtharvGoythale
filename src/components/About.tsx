import { motion } from 'framer-motion';
import profilePhoto from '../assets/20.jpg';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-3 sm:mb-4 gradient-text">About Me</h2>
          <div className="w-20 sm:w-24 h-1 primary-gradient mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-first lg:order-none"
          >
            <div className="relative">
              <div className="absolute inset-0 primary-gradient rounded-2xl sm:rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative glass-card-2 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8">
                <div className="flex items-center justify-center">
                  <img 
                    src={profilePhoto} 
                    alt="Atharv Goythale" 
                    className="w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 object-cover rounded-full border-2 border-blue-500/30"
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
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-4 sm:mb-6">Hello!</h3>
            <p className="text-text-secondary mb-3 sm:mb-4 text-base sm:text-lg">
              I am a passionate Full Stack Developer and AIML Engineering student with experience in building modern web applications using React, Node.js, MongoDB, Express, FastAPI, and TypeScript.
            </p>
            <p className="text-text-secondary text-base sm:text-lg">
              I enjoy solving real-world problems through technology and have worked on projects ranging from event management platforms to AI-powered healthcare systems. My goal is to create impactful software solutions that improve user experiences and streamline business processes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="glass-card p-3 sm:p-4 rounded-xl">
                <h4 className="font-semibold text-text-primary mb-1 text-sm sm:text-base">Location</h4>
                <p className="text-text-muted text-xs sm:text-sm">Baner, Pune, India</p>
              </div>
              <div className="glass-card p-3 sm:p-4 rounded-xl">
                <h4 className="font-semibold text-text-primary mb-1 text-sm sm:text-base">Email</h4>
                <p className="text-text-muted text-xs sm:text-sm">atharvgoythale@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
