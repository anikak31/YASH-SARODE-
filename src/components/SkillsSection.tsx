import { useState } from "react";
import { motion } from "motion/react";
import { RESUME_DATA } from "../data/resumeData";
import { AnimatedHeading } from "./AnimatedHeading";
import { Search, FileSpreadsheet, Presentation, Globe, Database, ClipboardList, Laptop } from "lucide-react";

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const { technicalSkills } = RESUME_DATA;

  const categories = ["All", "Software & Productivity", "Research & Analytics"];

  const filteredSkills = technicalSkills.filter((skill) => {
    const matchesCategory =
      selectedCategory === "All" || skill.category === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getSkillIcon = (name: string) => {
    switch (name) {
      case "MS Excel":
        return FileSpreadsheet;
      case "PowerPoint":
        return Presentation;
      case "MS Word":
        return Laptop;
      case "Google Workspace":
        return Globe;
      case "Data Collection & Analysis":
        return Database;
      case "Survey Tools":
        return ClipboardList;
      default:
        return Search;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-[#EAE2D5] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedHeading
          kicker="Capabilities"
          title="Technical & Analytical Skills"
          subtitle="Proficiency in business productivity suites, quantitative data collection, survey research, and digital synthesis."
        />

        {/* Filter controls and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          
          {/* Functional filter segmented buttons */}
          <div className="flex items-center gap-1 p-1 bg-white border border-[#DDD1BE] rounded-lg overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-[#0F2042] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill or tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-[#DDD1BE] rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#1E3A8A] transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => {
            const Icon = getSkillIcon(skill.name);
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white border border-[#EAE2D5] rounded-xl p-5 sm:p-6 shadow-xs hover:border-[#1E3A8A]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] text-[#1E3A8A] border border-[#EAE2D5] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    {/* Unboxed category text */}
                    <span className="text-[11px] uppercase tracking-wider text-slate-500 font-medium">
                      {skill.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#0F2042] tracking-tight">
                    {skill.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F5EFEB] flex items-center justify-between text-[11px] text-slate-500">
                  <span>Category</span>
                  <span className="font-medium text-[#1E3A8A]">{skill.category}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-[#EAE2D5]">
            <p className="text-sm text-slate-500">No skills match the query &ldquo;{searchQuery}&rdquo;</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-3 text-xs font-semibold text-[#1E3A8A] hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
