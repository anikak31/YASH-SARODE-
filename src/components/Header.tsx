import { useState } from "react";
import { Printer, Menu, X, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  onPrintClick: () => void;
  onInquiryClick?: () => void;
}

export function Header({ onPrintClick, onInquiryClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Competencies", href: "#competencies" },
    { label: "Languages", href: "#languages" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#EAE2D5] no-print transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark (Single text element in serif display face) */}
          <a
            href="#"
            className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#0F2042] whitespace-nowrap shrink-0 hover:text-[#1E3A8A] transition-colors"
          >
            Yash Deepak Sarode
          </a>

          {/* Zone 2: 4-6 concise text nav links (whitespace-nowrap) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#1E3A8A] transition-colors whitespace-nowrap shrink-0 border-b border-transparent hover:border-[#1E3A8A] pb-0.5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {onInquiryClick && (
              <button
                onClick={onInquiryClick}
                className="px-4 py-2 text-xs font-semibold text-[#1E3A8A] bg-white border border-[#DDD1BE] rounded-lg hover:bg-[#F5EFEB] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                Inquire <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              onClick={onPrintClick}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#0F2042] rounded-lg hover:bg-[#1E3A8A] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer shadow-sm"
              title="Print or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onPrintClick}
              className="p-2 text-[#0F2042] bg-white border border-[#EAE2D5] rounded-lg text-xs"
              aria-label="Print resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0F2042] hover:bg-[#F5EFEB] rounded-lg transition-colors focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#EAE2D5] bg-[#FBF9F5] px-4 py-4 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-[#1E3A8A] border-b border-[#F5EFEB]"
            >
              {link.label}
            </a>
          ))}
          {onInquiryClick && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onInquiryClick();
              }}
              className="w-full mt-2 py-2.5 px-4 text-xs font-semibold text-[#1E3A8A] bg-white border border-[#DDD1BE] rounded-lg text-center"
            >
              Recruiter Inquiry Form
            </button>
          )}
        </div>
      )}
    </header>
  );
}
