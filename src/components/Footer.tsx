import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-[#EAE2D5] py-12 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-serif text-xl font-bold tracking-tight text-[#0F2042]">
              Yash Deepak Sarode
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Management Scholar · Market Research & Sales Strategy · Pune, India
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-600 font-medium">
            <a href="#about" className="hover:text-[#1E3A8A] transition-colors">About</a>
            <a href="#education" className="hover:text-[#1E3A8A] transition-colors">Education</a>
            <a href="#experience" className="hover:text-[#1E3A8A] transition-colors">Experience</a>
            <a href="#skills" className="hover:text-[#1E3A8A] transition-colors">Skills</a>
            <a href="#competencies" className="hover:text-[#1E3A8A] transition-colors">Competencies</a>
            <a href="#languages" className="hover:text-[#1E3A8A] transition-colors">Languages</a>
          </div>

          <div>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg border border-[#DDD1BE] bg-[#FAF8F5] text-slate-700 hover:text-[#0F2042] hover:bg-white transition-colors cursor-pointer text-xs flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#F5EFEB] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <span>Official Digital Resume Portfolio · Deccan Education Society IMDR® Scholar</span>
          <span>Designed with Blue, Beige & White Minimalist Aesthetics</span>
        </div>
      </div>
    </footer>
  );
}
