import { motion } from "motion/react";
import { RESUME_DATA } from "../data/resumeData";
import { AnimatedHeading } from "./AnimatedHeading";
import { Briefcase, Building, CheckCircle2, TrendingUp, Users, Target, Search } from "lucide-react";

export function ExperienceSection() {
  const { experience } = RESUME_DATA;

  const deliverablePillars = [
    {
      title: "Lead Generation & Outreach",
      icon: Target,
      desc: "Identified prospective client opportunities and supported targeted sales generation funnels.",
    },
    {
      title: "Client Requirement Advisory",
      icon: Users,
      desc: "Held consultative dialogues with customers to understand technical needs and present product solutions.",
    },
    {
      title: "Market Research & Campaigns",
      icon: Search,
      desc: "Collaborated on campaign rollouts, local market research, and competitive information gathering.",
    },
    {
      title: "Pipeline & Relationship Care",
      icon: TrendingUp,
      desc: "Assisted the senior sales team with timely lead follow-up, client communication, and client retention.",
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 border-b border-[#EAE2D5] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedHeading
          kicker="Practical Exposure"
          title="Internship Experience"
          subtitle="Direct operational experience in sales and marketing execution, customer communication, and market research."
        />

        {experience.map((exp) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="border border-[#EAE2D5] rounded-2xl bg-[#FAF8F5] p-6 sm:p-10 shadow-xs relative overflow-hidden"
          >
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-[#EAE2D5]">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
                  <Briefcase className="w-4 h-4" />
                  <span>{exp.type}</span>
                  <span className="text-slate-300">·</span>
                  <span>Practical Field Training</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F2042] mt-1.5">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 text-base font-medium text-slate-700 mt-1">
                  <Building className="w-4 h-4 text-[#1E3A8A]" />
                  <span className="font-semibold text-[#0F2042]">{exp.company}</span>
                </div>
              </div>

              {/* Status and Focus */}
              <div className="bg-white border border-[#DDD1BE] rounded-xl px-5 py-3 md:text-right shrink-0">
                <div className="text-xs text-slate-500 font-medium">Core Focus</div>
                <div className="font-serif text-lg font-bold text-[#0F2042]">
                  Market Acquisition & Sales
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-6">
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                {exp.summary}
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {deliverablePillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-xl border border-[#EAE2D5] flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] text-[#1E3A8A] flex items-center justify-center mb-3 border border-[#EAE2D5]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="font-serif text-base font-bold text-[#0F2042]">
                        {pillar.title}
                      </div>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Detailed Responsibilities List */}
            <div className="mt-10 pt-8 border-t border-[#EAE2D5]">
              <h4 className="font-serif text-xl font-bold text-[#0F2042] mb-4">
                Key Responsibilities & Deliverables
              </h4>
              <ul className="space-y-3.5">
                {exp.highlights.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#1E3A8A] shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills applied - Unboxed text with typographic separators (Zero-Pill discipline) */}
            <div className="mt-8 pt-6 border-t border-[#EAE2D5] flex flex-wrap items-center gap-2 text-xs text-slate-600">
              <span className="font-semibold text-[#0F2042]">Competencies Applied:</span>
              {exp.skillsApplied.map((skill, idx) => (
                <span key={skill} className="flex items-center gap-2">
                  <span className="text-slate-700">{skill}</span>
                  {idx < exp.skillsApplied.length - 1 && (
                    <span className="text-[#C7B59D]" aria-hidden="true">·</span>
                  )}
                </span>
              ))}
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}
