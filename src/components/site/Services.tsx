import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { services } from "@/lib/site-data";
import { SectionHeading } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="relative py-16 md:py-24">
      <div className="absolute inset-0 -z-10 [background:radial-gradient(ellipse_at_bottom_right,oklch(0.74_0.19_45/0.12),transparent_55%)]" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What We Do"
            title={<>Every discipline a brand needs, <span className="text-gradient-ember">under one roof.</span></>}
          />
          <a href="#contact" className="hidden rounded-full glass-strong px-5 py-3 text-sm font-medium text-foreground hover:bg-white/10 md:inline-flex">
            Discuss your project →
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl glass p-7 transition hover:shadow-[0_0_60px_-10px_oklch(0.74_0.19_45/0.55)] hover:border-ember/40"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-ember/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-ember/0 blur-3xl transition duration-500 group-hover:bg-ember/40" />
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100" style={{ boxShadow: "inset 0 0 80px oklch(0.74 0.19 45 / 0.25)" }} />

              <div className="font-display text-xs font-bold tracking-[0.3em] text-ember">
                {String(i + 1).padStart(2, "0")}
              </div>

              <h3 className="font-display mt-6 text-2xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>

              <ul className="mt-5 space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Check className="h-3.5 w-3.5 text-ember" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
