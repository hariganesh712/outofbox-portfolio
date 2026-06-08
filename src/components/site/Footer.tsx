import { Instagram, Linkedin } from "lucide-react";
import { social } from "@/lib/site-data";
import logo from "@/assets/logo/Logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black/40 py-14">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember/50 to-transparent" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Out of Box" className="h-12 w-12 rounded-full object-cover" />
            <div>
              <div className="font-display text-lg font-bold tracking-[0.2em] text-foreground">OUT·OF·BOX</div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Creative Studio & Digital Solutions</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-muted-foreground">
            A multidisciplinary studio crafting brands, films and digital experiences for businesses ready to stand out.
          </p>
        </div>

        <FooterCol title="Quick Links" links={[
          { href: "#services", label: "Services" },
          { href: "#work", label: "Portfolio" },
          { href: "#about", label: "About" },
          { href: "#contact", label: "Contact" },
        ]} />

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground">Social</div>
          <div className="mt-5 flex gap-3">
            <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full glass-strong text-foreground transition hover:bg-ember hover:text-primary-foreground">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full glass-strong text-foreground transition hover:bg-ember hover:text-primary-foreground">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/5 px-5 pt-6 text-xs text-muted-foreground md:flex-row md:px-8">
        <div>© {new Date().getFullYear()} Out of Box Studio. All rights reserved.</div>
        <div className="tracking-[0.25em] uppercase">Think · Outside · The · Box</div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground">{title}</div>
      <ul className="mt-5 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-sm text-muted-foreground transition hover:text-ember">{l.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
