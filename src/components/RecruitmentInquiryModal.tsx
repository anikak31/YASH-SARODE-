import { useState } from "react";
import { X, Send, CheckCircle2, ShieldCheck } from "lucide-react";

interface RecruitmentInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RecruitmentInquiryModal({ isOpen, onClose }: RecruitmentInquiryModalProps) {
  const [formData, setFormData] = useState({
    recruiterName: "",
    organization: "",
    workEmail: "",
    message: "",
    opportunityType: "Full-time / Management Trainee",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs no-print">
      <div className="relative w-full max-w-lg bg-[#FAF8F5] border border-[#DDD1BE] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-white border border-[#DDD1BE] text-[#1E3A8A] rounded-full mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#0F2042]">
              Inquiry Dispatched
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you for reaching out. Your opportunity details have been noted, and Yash Deepak Sarode will review your invitation promptly.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-[#0F2042] rounded-lg hover:bg-[#1E3A8A] transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1E3A8A] mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Confidential Professional Channel</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F2042]">
                Recruitment Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                Connect regarding market research roles, sales marketing opportunities, or management trainee positions.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.recruiterName}
                    onChange={(e) => setFormData({ ...formData, recruiterName: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DDD1BE] rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#1E3A8A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vipat Industries / Consulting Firm"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DDD1BE] rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#1E3A8A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Your Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="contact@company.com"
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#DDD1BE] rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#1E3A8A]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Opportunity Type
                </label>
                <select
                  value={formData.opportunityType}
                  onChange={(e) => setFormData({ ...formData, opportunityType: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#DDD1BE] rounded-lg text-slate-900 focus:outline-hidden focus:border-[#1E3A8A]"
                >
                  <option value="Market Research Analyst">Market Research Analyst</option>
                  <option value="Sales & Business Development">Sales & Business Development</option>
                  <option value="Management Trainee">Management Trainee</option>
                  <option value="Project Collaboration">Project Collaboration</option>
                  <option value="Other">Other Executive Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Message / Role Overview
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Briefly describe the role, team location, or next steps..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#DDD1BE] rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#1E3A8A]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#0F2042] rounded-lg hover:bg-[#1E3A8A] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
