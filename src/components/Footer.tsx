import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="text-2xl font-display font-bold mb-2 tracking-tighter">
              IJ INTERNATIONAL<span className="text-blue-500">.</span>
            </div>
            <div className="text-sm font-medium text-white/40 mb-6 uppercase tracking-widest">
              Iliya Joel
            </div>
            <p className="text-white/50 max-w-sm mb-8 leading-relaxed">
              Building the future of the web, one pixel at a time. Based in Yola, serving the world.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 glass rounded-xl hover:bg-white/10 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 glass rounded-xl hover:bg-white/10 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 glass rounded-xl hover:bg-white/10 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#stack" className="hover:text-white transition-colors">Tech Stack</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Connect</h4>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="group glass p-8 rounded-3xl flex flex-col justify-between aspect-square hover:bg-white/10 transition-all"
            >
              <Github className="w-8 h-8 text-blue-400" />
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold">View My Code</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <span className="text-xs text-white/40">Check out my GitHub</span>
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-white/30 gap-4">
          <p>© 2024 IJ International. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
