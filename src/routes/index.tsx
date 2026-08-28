import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Users,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Clock,
  Monitor,
  Keyboard,
  FileText,
  Languages,
  CheckCircle2,
  Quote,
} from "lucide-react";
import heroImg from "../assets/hero-campus.jpg";
import labImg from "../assets/lab.jpg";
import studentsImg from "../assets/students.jpg";
import { SectionHeader } from "../components/site/Section";
import { Typewriter } from "../components/site/Typewriter";


export const Route = createFileRoute("/")({
  component: Home,
});

const COURSES = [
  { icon: Monitor, name: "MS Office", duration: "3 Months", fee: "Rs. 6,000", tag: "Beginner" },
  { icon: BookOpen, name: "Computer Application", duration: "6 Months", fee: "Rs. 12,000", tag: "Popular" },
  { icon: Award, name: "Advance IT (ACIT)", duration: "12 Months", fee: "Rs. 24,000", tag: "Certificate" },
  { icon: Keyboard, name: "Typing English & Urdu", duration: "3 Months", fee: "Rs. 4,500", tag: "Skill" },
  { icon: FileText, name: "Shorthand", duration: "6 Months", fee: "Rs. 8,000", tag: "Professional" },
  { icon: Languages, name: "Spoken English", duration: "3 Months", fee: "Rs. 5,500", tag: "New" },
];

const WHY = [
  { icon: ShieldCheck, title: "Certified Programs", body: "Government-recognized certificates trusted by employers across Pakistan." },
  { icon: Users, title: "Expert Faculty", body: "Industry-experienced instructors mentoring every student personally." },
  { icon: Monitor, title: "Modern Labs", body: "High-spec computer labs, latest software, and reliable internet." },
  { icon: Sparkles, title: "Career Focus", body: "Job-ready skills with placement guidance and real-world projects." },
];

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const dur = 1600;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            setN(Math.floor(end * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end]);
  return (
    <div ref={ref} className="font-display text-4xl sm:text-5xl font-bold text-gold">
      {n.toLocaleString()}
      {suffix}
    </div>
  );
}

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt=""
            width={1600}
            height={1000}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/80 to-royal/70" />
          <div className="absolute inset-0 [background-image:radial-gradient(circle_at_15%_25%,rgba(244,180,0,0.25),transparent_45%)]" />
        </div>
        <div className="absolute top-20 right-8 h-40 w-40 rounded-full bg-gold/25 blur-3xl animate-float-slow" />
        <div className="absolute bottom-24 left-4 h-48 w-48 rounded-full bg-royal/40 blur-3xl animate-float-slow [animation-delay:1.5s]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/15 px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur animate-glow-pulse">
            <Sparkles className="h-3.5 w-3.5" /> Admissions Open 2026
          </div>
          <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] max-w-4xl">
            Shape Your Future at{" "}
            <span className="block sm:inline">
              <Typewriter />
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed">
            A premier institute of computer education. Certified courses, modern labs, and expert
            faculty preparing students for a bright, digital career.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/courses"
              className="group inline-flex items-center gap-2 rounded-full gradient-gold px-7 py-3.5 text-sm sm:text-base font-semibold text-gold-foreground shadow-gold transition-transform duration-200 hover:scale-[1.03]"
            >
              Apply Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm sm:text-base font-semibold text-white backdrop-blur hover:bg-white/10 transition-colors"
            >
              Discover the College
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-4xl">
            {[
              { end: 5200, suffix: "+", label: "Students Trained" },
              { end: 12, suffix: "", label: "Courses Offered" },
              { end: 4800, suffix: "+", label: "Certified Alumni" },
              { end: 15, suffix: "+", label: "Years Excellence" },
            ].map((s) => (
              <div key={s.label} className="glass rounded-2xl p-5 sm:p-6">
                <Counter end={s.end} suffix={s.suffix} />
                <div className="mt-1 text-xs sm:text-sm text-white/75 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <SectionHeader
          eyebrow="Why Choose Us"
          title={<>Where ambition meets <span className="text-gradient-gold">excellence</span></>}
          subtitle="Since 2009, The Brain College has empowered thousands of students in Bhakkar with practical, career-ready computer education."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w, i) => (
            <div
              key={w.title}
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-gold shadow-gold">
                <w.icon className="h-6 w-6 text-navy" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-navy">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.body}</p>
              <div className="absolute inset-x-6 -bottom-px h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </section>

      {/* COURSES PREVIEW */}
      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              center={false}
              eyebrow="Programs"
              title={<>Career-focused courses<br />designed for today's workplace</>}
            />
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-royal transition-colors"
            >
              View all courses <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((c) => (
              <div
                key={c.name}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elegant"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/10 blur-2xl transition-opacity duration-500 group-hover:bg-gold/25" />
                <div className="relative flex items-start justify-between">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-gold shadow-elegant">
                    <c.icon className="h-7 w-7" />
                  </div>
                  <span className="rounded-full bg-gold/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy">
                    {c.tag}
                  </span>
                </div>
                <h3 className="relative mt-6 font-display text-xl font-bold text-navy">{c.name}</h3>
                <div className="relative mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4 text-gold" />{c.duration}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span className="font-semibold text-navy">{c.fee}</span>
                </div>
                <Link
                  to="/courses"
                  className="relative mt-6 inline-flex items-center gap-1 text-sm font-semibold text-royal hover:gap-2 transition-all"
                >
                  Course details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT — About */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/30 to-royal/20 blur-2xl" />
            <img
              src={studentsImg}
              alt="Students at The Brain College Bhakkar"
              width={1200}
              height={800}
              loading="lazy"
              className="relative rounded-3xl shadow-elegant object-cover w-full aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-2xl bg-card p-4 shadow-elegant border border-border">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl gradient-gold">
                  <GraduationCap className="h-5 w-5 text-navy" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Since</div>
                  <div className="font-display font-bold text-navy">2009</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <SectionHeader
              center={false}
              eyebrow="About the College"
              title={<>A trusted name in <span className="text-gradient-gold">computer education</span> in Bhakkar</>}
              subtitle="We combine practical training with strong fundamentals — helping students build careers in IT, offices, and government service."
            />
            <ul className="mt-8 space-y-3">
              {[
                "Recognized certificates with lifetime verification",
                "Job placement guidance and interview preparation",
                "Separate labs for practice, projects, and typing",
                "Scholarships for merit and deserving students",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm sm:text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-royal transition-colors"
            >
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="relative overflow-hidden bg-navy text-white py-20 sm:py-28">
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_80%_20%,rgba(244,180,0,0.35),transparent_45%),radial-gradient(circle_at_10%_80%,rgba(37,99,235,0.4),transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Facilities
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Modern labs, calm classrooms, everything a serious student needs.
            </h2>
            <p className="mt-5 text-white/75 leading-relaxed max-w-xl">
              From individual workstations and updated software to a quiet reading room and free
              Wi-Fi — our campus is built around learning.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-lg">
              {[
                "40+ Workstations",
                "Reliable Internet",
                "Air-conditioned Labs",
                "Reading Room",
                "Reference Library",
                "CCTV Security",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-white/85">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {f}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={labImg}
              alt="Computer lab at The Brain College"
              width={1200}
              height={800}
              loading="lazy"
              className="rounded-3xl shadow-elegant object-cover w-full aspect-[4/3] border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>Voices from our <span className="text-gradient-gold">graduates</span></>}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Ayesha Malik",
              role: "ACIT · Class of 2024",
              quote:
                "The faculty was incredibly supportive. I got a data-entry job in a government office within two months of finishing my certificate.",
            },
            {
              name: "Muhammad Usman",
              role: "MS Office · Class of 2023",
              quote:
                "Small classes, hands-on practice, and real projects. I finally understood Excel — and my new office role wouldn't have been possible without it.",
            },
            {
              name: "Sana Fatima",
              role: "Shorthand · Class of 2025",
              quote:
                "Discipline, respect, and skill. The Brain College is much more than a training center — it's where careers begin in Bhakkar.",
            },
          ].map((t) => (
            <figure
              key={t.name}
              className="relative rounded-3xl border border-border bg-card p-7 shadow-card transition-transform duration-300 hover:-translate-y-1"
            >
              <Quote className="h-8 w-8 text-gold/40" />
              <blockquote className="mt-4 text-sm sm:text-base leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full gradient-gold font-display font-bold text-navy">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-navy text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
        <div className="relative overflow-hidden rounded-3xl gradient-hero px-6 sm:px-12 py-14 sm:py-20 text-white shadow-elegant">
          <div className="absolute -top-16 -right-10 h-56 w-56 rounded-full bg-gold/25 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-royal/40 blur-3xl" />
          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Admissions Open
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Begin your journey with The Brain College — Session 2026
            </h2>
            <p className="mt-4 text-white/80 max-w-2xl">
              Limited seats. Merit-based scholarships available. Visit our campus or apply online.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 rounded-full gradient-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold hover:scale-[1.03] transition-transform"
              >
                Apply Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold backdrop-blur hover:bg-white/10 transition-colors"
              >
                Visit Campus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
