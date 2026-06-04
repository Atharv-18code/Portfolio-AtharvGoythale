import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Replace this with your Formspree form endpoint (e.g., "https://formspree.io/f/your-form-id")
  const FORM_ENDPOINT = "https://formspree.io/f/xnjyqeyk";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setHasError(false);

    try {
      if (FORM_ENDPOINT) {
        // If Formspree endpoint is set, use it
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
        } else {
          throw new Error('Failed to send message');
        }
      } else {
        // Fallback to mailto: if no Formspree endpoint
        const subject = encodeURIComponent(`Message from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.location.href = `mailto:atharvgoythale@gmail.com?subject=${subject}&body=${body}`;
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setHasError(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setIsSubmitted(false);
        setHasError(false);
      }, 5000);
    }
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
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {hasError && (
                <div className="mb-4 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg">
                  Oops! Something went wrong. Please try again.
                </div>
              )}
              <div className="mb-4">
                <label className="block text-text-primary font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
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
                  name="email"
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
                  name="message"
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
                disabled={isSubmitting}
                className="w-full py-3 btn-gradient text-white rounded-lg font-semibold hover:glow-blue transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
