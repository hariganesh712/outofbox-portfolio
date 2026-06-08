import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-14">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-ember/30 bg-gradient-to-br from-cocoa via-background to-cocoa p-10 md:p-20"
        >
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-ember/40 blur-[120px]" />
          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-secondary/40 blur-[120px]" />
          <div className="absolute inset-0 grid-lines opacity-20" />

          <div className="relative max-w-3xl">
            <span className="inline-flex rounded-full glass px-3 py-1 text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Let's Collaborate
            </span>
            <h2 className="font-display mt-6 text-[clamp(2rem,5vw,4.5rem)] font-extrabold leading-[1.02] text-foreground">
              Let's build something <span className="text-gradient-ember">extraordinary.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
              Whether you're launching a brand, promoting a business, or creating a new experience,
              we're ready to help bring your vision to life.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.74_0.19_45/0.7)] hover:scale-[1.03]">
                Start a Project <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-white/10">
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
