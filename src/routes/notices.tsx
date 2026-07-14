import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/Section";
import { Calendar, Bell, GraduationCap, FileCheck2, PartyPopper } from "lucide-react";

export const Route = createFileRoute("/notices")({
  head: () => ({
    meta: [
      { title: "Notices & Announcements — The Brain College Bhakkar" },
      { name: "description", content: "Latest notices, admission announcements, exam schedules and results from The Brain College Bhakkar." },
      { property: "og:title", content: "Notices — The Brain College Bhakkar" },
      { property: "og:description", content: "Latest announcements from The Brain College." },
    ],
  }),
  component: NoticesPage,
});

const NOTICES = [
  { icon: GraduationCap, tag: "Admissions", date: "10 Jan 2026", title: "Admissions Open for Spring Session 2026", body: "Applications are being accepted for all courses. Limited seats available on a first-come, first-served basis. Merit scholarships open." },
  { icon: FileCheck2, tag: "Exams", date: "05 Jan 2026", title: "Final Exam Schedule — Autumn 2025 Batch", body: "Final examinations for the Autumn 2025 batch will begin on 20th January 2026. Detailed timetable available at the office." },
  { icon: Bell, tag: "Announcement", date: "28 Dec 2025", title: "Winter Break Notice", body: "The college will remain closed from 25th December to 2nd January for winter vacations. Regular classes resume 3rd January." },
  { icon: PartyPopper, tag: "Event", date: "15 Dec 2025", title: "Annual Prize Distribution Ceremony", body: "Join us on 22nd December for our annual prize distribution and certificate award ceremony. All alumni are welcome." },
  { icon: FileCheck2, tag: "Results", date: "01 Dec 2025", title: "ACIT Mid-Term Results Announced", body: "Mid-term results for the ACIT program have been published. Students may collect their result sheets from the office." },
  { icon: GraduationCap, tag: "Admissions", date: "20 Nov 2025", title: "Fee Concession for Deserving Students", body: "Applications for need-based fee concession are being accepted through 30th November. Contact the office for details." },
];

function NoticesPage() {
  return (
    <>
      <PageHero
        eyebrow="Notice Board"
        title={<>Latest <span className="text-gradient-gold">announcements</span></>}
        subtitle="Admissions, exam schedules, results, holidays and campus events — all in one place."
      />
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-5">
          {NOTICES.map((n, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elegant hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 gradient-gold" />
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-gold">
                  <n.icon className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-gold/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy">
                  {n.tag}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" /> {n.date}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg sm:text-xl font-bold text-navy">{n.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{n.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
