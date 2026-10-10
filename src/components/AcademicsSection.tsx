import { useState } from "react";
import { motion } from "motion/react";
import { RESUME_DATA, AcademicRecord } from "../data/resumeData";
import { AnimatedHeading } from "./AnimatedHeading";
import { GraduationCap, Award, Calendar, Building2, CheckCircle2, Clock } from "lucide-react";

export function AcademicsSection() {
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");
  const { academics } = RESUME_DATA;

  return (
    <section id="education" className="py-16 md:py-24 border-b border-[#EAE2D5] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-2">
          <AnimatedHeading
            kicker="Qualifications"
            title="Academic Background"
            subtitle="Educational progression spanning management post-graduation, undergraduate computer studies, and foundational scholastic milestones."
          />

          {/* View mode toggle - functional interactive button controls with zero slop */}
          <div className="flex items-center gap-1 p-1 bg-white border border-[#DDD1BE] rounded-lg shrink-0 self-start sm:self-auto mb-8 sm:mb-12">
            <button
              onClick={() => setViewMode("cards")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                viewMode === "cards"
                  ? "bg-[#0F2042] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Curated Cards
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                viewMode === "table"
                  ? "bg-[#0F2042] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Tabular Matrix
            </button>
          </div>
        </div>

        {viewMode === "cards" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {academics.map((record, index) => {
              const isPursuing = record.status === "Pursuing";
              return (
                <motion.div
                  key={record.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white border border-[#EAE2D5] rounded-xl p-6 sm:p-7 shadow-xs hover:border-[#1E3A8A]/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    {/* Level & Year text without pill box */}
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3 pb-3 border-b border-[#F5EFEB]">
                      <span className="font-medium tracking-wide uppercase text-[#1E3A8A]">
                        {record.level}
                      </span>
                      <div className="flex items-center gap-1.5 tabular-nums text-slate-600">
                        {isPursuing ? (
                          <>
                            <Clock className="w-3.5 h-3.5 text-amber-700" />
                            <span className="font-medium">Currently Pursuing</span>
                          </>
                        ) : (
                          <>
                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                            <span>Passing Year {record.yearOfPassing}</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Degree Title */}
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F2042] tracking-tight">
                      {record.course}
                    </h3>

                    {/* Institute */}
                    <div className="flex items-start gap-2 mt-2 text-sm text-slate-700 font-medium">
                      <Building2 className="w-4 h-4 text-[#1E3A8A] shrink-0 mt-0.5" />
                      <span>{record.institute}</span>
                    </div>

                    {/* Course note */}
                    {record.description && (
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {record.description}
                      </p>
                    )}
                  </div>

                  {/* Score / CGPA indicator */}
                  <div className="mt-6 pt-4 border-t border-[#F5EFEB] flex items-center justify-between">
                    <span className="text-xs text-slate-500">Evaluation / Result</span>
                    <span className="font-serif text-lg font-bold text-[#0F2042] tabular-nums">
                      {record.scoreOrCgpa}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* Publication-grade responsive table view */
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-x-auto bg-white border border-[#EAE2D5] rounded-xl shadow-xs"
          >
            <table className="w-full text-left text-sm">
              <thead className="bg-[#F5EFEB] border-b border-[#EAE2D5] text-[#0F2042] font-serif text-base">
                <tr>
                  <th scope="col" className="px-6 py-4 font-semibold">Course / Qualification</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Institute / University</th>
                  <th scope="col" className="px-6 py-4 font-semibold whitespace-nowrap">Yr. of Passing</th>
                  <th scope="col" className="px-6 py-4 font-semibold text-right whitespace-nowrap">CGPA / %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F5EFEB] text-slate-700">
                {academics.map((record) => (
                  <tr key={record.id} className="hover:bg-[#FAF8F5] transition-colors">
                    <td className="px-6 py-4 font-medium text-[#0F2042]">
                      <div className="font-semibold">{record.course}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{record.level}</div>
                    </td>
                    <td className="px-6 py-4 max-w-xs sm:max-w-md">
                      <div className="font-medium text-slate-800">{record.institute}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap tabular-nums text-slate-600">
                      {record.yearOfPassing}
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap font-serif text-base font-bold text-[#0F2042] tabular-nums">
                      {record.scoreOrCgpa}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}

        {/* Institution Highlights Note */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-[#EAE2D5] text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-[#1E3A8A] shrink-0" />
            <span>
              <strong>Deccan Education Society&apos;s IMDR®</strong> is one of Pune&apos;s pioneer institutions in management education.
            </span>
          </div>
          <span className="text-slate-400 hidden sm:inline">|</span>
          <span className="text-slate-500">Official Academic Records Available Upon Verification Request</span>
        </div>

      </div>
    </section>
  );
}
