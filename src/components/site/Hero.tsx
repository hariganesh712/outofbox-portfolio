import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { floatingBadges } from "@/lib/site-data";
import logo from "@/assets/logo/Logo.png";

const rotatingWords = [
  { text: "Impact", color: "oklch(0.82 0.18 55)" },
  { text: "Attention", color: "oklch(0.78 0.2 35)" },
  { text: "Identity", color: "oklch(0.85 0.15 65)" },
  { text: "Experiences", color: "oklch(0.75 0.18 30)" },
  { text: "Growth", color: "oklch(0.8 0.17 50)" },
];

export function Hero() {
  const [idx, setIdx] = useState(0);
  const ref = useRef<HTMLElement>(null);

  // scroll-driven parallax
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yFg = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const scaleHead = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacityHead = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // mouse-tilt for the logo
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 120, damping: 14 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-18, 18]), { stiffness: 120, damping: 14 });

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % rotatingWords.length), 2200);
    return () => clearInterval(t);
  }, []);

  function onMove(e: React.MouseEvent) {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden pt-28 pb-24"
    >
      {/* Apple-style cinematic backdrop */}
      <div className="absolute inset-0 -z-40 bg-[radial-gradient(120%_80%_at_50%_0%,oklch(0.22_0.06_40)_0%,oklch(0.11_0.012_40)_55%,oklch(0.06_0.006_40)_100%)]" />
      <motion.div style={{ y: yBg }} className="absolute inset-0 -z-30 grid-lines opacity-[0.07]" />
      <div className="absolute inset-0 -z-30 noise opacity-[0.04]" />

      {/* PARALLAX 3D BLOBS */}
      <motion.div
        aria-hidden
        style={{ y: yBg }}
        className="absolute -top-40 -left-32 -z-20 h-[42rem] w-[42rem]"
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 25, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="h-full w-full rounded-full bg-[radial-gradient(circle_at_30%_30%,oklch(0.82_0.2_55/0.75),oklch(0.45_0.16_30/0.3)_50%,transparent_75%)] blur-[110px]"
        />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ y: yMid }}
        className="absolute -bottom-48 -right-32 -z-20 h-[44rem] w-[44rem]"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="h-full w-full rounded-full bg-[radial-gradient(circle_at_70%_70%,oklch(0.62_0.2_25/0.6),oklch(0.4_0.15_320/0.3)_50%,transparent_75%)] blur-[120px]"
        />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ y: yFg }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[conic-gradient(from_0deg,oklch(0.8_0.18_50/0.35),oklch(0.55_0.16_320/0.25),oklch(0.7_0.18_200/0.3),oklch(0.8_0.18_50/0.35))] opacity-50 blur-3xl"
      />

      {/* floating glass shards (parallax) */}
      {[
        { x: "8%", y: "18%", size: 90, d: 18, delay: 0 },
        { x: "85%", y: "22%", size: 70, d: 22, delay: 1 },
        { x: "12%", y: "78%", size: 60, d: 16, delay: 0.5 },
        { x: "78%", y: "70%", size: 110, d: 26, delay: 1.5 },
      ].map((s, i) => (
        <motion.div
          key={i}
          aria-hidden
          style={{ left: s.x, top: s.y, y: yFg }}
          animate={{ y: [0, -25, 0], rotate: [0, 180, 360] }}
          transition={{ duration: s.d, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
          className="pointer-events-none absolute -z-10"
        >
          <div
            className="rounded-2xl border border-white/15 backdrop-blur-md"
            style={{
              width: s.size,
              height: s.size,
              background:
                "linear-gradient(135deg, oklch(1 0 0 / 0.12), oklch(0.74 0.19 45 / 0.08))",
              boxShadow: "0 20px 60px -20px oklch(0.74 0.19 45 / 0.4)",
            }}
          />
        </motion.div>
      ))}

      <motion.div
        style={{ scale: scaleHead, opacity: opacityHead }}
        className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-5 md:px-8 lg:grid-cols-[1.2fr_1fr] lg:items-center"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.32em] text-muted-foreground"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ember" />
            </span>
            Creative Studio · India
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="font-display mt-6 text-[clamp(2rem,5.2vw,4.6rem)] font-extrabold leading-[1.05] tracking-tight text-foreground"
          >
            <span className="block whitespace-nowrap">Think Outside The Box.</span>
            <span className="mt-1 flex flex-nowrap items-baseline gap-x-3 whitespace-nowrap">
              <span className="text-foreground/85">Create</span>
              <span className="relative inline-block h-[1.1em] flex-1 overflow-hidden align-baseline">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[idx].text}
                    initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: "-100%", opacity: 0, filter: "blur(8px)" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 inline-block bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${rotatingWords[idx].color}, oklch(0.6 0.18 35))`,
                    }}
                  >
                    {rotatingWords[idx].text}.
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            A multidisciplinary creative studio building bold identities,
            cinematic films and scroll-stopping digital experiences for brands
            that want to stand out — not blend in.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-ember to-secondary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_15px_50px_-10px_oklch(0.74_0.19_45/0.7)] transition hover:scale-[1.04]"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">View Portfolio</span>
              <ArrowUpRight className="relative h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-white/10"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-ember/20 text-ember">
                <Play className="h-3 w-3 fill-current" />
              </span>
              Start a Project
            </a>
          </motion.div>
        </div>

        {/* PREMIUM ANIMATED LOGO — tilts to mouse, breathes, halo pulses */}
        <motion.div
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.1, ease: "easeOut" }}
          className="relative mx-auto aspect-square w-full max-w-md"
          style={{ perspective: 1400 }}
        >
          {/* aurora halo */}
          <motion.div
            aria-hidden
            animate={{ rotate: 360, scale: [1, 1.08, 1] }}
            transition={{ rotate: { duration: 40, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
            className="absolute inset-2 rounded-full bg-[conic-gradient(from_0deg,oklch(0.82_0.2_55/0.55),oklch(0.55_0.16_320/0.35),oklch(0.7_0.18_200/0.4),oklch(0.82_0.2_55/0.55))] blur-2xl"
          />
          {/* pulsing glow */}
          <motion.div
            aria-hidden
            animate={{ opacity: [0.45, 0.85, 0.45], scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-8 rounded-full bg-[radial-gradient(circle,oklch(0.85_0.18_55/0.6),transparent_65%)] blur-2xl"
          />
          {/* concentric rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-white/12"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute inset-10 rounded-full border border-ember/25"
          />

          {/* orbit particles */}
          {[0, 1, 2].map((k) => (
            <motion.div
              key={k}
              animate={{ rotate: 360 }}
              transition={{ duration: 14 + k * 6, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
              style={{ rotate: k * 120 }}
            >
              <span
                className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full"
                style={{
                  background: k === 1 ? "white" : "oklch(0.78 0.2 45)",
                  boxShadow: `0 0 20px ${k === 1 ? "white" : "oklch(0.78 0.2 45)"}`,
                }}
              />
            </motion.div>
          ))}

          {/* 3D tilting logo */}
          <motion.div
            style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
            className="absolute inset-0 grid place-items-center"
          >
            <motion.img
              src={logo}
              alt="Out of Box logo"
              animate={{ y: [0, -14, 0], scale: [1, 1.04, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 h-3/4 w-3/4 object-contain drop-shadow-[0_30px_60px_oklch(0.74_0.19_45/0.7)]"
              style={{ transform: "translateZ(60px)" }}
            />
            {/* shimmering reflection sweep */}
            <motion.div
              aria-hidden
              initial={{ x: "-120%" }}
              animate={{ x: "120%" }}
              transition={{ duration: 4.5, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
              className="pointer-events-none absolute inset-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent blur-md"
              style={{ transform: "translateZ(70px) skewX(-20deg)" }}
            />
          </motion.div>

          {/* floating sparkle */}
          <motion.span
            aria-hidden
            animate={{ y: [-6, 6, -6], rotate: [0, 20, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-6 top-8 text-ember"
          >
            <Sparkles className="h-5 w-5" />
          </motion.span>
        </motion.div>
      </motion.div>


      {/* badges marquee */}
      <div className="absolute inset-x-0 bottom-0 overflow-hidden border-y border-white/5 bg-black/40 backdrop-blur">
        <div className="flex w-max animate-marquee gap-3 py-4">
          {[...floatingBadges, ...floatingBadges, ...floatingBadges].map((b, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 whitespace-nowrap px-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-ember" />
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
