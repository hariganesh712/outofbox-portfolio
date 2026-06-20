import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Linkedin, Send, Loader2 } from "lucide-react";
import { SectionHeading } from "./Reveal";
import { social } from "@/lib/site-data";
import { toast } from "sonner";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        toast.success("Inquiry sent successfully! We will get back to you soon.");
        form.reset();
      } else {
        const data = await response.json();
        toast.error(data.errors?.[0]?.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title={<>Let's <span className="text-gradient-ember">Work Together.</span></>}
          subtitle="Tell us a little about your project — we typically reply within one business day."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-5">
            <div className="rounded-3xl glass p-7">
              <h3 className="font-display text-lg font-semibold text-foreground">Studio</h3>
              <div className="mt-5 space-y-4 text-sm">
                <a href={`mailto:${social.email}`} className="flex items-center gap-3 text-muted-foreground transition hover:text-ember">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-ember/15 text-ember">
                    <Mail className="h-4 w-4" />
                  </span>
                  {social.email}
                </a>
                <a href={`tel:${social.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-muted-foreground transition hover:text-ember">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-ember/15 text-ember">
                    <Phone className="h-4 w-4" />
                  </span>
                  {social.phone}
                </a>
              </div>
            </div>

            <div className="rounded-3xl glass p-7">
              <h3 className="font-display text-lg font-semibold text-foreground">Follow</h3>
              <div className="mt-5 flex gap-3">
                <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full glass-strong text-foreground transition hover:bg-ember hover:text-primary-foreground">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full glass-strong text-foreground transition hover:bg-ember hover:text-primary-foreground">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <motion.form
            action="https://formspree.io/f/mjgdwlgo"
            method="POST"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl glass-strong p-7 md:p-10"
          >
            <input
              type="hidden"
              name="_subject"
              value="New OUT OF BOX Client Inquiry"
            />
            
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@brand.com" />
              <Field label="Phone Number" name="phone" placeholder="+91 ..." />
              <Field label="Project Type" name="type" placeholder="Branding, Video, Web…" />
              <Field label="Budget" name="budget" placeholder="₹50k – ₹5L" className="md:col-span-2" />
              <div className="md:col-span-2">
                <label className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your project..."
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-ember focus:ring-2 focus:ring-ember/30"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ember px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.74_0.19_45/0.7)] transition hover:scale-[1.03] disabled:opacity-75 disabled:scale-100 disabled:pointer-events-none"
            >
              {submitting ? (
                <>
                  Sending...
                  <Loader2 className="h-4 w-4 animate-spin" />
                </>
              ) : (
                <>
                  Send Inquiry
                  <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, className = "" }: {
  label: string; name: string; type?: string; placeholder?: string; className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-ember focus:ring-2 focus:ring-ember/30"
      />
    </div>
  );
}
