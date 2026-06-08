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
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-ember/40 to-transparent md:left-1/2 md:block" />
          <div className="space-y-10 md:space-y-16">
            {processSteps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6 }}
                  className="relative grid grid-cols-1 items-center gap-6 md:grid-cols-2"
                >
                  <div className={left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}>
                    <div className="font-display text-6xl font-extrabold text-gradient-ember md:text-7xl">{s.n}</div>
                    <h3 className="font-display mt-2 text-2xl font-bold text-foreground md:text-3xl">{s.title}</h3>
                    <p className="mt-2 max-w-md text-sm text-muted-foreground md:text-base">{s.desc}</p>
                  </div>
                  <div className="absolute left-4 top-2 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-ember shadow-[0_0_24px_4px_oklch(0.74_0.19_45/0.6)] md:left-1/2 md:top-1/2 md:-translate-y-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
