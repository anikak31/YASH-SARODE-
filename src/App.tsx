/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AcademicsSection } from "./components/AcademicsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { SkillsSection } from "./components/SkillsSection";
import { CompetenciesSection } from "./components/CompetenciesSection";
import { LanguagesAndInterestsSection } from "./components/LanguagesAndInterestsSection";
import { Footer } from "./components/Footer";
import { RecruitmentInquiryModal } from "./components/RecruitmentInquiryModal";
import { PrintDocumentModal } from "./components/PrintDocumentModal";

export default function App() {
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-slate-900 flex flex-col font-sans selection:bg-[#1E3A8A] selection:text-white">
      {/* Top Header */}
      <Header
        onPrintClick={() => setIsPrintModalOpen(true)}
        onInquiryClick={() => setIsInquiryModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <AcademicsSection />
        <ExperienceSection />
        <SkillsSection />
        <CompetenciesSection />
        <LanguagesAndInterestsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <PrintDocumentModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
      />
      
      <RecruitmentInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
      />
    </div>
  );
}
