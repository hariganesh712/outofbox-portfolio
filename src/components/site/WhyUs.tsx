import { motion } from "framer-motion";
import { Lightbulb, Target, Zap, Layers } from "lucide-react";
import { whyUs } from "@/lib/site-data";
import { SectionHeading } from "./Reveal";

const icons = [Lightbulb, Target, Zap, Layers];

export function WhyUs() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          align="center"
          title={<>Built to be the partner brands <span className="text-gradient-ember">actually want.</span></>}
        />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group relative overflow-hidden rounded-3xl glass p-7"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-ember/15 text-ember">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display mt-5 text-xl font-bold text-foreground">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
                <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-ember/50 to-transparent opacity-0 transition group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
