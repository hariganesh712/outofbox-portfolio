import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo/Logo.png";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "Studio" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || mobileMenuOpen ? "py-3 bg-background/80 backdrop-blur-lg border-b border-white/5" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" className={`flex items-center gap-3 rounded-full px-2 py-1.5 transition ${scrolled ? "glass-strong" : ""}`}>
          <img src={logo} alt="Out of Box" className="h-9 w-9 rounded-full object-cover" />
          <span className="font-display text-sm font-bold tracking-[0.2em] text-foreground md:text-base">
            OUT<span className="text-ember">·</span>OF<span className="text-ember">·</span>BOX
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full glass-strong px-2 py-2 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group relative hidden overflow-hidden rounded-full bg-ember px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_-5px_oklch(0.74_0.19_45/0.6)] transition hover:scale-[1.03] md:inline-flex"
        >
          Start a Project
        </a>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full glass text-foreground md:hidden transition hover:bg-white/10"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 z-40 mx-5 mt-2 overflow-hidden rounded-3xl glass-strong py-6 px-5 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-2.5 text-base font-medium text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <hr className="border-white/10" />
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-ember py-3.5 text-center text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-5px_oklch(0.74_0.19_45/0.4)]"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
