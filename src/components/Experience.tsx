import { motion } from "motion/react";
import { Award, Users, Rocket, Target } from "lucide-react";

export default function Experience() {
  const stats = [
    { label: "Projects Delivered", value: "20+", icon: <Rocket className="w-5 h-5" /> },
    { label: "Happy Clients", value: "15+", icon: <Users className="w-5 h-5" /> },
    { label: "Years Experience", value: "5+", icon: <Award className="w-5 h-5" /> },
    { label: "Tech Founded", value: "1", icon: <Target className="w-5 h-5" /> },
  ];

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
              Leadership & <br />
              <span className="text-gradient">Technical Mastery</span>
            </h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                As the founder of IJ International, I lead a team of passionate developers in Yola, Nigeria. We specialize in building high-performance web applications that solve real-world problems.
              </p>
              <p>
                My expertise lies in crafting seamless user experiences using modern frontend technologies. I believe in the power of code to transform communities and bridge the digital divide.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="glass p-6 rounded-3xl">
                    <div className="text-blue-400 mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass p-2 rounded-[3rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
                alt="Team Collaboration"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[2.5rem]"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-3xl animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center font-bold text-xl">
                  IJ
                </div>
                <div>
                  <div className="font-bold">IJ International</div>
                  <div className="text-xs text-white/50">Founded in 2022</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
