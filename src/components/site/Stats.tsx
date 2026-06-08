import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { stats } from "@/lib/site-data";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString() + suffix);

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.8, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, mv, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function Stats() {
  return (
    <section className="relative py-14">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl glass-strong p-6 md:p-8"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-ember/20 blur-3xl transition group-hover:bg-ember/40" />
              <div className="relative font-display text-4xl font-bold text-gradient-ember md:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="relative mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground md:text-sm">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
