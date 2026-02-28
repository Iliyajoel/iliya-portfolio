import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../constants.tsx";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Selected Works</h2>
            <p className="text-white/50 max-w-xl">A collection of projects that define my journey as a developer and founder.</p>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 glass rounded-2xl text-sm font-medium">
              3 Projects
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group glass rounded-[2.5rem] overflow-hidden flex flex-col h-full"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full py-3 bg-white text-black rounded-xl font-bold flex items-center justify-center gap-2"
                  >
                    Visit Site <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 rounded-full text-white/40">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{project.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <span className="text-xs font-medium text-blue-400">Case Study Coming Soon</span>
                  <div className="flex gap-3">
                    <Github className="w-5 h-5 text-white/30 hover:text-white cursor-pointer transition-colors" />
                    <ExternalLink className="w-5 h-5 text-white/30 hover:text-white cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
