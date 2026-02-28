import { motion } from "motion/react";
import { techStack } from "../constants.tsx";

export default function TechStack() {
  return (
    <section id="stack" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">The Arsenal</h2>
          <p className="text-white/50">Modern tools for modern solutions.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass glass-hover p-8 rounded-3xl flex flex-col items-center justify-center gap-4 group"
            >
              <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-blue-500/20 transition-colors text-blue-400">
                {tech.icon}
              </div>
              <span className="font-medium text-sm tracking-wide">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
