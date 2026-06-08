import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
        scrolled ? "py-3" : "py-5"
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
      </div>
    </motion.header>
  );
}
