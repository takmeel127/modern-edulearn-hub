import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react";
import { PageHero } from "../components/site/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — The Brain College Bhakkar" },
      { name: "description", content: "Visit The Brain College Bhakkar. Call, WhatsApp, or email us for admissions, courses, and fee information." },
      { property: "og:title", content: "Contact — The Brain College Bhakkar" },
      { property: "og:description", content: "Get in touch with our admissions team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title={<>We'd love to <span className="text-gradient-gold">hear from you</span></>}
        subtitle="Call, WhatsApp, email, or drop by the campus. Our admissions desk is open six days a week."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid gap-10 lg:grid-cols-[2fr_3fr]">
        <div className="space-y-4">
          {[
            { icon: MapPin, label: "Campus", value: "Jhang Road, Bhakkar, Punjab 30000" },
            { icon: Phone, label: "Phone", value: "+92 300 1234567", href: "tel:+923001234567" },
            { icon: MessageCircle, label: "WhatsApp", value: "+92 300 1234567", href: "https://wa.me/923001234567" },
            { icon: Mail, label: "Email", value: "info@braincollegebhakkar.edu.pk", href: "mailto:info@braincollegebhakkar.edu.pk" },
            { icon: Clock, label: "Office Hours", value: "Mon–Sat · 8:00 AM – 6:00 PM" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href ?? "#"}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card hover:shadow-elegant hover:-translate-y-0.5 transition-all"
            >
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl gradient-gold shadow-gold">
                <c.icon className="h-5 w-5 text-navy" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</div>
                <div className="mt-0.5 font-semibold text-navy break-words">{c.value}</div>
              </div>
            </a>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card"
        >
          <h3 className="font-display text-2xl font-bold text-navy">Send us a message</h3>
          <p className="mt-1 text-sm text-muted-foreground">We usually reply within a working day.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wider text-navy">Name</span>
              <input required maxLength={100} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-royal focus:ring-2 focus:ring-royal/20 transition" />
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wider text-navy">Phone</span>
              <input required maxLength={20} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-royal focus:ring-2 focus:ring-royal/20 transition" />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-navy">Email</span>
              <input required type="email" maxLength={255} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-royal focus:ring-2 focus:ring-royal/20 transition" />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-navy">Course of interest</span>
              <select className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-royal focus:ring-2 focus:ring-royal/20 transition">
                <option>MS Office</option>
                <option>Computer Application</option>
                <option>Advance IT (ACIT)</option>
                <option>Typing English & Urdu</option>
                <option>Shorthand</option>
                <option>Spoken English</option>
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-navy">Message</span>
              <textarea required maxLength={1000} rows={4} className="mt-1.5 w-full resize-none rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-royal focus:ring-2 focus:ring-royal/20 transition" />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full gradient-gold px-7 py-3 text-sm font-semibold text-gold-foreground shadow-gold hover:scale-[1.03] transition-transform"
          >
            <Send className="h-4 w-4" /> Send Message
          </button>
          {sent && (
            <div className="mt-4 rounded-xl bg-gold/15 border border-gold/40 px-4 py-3 text-sm text-navy">
              Thank you! Your message has been received. We'll be in touch shortly.
            </div>
          )}
        </form>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
          <iframe
            title="The Brain College Bhakkar location"
            src="https://www.google.com/maps?q=Bhakkar,Pakistan&output=embed"
            className="w-full h-[420px]"
            loading="lazy"
          />
        </div>
      </section>

      <a
        href="https://wa.me/923001234567"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-110 transition-transform animate-glow-pulse"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
}
