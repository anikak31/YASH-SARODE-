import { motion } from "motion/react";
import { RESUME_DATA } from "../data/resumeData";
import { AnimatedHeading } from "./AnimatedHeading";
import { Languages, Car, Cpu, Video, CheckCircle } from "lucide-react";

export function LanguagesAndInterestsSection() {
  const { languages, interests } = RESUME_DATA;

  const getInterestIcon = (name: string) => {
    if (name.includes("Cars")) return Car;
    if (name.includes("Technologies")) return Cpu;
    return Video;
  };

  return (
    <section id="languages" className="py-16 md:py-24 border-b border-[#EAE2D5] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Languages Block */}
        <div>
          <AnimatedHeading
            kicker="Communication"
            title="Languages Known"
            subtitle="Multilingual capability facilitating cross-regional client relations and local market research."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((item, idx) => (
              <motion.div
                key={item.language}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white border border-[#EAE2D5] rounded-xl p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F5EFEB]">
                    <div className="flex items-center gap-2">
                      <Languages className="w-4 h-4 text-[#1E3A8A]" />
                      <span className="font-serif text-2xl font-bold text-[#0F2042]">
                        {item.language}
                      </span>
                    </div>
                    <CheckCircle className="w-4 h-4 text-[#1E3A8A]" />
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.levelDesc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#F5EFEB] flex items-center justify-between text-xs">
                  <span className="text-slate-500">Fluency</span>
                  <span className="font-medium text-[#0F2042]">{item.proficiency}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Personal Interests Block */}
        <div id="interests">
          <AnimatedHeading
            kicker="Pursuits"
            title="Personal Interests"
            subtitle="Extracurricular curiosity shaping technological awareness and modern creative storytelling."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interests.map((interest, idx) => {
              const Icon = getInterestIcon(interest.name);
              return (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white border border-[#EAE2D5] rounded-xl p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] text-[#1E3A8A] border border-[#DDD1BE] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="text-[11px] uppercase tracking-wider text-slate-500 font-medium mb-1">
                      {interest.category}
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#0F2042]">
                      {interest.name}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
