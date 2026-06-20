import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Expand, X, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, portfolioCategories, type Project } from "@/lib/site-data";
import { SectionHeading } from "./Reveal";

export function Portfolio() {
  const [active, setActive] = useState(portfolioCategories[0]);
  const [open, setOpen] = useState<Project | null>(null);

  // Carousel State
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const filtered = useMemo(
    () => projects.filter((p) => p.category === active),
    [active],
  );

  // Safely calculate the current index for the infinite loop
  const imageIndex = filtered.length > 0 ? ((page % filtered.length) + filtered.length) % filtered.length : 0;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  // Autoplay Effect (Runs only for Featured category and pauses on hover)
  useEffect(() => {
    if (active !== "Featured" || isHovered) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 3000);
    return () => clearInterval(timer);
  }, [active, isHovered, page]);

  // Framer Motion Variants for Sliding
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section id="work" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title={<>Selected work from the <span className="text-gradient-ember">OUT OF BOX</span> archive.</>}
          subtitle="A living portfolio across branding, print, social and motion. Click any card to view it full-size."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {portfolioCategories.map((c) => (
            <button
              key={c}
              onClick={() => {
                setActive(c);
                setPage([0, 0]); // Reset carousel state when changing categories
              }}
              className={`relative rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] transition ${
                active === c
                  ? "bg-ember text-primary-foreground shadow-[0_8px_30px_-10px_oklch(0.74_0.19_45/0.7)]"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Conditional Rendering: Carousel for Featured, Grid for everything else */}
        {active === "Featured" ? (
          <div
            className="relative mx-auto mt-10 w-full max-w-6xl h-[80vh] min-h-[580px] md:h-[70vh] md:min-h-[550px] max-h-[750px] overflow-hidden rounded-[30px] sm:rounded-[40px] glass-strong shadow-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0 flex flex-col md:flex-row"
              >
                {filtered.length > 0 && (
                  <>
                    {/* Left Side: 40% Image */}
                    <div className="relative w-full md:w-[40%] h-[40%] md:h-full bg-black/5 dark:bg-white/5 p-6 md:p-12 flex items-center justify-center overflow-hidden rounded-[30px]">
                      <div className="h-full w-full overflow-hidden rounded-[30px]">
                        <motion.img
                          src={filtered[imageIndex].image}
                          alt={filtered[imageIndex].title}
                          loading="lazy"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="h-full w-full object-contain drop-shadow-2xl"
                        />
                      </div>
                    </div>

                    {/* Right Side: 60% Project Info */}
                    <div className="w-full md:w-[60%] h-[60%] md:h-full flex flex-col justify-center p-6 xs:p-8 sm:p-12 md:p-16 lg:p-24 bg-background/50 backdrop-blur-md">
                      <div>
                        <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-ember mb-3">
                          {filtered[imageIndex].category}
                        </div>
                        <h3 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                          {filtered[imageIndex].title}
                        </h3>
                        <p className="mt-2 md:mt-6 text-xs xs:text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl line-clamp-3 xs:line-clamp-none">
                          {filtered[imageIndex].description}
                        </p>
                      </div>

                      <button
                        onClick={() => setOpen(filtered[imageIndex])}
                        className="mt-4 xs:mt-6 md:mt-12 flex w-fit items-center gap-2.5 xs:gap-3 rounded-full bg-ember px-5 py-2.5 xs:px-6 xs:py-3.5 text-xs xs:text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:bg-ember/90 hover:shadow-lg hover:shadow-ember/25"
                      >
                        View Project <Expand className="h-4 w-4" />
                      </button>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation Arrows */}
            <button
              className="absolute left-2 md:left-4 top-1/2 z-10 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full glass-strong text-foreground transition hover:bg-ember hover:text-primary-foreground sm:h-12 sm:w-12"
              onClick={(e) => {
                e.stopPropagation();
                paginate(-1);
              }}
              aria-label="Previous Slide"
            >
              <ChevronLeft className="h-5 w-5 pr-0.5 sm:h-6 sm:w-6" />
            </button>
            <button
              className="absolute right-2 md:right-4 top-1/2 z-10 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full glass-strong text-foreground transition hover:bg-ember hover:text-primary-foreground sm:h-12 sm:w-12"
              onClick={(e) => {
                e.stopPropagation();
                paginate(1);
              }}
              aria-label="Next Slide"
            >
              <ChevronRight className="h-5 w-5 pl-0.5 sm:h-6 sm:w-6" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 md:bottom-8 left-0 right-0 z-10 flex justify-center gap-2">
              {filtered.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setPage([i, i > imageIndex ? 1 : -1]);
                  }}
                  className={`h-2.5 rounded-full transition-all ${
                    i === imageIndex ? "w-8 bg-ember" : "w-2.5 bg-foreground/20 hover:bg-foreground/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <motion.div layout className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.button
                  key={p.id}
                  layout
                  onClick={() => setOpen(p)}
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ delay: (i % 6) * 0.05, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-3xl glass-strong text-left"
                >
                  <div
                    className={`overflow-hidden ${
                      active === "Thumbnails" ? "aspect-video" : "aspect-[4/5]"
                    }`}
                  >
                    <motion.img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/85 to-transparent p-5 pt-16">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ember">
                          {p.category}
                        </div>
                        <h3 className="font-display mt-1 text-lg font-bold text-foreground">
                          {p.title}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                          {p.description}
                        </p>
                      </div>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ember text-primary-foreground transition group-hover:scale-110">
                        <Expand className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-muted-foreground">More work coming soon in this category.</p>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-4 backdrop-blur-xl md:p-8"
          >
            <button
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full glass-strong text-foreground transition hover:bg-ember hover:text-primary-foreground"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-full max-w-5xl overflow-hidden rounded-2xl"
            >
              <img src={open.image} alt={open.title} className="max-h-[85vh] w-auto object-contain" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent p-6">
                <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ember">
                  {open.category}
                </div>
                <h3 className="font-display mt-1 text-2xl font-bold text-foreground">
                  {open.title}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                  {open.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}