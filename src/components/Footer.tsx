import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-text-primary py-12 border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2 gradient-text">Atharv Vidyadhar Goythale</h3>
          <p className="text-text-muted mb-6">Full Stack Developer | MERN Stack Developer | AI & ML Engineering Student</p>
          <div className="flex justify-center gap-4 mb-8">
            <a href="https://github.com/Atharv-18code" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-slate-800 rounded-full transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/atharvgoythale" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-slate-800 rounded-full transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:atharvgoythale@gmail.com" className="p-2 hover:bg-slate-800 rounded-full transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-text-muted">© 2026 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
