import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/site-data";
import { SectionHeading } from "./Reveal";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (d: number) => setI((p) => (p + d + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Kind Words"
          align="center"
          size="md"
          title={<>Clients we've helped <span className="text-gradient-ember">stand out.</span></>}
        />


        <div className="relative mt-14 overflow-hidden rounded-[2rem] glass-strong p-8 md:p-14">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-ember/25 blur-3xl" />
          <Quote className="h-10 w-10 text-ember/60" />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-6"
            >
              <p className="font-display text-xl leading-snug text-foreground md:text-3xl md:leading-tight">
                "{t.review}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-ember/20 font-display font-bold text-ember">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{t.company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-between">
            <div className="flex gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-ember" : "w-4 bg-white/15"}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={() => go(-1)} aria-label="Previous" className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-white/10">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={() => go(1)} aria-label="Next" className="grid h-10 w-10 place-items-center rounded-full bg-ember text-primary-foreground hover:scale-105">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
