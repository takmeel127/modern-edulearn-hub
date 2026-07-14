import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "../components/site/Section";
import { GraduationCap, Mail } from "lucide-react";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty — The Brain College Bhakkar" },
      { name: "description", content: "Meet the experienced faculty of The Brain College Bhakkar — mentors dedicated to student success." },
      { property: "og:title", content: "Faculty — The Brain College Bhakkar" },
      { property: "og:description", content: "Meet our expert instructors." },
    ],
  }),
  component: FacultyPage,
});

const FACULTY = [
  { name: "Prof. Muhammad Ashraf", role: "Principal", qual: "MSc IT, B.Ed", initials: "MA" },
  { name: "Ma'am Nadia Iqbal", role: "MS Office & Computer Apps", qual: "MSc Computer Science", initials: "NI" },
  { name: "Sir Kashif Nawaz", role: "Advance IT (ACIT)", qual: "BS Software Engineering", initials: "KN" },
  { name: "Sir Adnan Raza", role: "Web Development", qual: "BS Computer Science", initials: "AR" },
  { name: "Ma'am Rabia Bibi", role: "Typing & Shorthand", qual: "MA English, DIT", initials: "RB" },
  { name: "Sir Waqas Ahmed", role: "Graphic Design", qual: "BFA, Adobe Certified", initials: "WA" },
  { name: "Ma'am Hina Shahzad", role: "Spoken English", qual: "MA English Literature", initials: "HS" },
  { name: "Sir Bilal Hussain", role: "Networking & Hardware", qual: "MCSE, CCNA", initials: "BH" },
];

function FacultyPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title={<>Teachers who <span className="text-gradient-gold">care</span> as much as they teach</>}
        subtitle="Our faculty combines academic depth with practical experience — small batch sizes mean every student gets attention."
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FACULTY.map((f) => (
            <div
              key={f.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elegant"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full gradient-hero text-white font-display text-3xl font-bold shadow-elegant">
                {f.initials}
              </div>
              <div className="mt-5 text-center">
                <div className="font-display text-lg font-bold text-navy">{f.name}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-royal">{f.role}</div>
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <GraduationCap className="h-3.5 w-3.5 text-gold" /> {f.qual}
                </div>
              </div>
              <div className="mt-5 flex items-center justify-center">
                <a href="#" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-navy transition-colors">
                  <Mail className="h-3.5 w-3.5" /> faculty@braincollege.pk
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <SectionHeader
            eyebrow="Join Us"
            title={<>Passionate educator? <span className="text-gradient-gold">We're hiring.</span></>}
            subtitle="Send your CV to careers@braincollegebhakkar.edu.pk — we're always looking for skilled instructors."
          />
        </div>
      </section>
    </>
  );
}
