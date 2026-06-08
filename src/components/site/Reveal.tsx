import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  size = "lg",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  size?: "md" | "lg";
}) {
  const sizeCls =
    size === "md"
      ? "text-[clamp(1.6rem,3.6vw,2.6rem)]"
      : "text-[clamp(2rem,5vw,4rem)]";
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-ember" /> {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className={`font-display mt-5 font-bold leading-[1.05] text-foreground ${sizeCls}`}>
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}

