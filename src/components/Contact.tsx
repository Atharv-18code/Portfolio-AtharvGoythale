import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text-primary mb-4 gradient-text">Get In Touch</h2>
          <div className="w-24 h-1 primary-gradient mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-6">Let's work together!</h3>
            <p className="text-text-secondary mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-full">
                  <Mail size={24} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">Email</h4>
                  <p className="text-text-muted">atharvgoythale@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-full">
                  <Phone size={24} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">Phone</h4>
                  <p className="text-text-muted">+91 8767276947</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-full">
                  <MapPin size={24} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">Location</h4>
                  <p className="text-text-muted">Pune, Maharashtra</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="https://github.com/Atharv-18code" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-full hover:glow-blue transition-all">
                <Github size={24} className="text-text-primary" />
              </a>
              <a href="https://linkedin.com/in/atharvgoythale" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-full hover:glow-purple transition-all">
                <Linkedin size={24} className="text-text-primary" />
              </a>
              <a href="mailto:atharvgoythale@gmail.com" className="p-3 glass-card rounded-full hover:glow-blue transition-all">
                <Mail size={24} className="text-text-primary" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl">
              {isSubmitted && (
                <div className="mb-4 p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg">
                  Thank you! Your message has been sent.
                </div>
              )}
              <div className="mb-4">
                <label className="block text-text-primary font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/20 rounded-lg text-text-primary focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-text-primary font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/20 rounded-lg text-text-primary focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-6">
                <label className="block text-text-primary font-medium mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/20 rounded-lg text-text-primary focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 btn-gradient text-white rounded-lg font-semibold hover:glow-blue transition-all flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
