import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, MessageSquareQuote } from "lucide-react";
import { PageHero, SectionHeader } from "../components/site/Section";
import studentsImg from "../assets/students.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Brain College Bhakkar" },
      {
        name: "description",
        content:
          "Learn about The Brain College Bhakkar — our mission, vision, principal's message, and 15+ years of commitment to computer education.",
      },
      { property: "og:title", content: "About — The Brain College Bhakkar" },
      {
        property: "og:description",
        content: "15+ years of computer education excellence in Bhakkar.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={<>Fifteen years of shaping <span className="text-gradient-gold">digital careers</span> in Bhakkar</>}
        subtitle="Since 2009, The Brain College has been an anchor for practical computer education — small classes, serious teachers, and graduates who go on to real jobs."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid gap-12 lg:grid-cols-3">
        {[
          { icon: Target, title: "Our Mission", body: "To provide affordable, high-quality computer education that equips students with the practical skills demanded by today's workplaces." },
          { icon: Eye, title: "Our Vision", body: "To be the leading skills institute of southern Punjab — remembered by every family in Bhakkar as the place where careers began." },
          { icon: Heart, title: "Our Values", body: "Discipline, respect, honesty, and continuous improvement — for our students, our teachers, and our community." },
        ].map((c) => (
          <div key={c.title} className="rounded-3xl border border-border bg-card p-8 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-gold shadow-gold">
              <c.icon className="h-7 w-7 text-navy" />
            </div>
            <h3 className="mt-6 font-display text-xl font-bold text-navy">{c.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
          </div>
        ))}
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-[2fr_3fr] items-center">
          <div className="relative">
            <img
              src={studentsImg}
              alt="Principal with students"
              width={1200}
              height={800}
              loading="lazy"
              className="rounded-3xl shadow-elegant object-cover w-full aspect-[4/5]"
            />
          </div>
          <div>
            <MessageSquareQuote className="h-10 w-10 text-gold" />
            <SectionHeader
              center={false}
              eyebrow="Principal's Message"
              title={<>"Education is the truest investment a family can make."</>}
            />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              At The Brain College, we treat every student as our own. Our job is not only to
              teach software — it is to build confident, disciplined, employable young Pakistanis
              who make Bhakkar proud. We welcome you and your family into ours.
            </p>
            <div className="mt-8">
              <div className="font-display font-bold text-navy text-lg">Prof. Muhammad Ashraf</div>
              <div className="text-sm text-muted-foreground">Principal · The Brain College Bhakkar</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader
          eyebrow="Milestones"
          title={<>A journey of <span className="text-gradient-gold">steady growth</span></>}
        />
        <ol className="mt-14 relative border-l-2 border-gold/30 ml-4 sm:ml-6 space-y-10">
          {[
            { y: "2009", t: "Founded", d: "The Brain College opened its doors with two courses and one lab." },
            { y: "2014", t: "1,000 Graduates", d: "Crossed our first major milestone of a thousand certified alumni." },
            { y: "2019", t: "Advanced IT Launched", d: "Introduced our 12-month ACIT program with dedicated project lab." },
            { y: "2024", t: "5,000+ Students", d: "Now among the largest computer institutes serving Bhakkar and nearby districts." },
          ].map((m) => (
            <li key={m.y} className="relative pl-8">
              <span className="absolute -left-[11px] top-1 h-5 w-5 rounded-full gradient-gold shadow-gold" />
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-royal">{m.y}</div>
              <div className="mt-1 font-display text-xl font-bold text-navy">{m.t}</div>
              <p className="mt-1 text-sm text-muted-foreground">{m.d}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
