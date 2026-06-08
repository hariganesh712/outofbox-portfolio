import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "./Reveal";
import { tools } from "@/lib/site-data";

export function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 [background:radial-gradient(ellipse_at_top_left,oklch(0.74_0.19_45/0.12),transparent_55%)]" />
      <motion.div
        aria-hidden
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 top-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-ember/20 blur-[120px]"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 40, 0], x: [0, -25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-32 bottom-0 -z-10 h-[24rem] w-[24rem] rounded-full bg-secondary/25 blur-[140px]"
      />

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="About the Founder"
          title={<>The hands behind <span className="text-gradient-ember">OUT OF BOX</span></>}
          align="center"
          size="md"
        />

       <div className="mt-14 max-w-4xl mx-auto">
         

          <Reveal delay={0.1}>
            <div className="text-center">
              <h3 className="font-display text-3xl font-bold text-foreground md:text-7xl">
                Hari Ganesh Shanmugam
              </h3>
              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-ember">
                Founder · Creative Director
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                Designer, filmmaker and creative director with 5+ years of
                hands-on craft. OUT OF BOX is a one-person studio built on a
                simple belief — every brand deserves a story told with
                obsession, not templates. From identity to film to web, every
                pixel ships from a single set of hands.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Tools */}
        <Reveal delay={0.2}>
          <div className="mt-20 text-center">
            <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              Tools of the Craft
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              {tools.map(({ name, icon, color }) => (
                <motion.div
                  key={name}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="group flex items-center gap-3 rounded-2xl glass px-4 py-3"
                >
                  <span
                    className="grid h-10 w-10 place-items-center rounded-lg"
                    style={{
                      background: `linear-gradient(135deg, ${color}22, ${color}11)`,
                      border: `1px solid ${color}55`,
                      boxShadow: `0 8px 24px -10px ${color}80`,
                    }}
                  >
                    <span
                      aria-hidden
                      className="block h-5 w-5"
                      style={{
                        backgroundColor: color,
                        WebkitMaskImage: `url(${icon})`,
                        maskImage: `url(${icon})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                      }}
                    />
                  </span>
                  <span className="text-sm font-medium text-foreground">{name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
