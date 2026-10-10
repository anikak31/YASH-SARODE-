import { motion } from "motion/react";
import { RESUME_DATA } from "../data/resumeData";
import { GraduationCap, Briefcase, Award, Sparkles, BookOpen } from "lucide-react";

export function HeroSection() {
  const { candidate } = RESUME_DATA;

  return (
    <section id="about" className="pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#EAE2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-medium text-[#1E3A8A]">
                <span>Executive Academic Portfolio</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7B59D]" />
                <span>Pune, India</span>
              </div>
            </motion.div>

            {/* Name Heading with animation & elegant serif font */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F2042] leading-[1.08] text-balance">
                {candidate.fullName}
              </h1>
              <p className="mt-4 font-serif italic text-xl sm:text-2xl text-[#1E4584] leading-relaxed">
                {candidate.designation}
              </p>
            </motion.div>

            {/* About Me statement */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal"
            >
              {candidate.shortBio}
            </motion.p>

            {/* Core Action links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <a
                href="#education"
                className="px-6 py-3 text-sm font-medium text-white bg-[#0F2042] rounded-lg hover:bg-[#1E3A8A] transition-colors shadow-xs whitespace-nowrap inline-flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Explore Academic History</span>
              </a>
              <a
                href="#experience"
                className="px-6 py-3 text-sm font-medium text-[#0F2042] bg-white border border-[#DDD1BE] rounded-lg hover:bg-[#F5EFEB] transition-colors whitespace-nowrap inline-flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                <span>Internship Experience</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Editorial Objective Card & Monogram in Blue, Beige & White (No user photo!) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="bg-white border border-[#EAE2D5] rounded-2xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
              {/* Subtle architectural beige corner decorative motif */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F5EFEB] to-transparent pointer-events-none rounded-tr-2xl" />

              {/* Minimalist Crest Monogram instead of photo */}
              <div className="flex items-center gap-4 pb-6 mb-6 border-b border-[#F5EFEB]">
                <div className="w-16 h-16 rounded-xl bg-[#0F2042] text-[#F5EFEB] flex items-center justify-center font-serif text-2xl font-bold tracking-widest shadow-inner shrink-0 border border-[#DDD1BE]/40">
                  YDS
                </div>
                <div>
                  <div className="font-serif text-lg font-semibold text-[#0F2042]">
                    Career Vision
                  </div>
                  <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#1E3A8A]" />
                    <span>Management Focus & Research Goals</span>
                  </div>
                </div>
              </div>

              {/* Objective Text */}
              <div className="space-y-3">
                <span className="text-xs font-semibold tracking-wider uppercase text-[#1E3A8A] block">
                  Professional Objective
                </span>
                <blockquote className="font-serif italic text-base sm:text-lg text-slate-800 leading-relaxed border-l-2 border-[#C7B59D] pl-4 py-1">
                  &ldquo;{candidate.objective}&rdquo;
                </blockquote>
              </div>

              {/* Highlights badge block */}
              <div className="mt-6 pt-6 border-t border-[#F5EFEB] grid grid-cols-2 gap-3 text-xs text-slate-600">
                <div className="bg-[#FAF8F5] p-3 rounded-lg border border-[#EAE2D5]">
                  <div className="text-[11px] text-slate-500 font-medium">Domain</div>
                  <div className="font-semibold text-[#0F2042] mt-0.5">Market Research & Sales</div>
                </div>
                <div className="bg-[#FAF8F5] p-3 rounded-lg border border-[#EAE2D5]">
                  <div className="text-[11px] text-slate-500 font-medium">Affiliation</div>
                  <div className="font-semibold text-[#0F2042] mt-0.5">DES IMDR® Pune</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4-Item Metric Strip in a Full-Width Row Below the Hero Split */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 pt-8 border-t border-[#EAE2D5]"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {candidate.keyMetrics.map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  {metric.label}
                </div>
                <div className="font-serif text-xl sm:text-2xl font-bold text-[#0F2042] tabular-nums">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
