import { motion } from "framer-motion";
import { processSteps } from "@/lib/site-data";
import { SectionHeading } from "./Reveal";

export function Process() {
  return (
    <section id="process" className="relative py-16 md:py-24">
      <div className="absolute inset-0 -z-10 [background:radial-gradient(ellipse_at_top,oklch(0.74_0.19_45/0.1),transparent_55%)]" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="How We Work"
          title={<>Our <span className="text-gradient-ember">Creative Process</span></>}
          subtitle="A clear, six-step path from first brief to launched work — designed to keep momentum and quality high."
        />

        <div className="relative mt-16">
          {/* Timeline Line (Visible on both Mobile and Desktop) */}
          <div className="absolute left-[18px] top-8 bottom-8 w-[2px] bg-white/10 md:left-1/2 md:-translate-x-1/2" />
          <div className="absolute left-[18px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-ember/60 via-ember to-ember/60 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-16">
            {processSteps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6 }}
                  className="relative grid grid-cols-1 md:grid-cols-2 items-center"
                >
                  {/* Step Card (Unified Single Block) */}
                  <div className={`col-span-1 pl-12 md:pl-0 flex flex-col ${
                    left 
                      ? "md:col-start-1 md:pr-16 md:text-right md:items-end" 
                      : "md:col-start-2 md:pl-16 md:text-left md:items-start"
                  }`}>
                    <div className="font-display text-4xl xs:text-5xl md:text-7xl font-extrabold text-gradient-ember leading-none">
                      {s.n}
                    </div>
                    <h3 className="font-display mt-1.5 md:mt-3 text-lg xs:text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                      {s.title}
                    </h3>
                    <p className="mt-2 max-w-md text-xs xs:text-sm md:text-base text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-[18px] top-[24px] xs:top-[28px] md:top-1/2 grid h-3.5 w-3.5 -translate-x-1/2 md:-translate-y-1/2 place-items-center rounded-full bg-ember border-2 border-background shadow-[0_0_15px_4px_oklch(0.74_0.19_45/0.6)] md:left-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
