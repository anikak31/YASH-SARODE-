import { motion } from "motion/react";

interface AnimatedHeadingProps {
  title: string;
  kicker?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function AnimatedHeading({
  title,
  kicker,
  subtitle,
  align = "left",
  className = "",
}: AnimatedHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`relative mb-8 md:mb-12 ${
        isCenter ? "text-center mx-auto" : "text-left"
      } ${className}`}
    >
      {kicker && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-2"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#1E3A8A]">
            {kicker}
          </span>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="relative inline-block"
      >
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#0F2042]">
          {title}
        </h2>
        {/* Subtle beige & blue hairline accent line */}
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={`block h-[2px] bg-gradient-to-r from-[#1E3A8A] via-[#C7B59D] to-transparent mt-2 origin-left ${
            isCenter ? "mx-auto w-24" : "w-16 md:w-24"
          }`}
        />
      </motion.div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
