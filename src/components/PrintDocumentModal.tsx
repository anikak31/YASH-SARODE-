import { Printer, X, Download } from "lucide-react";
import { RESUME_DATA } from "../data/resumeData";

interface PrintDocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrintDocumentModal({ isOpen, onClose }: PrintDocumentModalProps) {
  if (!isOpen) return null;

  const { candidate, academics, experience, technicalSkills, competencies, languages } = RESUME_DATA;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/75 backdrop-blur-xs no-print overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white border border-[#DDD1BE] rounded-xl shadow-2xl my-6 flex flex-col max-h-[92vh]">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EAE2D5] bg-[#FAF8F5] rounded-t-xl shrink-0">
          <div>
            <h3 className="font-serif text-lg font-bold text-[#0F2042]">
              Print & PDF Document Preview
            </h3>
            <p className="text-xs text-slate-500">
              Formatted for standard A4 document layout with privacy protection.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#0F2042] rounded-lg hover:bg-[#1E3A8A] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Container */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-[#FAF8F5]/50 flex justify-center">
          <div className="bg-white border border-[#DDD1BE] shadow-md p-8 sm:p-12 w-full max-w-[800px] text-slate-800 font-sans print:shadow-none print:border-none print:p-0">
            
            {/* Document Header */}
            <div className="border-b-2 border-[#0F2042] pb-6 mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#0F2042]">
                    {candidate.fullName}
                  </h1>
                  <p className="font-serif italic text-base sm:text-lg text-[#1E3A8A] mt-1">
                    {candidate.designation}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Deccan Education Society&apos;s Institute of Management Development & Research (IMDR®), Pune
                  </p>
                </div>
                {/* Monogram Seal */}
                <div className="w-14 h-14 rounded-lg bg-[#0F2042] text-white flex items-center justify-center font-serif text-xl font-bold tracking-widest shrink-0 border border-[#C7B59D]">
                  YDS
                </div>
              </div>
            </div>

            {/* Objective */}
            <div className="mb-6">
              <h2 className="font-serif text-base font-bold uppercase tracking-wider text-[#0F2042] border-b border-[#EAE2D5] pb-1 mb-2">
                Professional Objective
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                &ldquo;{candidate.objective}&rdquo;
              </p>
            </div>

            {/* Academics */}
            <div className="mb-6">
              <h2 className="font-serif text-base font-bold uppercase tracking-wider text-[#0F2042] border-b border-[#EAE2D5] pb-1 mb-3">
                Academics
              </h2>
              <table className="w-full text-xs text-left border border-[#DDD1BE]">
                <thead className="bg-[#FAF8F5] border-b border-[#DDD1BE] font-serif text-slate-900">
                  <tr>
                    <th className="p-2.5 font-semibold">Course</th>
                    <th className="p-2.5 font-semibold">Institute</th>
                    <th className="p-2.5 font-semibold text-center whitespace-nowrap">Yr. of Passing</th>
                    <th className="p-2.5 font-semibold text-right whitespace-nowrap">CGPA / %</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE2D5]">
                  {academics.map((row) => (
                    <tr key={row.id}>
                      <td className="p-2.5 font-medium text-[#0F2042]">{row.course}</td>
                      <td className="p-2.5 text-slate-700">{row.institute}</td>
                      <td className="p-2.5 text-center text-slate-600 tabular-nums">{row.yearOfPassing}</td>
                      <td className="p-2.5 text-right font-semibold text-[#0F2042] tabular-nums">{row.scoreOrCgpa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Internship Experience */}
            <div className="mb-6">
              <h2 className="font-serif text-base font-bold uppercase tracking-wider text-[#0F2042] border-b border-[#EAE2D5] pb-1 mb-3">
                Internship Experience
              </h2>
              {experience.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-serif text-sm font-bold text-[#0F2042]">
                      {exp.role} <span className="font-sans font-normal text-slate-500">at</span> {exp.company}
                    </h3>
                    <span className="text-xs text-slate-500 italic">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-700 pl-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="leading-relaxed">{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Technical Skills & Competencies in 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h2 className="font-serif text-base font-bold uppercase tracking-wider text-[#0F2042] border-b border-[#EAE2D5] pb-1 mb-2">
                  Technical & Research Skills
                </h2>
                <ul className="text-xs text-slate-700 space-y-1">
                  {technicalSkills.map((s) => (
                    <li key={s.name} className="flex justify-between border-b border-[#F5EFEB] py-1">
                      <span className="font-medium text-[#0F2042]">{s.name}</span>
                      <span className="text-slate-500">{s.category}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-base font-bold uppercase tracking-wider text-[#0F2042] border-b border-[#EAE2D5] pb-1 mb-2">
                  Core Competencies
                </h2>
                <ul className="text-xs text-slate-700 space-y-1">
                  {competencies.map((c) => (
                    <li key={c.title} className="flex justify-between border-b border-[#F5EFEB] py-1">
                      <span className="font-medium text-[#0F2042]">{c.title}</span>
                      <span className="text-slate-500">{c.behavioralMetric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Languages Known */}
            <div>
              <h2 className="font-serif text-base font-bold uppercase tracking-wider text-[#0F2042] border-b border-[#EAE2D5] pb-1 mb-2">
                Languages Known
              </h2>
              <div className="flex gap-6 text-xs text-slate-700">
                {languages.map((l) => (
                  <div key={l.language}>
                    <span className="font-bold text-[#0F2042]">{l.language}:</span>{" "}
                    <span>{l.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 bg-[#FAF8F5] border-t border-[#EAE2D5] flex items-center justify-between text-xs text-slate-500 rounded-b-xl">
          <span>Note: Contact details and residential address have been withheld for privacy.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 font-medium text-slate-700 hover:text-black"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}
