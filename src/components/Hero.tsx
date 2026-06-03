import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
              Available for opportunities
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Hi, I'm <span className="gradient-text">Atharv Goythale</span>
            </h1>
            <p className="text-xl text-text-secondary mb-4">
              Full Stack Developer passionate about building scalable web applications, modern user experiences, and AI-powered solutions.
            </p>
            <p className="text-lg text-text-muted mb-8">
              Currently pursuing a Bachelor's degree in Computer Science Engineering (Artificial Intelligence & Machine Learning) while gaining hands-on experience in MERN Stack Development.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 btn-gradient text-white rounded-lg font-semibold hover:glow-blue transition-all hover:-translate-y-1"
              >
                View Projects
                <ChevronRight size={20} className="ml-2" />
              </a>
              <a
                href="https://drive.google.com/file/d/1wv7e7qt32BMq106sMyg9bY0MNVOWbVq7/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-purple-500/30 text-text-primary rounded-lg font-semibold hover:border-purple-400 hover:glow-purple transition-all"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 glass-card text-text-primary rounded-lg font-semibold hover:glow-blue transition-all"
              >
                Contact Me
              </a>
            </div>
            <div className="flex items-center space-x-4 mt-10">
              <a href="https://github.com/Atharv-18code" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-full hover:glow-blue transition-all hover:-translate-y-1">
                <Github size={24} className="text-text-primary" />
              </a>
              <a href="https://linkedin.com/in/atharvgoythale" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-full hover:glow-purple transition-all hover:-translate-y-1">
                <Linkedin size={24} className="text-text-primary" />
              </a>
              <a href="mailto:atharvgoythale@gmail.com" className="p-3 glass-card rounded-full hover:glow-blue transition-all hover:-translate-y-1">
                <Mail size={24} className="text-text-primary" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-full relative">
              <div className="absolute inset-0 primary-gradient rounded-3xl blur-3xl opacity-30 animate-pulse-slow"></div>
              <div className="relative primary-gradient rounded-3xl p-8 shadow-2xl">
                <div className="glass-card-2 rounded-2xl p-6">
                  <pre className="text-text-primary text-sm font-mono">
                    <code>{`const developer = {
  name: "Atharv",
  stack: ["React", "Node", "MongoDB"],
  passion: "Building amazing things",
  location: "Pune, India"
};`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
