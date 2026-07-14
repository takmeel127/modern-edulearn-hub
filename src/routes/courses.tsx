import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Monitor,
  BookOpen,
  Award,
  Keyboard,
  FileText,
  Languages,
  Clock,
  Wallet,
  UserCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { PageHero, SectionHeader } from "../components/site/Section";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses & Programs — The Brain College Bhakkar" },
      {
        name: "description",
        content:
          "Explore our certified programs: MS Office, Computer Application, Advance IT (ACIT), Typing, Shorthand and Spoken English. Duration, fee, and outline.",
      },
      { property: "og:title", content: "Courses — The Brain College Bhakkar" },
      { property: "og:description", content: "Certified computer courses in Bhakkar." },
    ],
  }),
  component: CoursesPage,
});

const COURSES = [
  {
    icon: Monitor,
    name: "MS Office",
    duration: "3 Months",
    fee: "Rs. 6,000",
    eligibility: "Matric",
    tag: "Beginner",
    outline: ["Windows Basics", "MS Word Professional", "MS Excel Formulas & Charts", "MS PowerPoint", "Email & Internet"],
  },
  {
    icon: BookOpen,
    name: "Computer Application",
    duration: "6 Months",
    fee: "Rs. 12,000",
    eligibility: "Matric",
    tag: "Popular",
    outline: ["Complete MS Office", "InPage Urdu Composing", "CorelDRAW Basics", "Photoshop Basics", "Practical Projects"],
  },
  {
    icon: Award,
    name: "Advance Certificate in IT (ACIT)",
    duration: "12 Months",
    fee: "Rs. 24,000",
    eligibility: "Intermediate",
    tag: "Certificate",
    outline: ["Office & Design Suite", "Web Development (HTML/CSS)", "Database Fundamentals", "Networking Basics", "Final Project & Internship"],
  },
  {
    icon: Keyboard,
    name: "Typing — English & Urdu",
    duration: "3 Months",
    fee: "Rs. 4,500",
    eligibility: "Middle",
    tag: "Skill",
    outline: ["Keyboard Mastery", "Speed Building", "Urdu InPage Typing", "Government Test Practice"],
  },
  {
    icon: FileText,
    name: "Shorthand",
    duration: "6 Months",
    fee: "Rs. 8,000",
    eligibility: "Matric",
    tag: "Professional",
    outline: ["Pitman Shorthand Basics", "Dictation Practice", "Transcription", "Speed Development", "Office Correspondence"],
  },
  {
    icon: Languages,
    name: "Spoken English",
    duration: "3 Months",
    fee: "Rs. 5,500",
    eligibility: "Any",
    tag: "New",
    outline: ["Everyday Conversation", "Grammar Essentials", "Pronunciation Drills", "Interview English", "Confidence Building"],
  },
];

function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title={<>Programs that lead to <span className="text-gradient-gold">real jobs</span></>}
        subtitle="Every course is designed around what employers in Pakistan actually ask for — hands-on skills, disciplined practice, and a credible certificate."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {COURSES.map((c) => (
            <article
              key={c.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl transition-colors duration-500 group-hover:bg-gold/25" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-gold shadow-elegant">
                  <c.icon className="h-7 w-7" />
                </div>
                <span className="rounded-full bg-gold/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy">
                  {c.tag}
                </span>
              </div>
              <h3 className="relative mt-6 font-display text-2xl font-bold text-navy">{c.name}</h3>

              <div className="relative mt-5 grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-xl bg-muted p-3">
                  <Clock className="h-4 w-4 text-royal" />
                  <div className="mt-1 text-muted-foreground">Duration</div>
                  <div className="font-semibold text-navy">{c.duration}</div>
                </div>
                <div className="rounded-xl bg-muted p-3">
                  <Wallet className="h-4 w-4 text-royal" />
                  <div className="mt-1 text-muted-foreground">Fee</div>
                  <div className="font-semibold text-navy">{c.fee}</div>
                </div>
                <div className="rounded-xl bg-muted p-3">
                  <UserCheck className="h-4 w-4 text-royal" />
                  <div className="mt-1 text-muted-foreground">Eligibility</div>
                  <div className="font-semibold text-navy">{c.eligibility}</div>
                </div>
              </div>

              <ul className="relative mt-6 space-y-2 text-sm">
                {c.outline.map((o) => (
                  <li key={o} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {o}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="relative mt-7 inline-flex items-center gap-2 rounded-full gradient-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-gold hover:scale-[1.03] transition-transform"
              >
                Apply for this course <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <SectionHeader
          eyebrow="How to Apply"
          title={<>A simple <span className="text-gradient-gold">three-step</span> admission</>}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { n: "01", t: "Choose your course", d: "Browse our programs and pick the one that matches your goal." },
            { n: "02", t: "Submit documents", d: "CNIC/B-Form, last certificate, and 2 passport photos at the campus office." },
            { n: "03", t: "Deposit fee & start", d: "Pay the first installment and begin classes on your chosen batch date." },
          ].map((s) => (
            <div key={s.n} className="relative rounded-3xl border border-border bg-card p-8 shadow-card">
              <div className="font-display text-5xl font-bold text-gold/40">{s.n}</div>
              <h3 className="mt-3 font-display text-lg font-bold text-navy">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
