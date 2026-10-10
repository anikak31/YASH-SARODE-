import { motion } from "motion/react";
import { RESUME_DATA } from "../data/resumeData";
import { AnimatedHeading } from "./AnimatedHeading";
import { CalendarClock, Scale, Clock3, Compass, MessageSquareShare } from "lucide-react";

export function CompetenciesSection() {
  const { competencies } = RESUME_DATA;

  const getCompetencyIcon = (index: number) => {
    switch (index) {
      case 0:
        return CalendarClock;
      case 1:
        return Scale;
      case 2:
        return Clock3;
      case 3:
        return Compass;
      default:
        return MessageSquareShare;
    }
  };

  return (
    <section id="competencies" className="py-16 md:py-24 border-b border-[#EAE2D5] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedHeading
          kicker="Behavioral Strengths"
          title="Core Competencies"
          subtitle="Interpersonal, managerial, and collaborative capabilities that drive effective team alignment and project completion."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((comp, idx) => {
            const Icon = getCompetencyIcon(idx);
            return (
              <motion.div
                key={comp.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#FAF8F5] border border-[#EAE2D5] rounded-xl p-6 shadow-xs hover:border-[#1E3A8A]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white text-[#1E3A8A] border border-[#DDD1BE] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F2042]">
                    {comp.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {comp.summary}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#EAE2D5] flex items-center justify-between text-xs">
                  <span className="text-slate-500">Key Dimension</span>
                  <span className="font-medium text-[#1E3A8A]">{comp.behavioralMetric}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
