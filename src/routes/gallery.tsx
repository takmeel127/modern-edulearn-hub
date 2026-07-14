import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/Section";
import heroImg from "../assets/hero-campus.jpg";
import labImg from "../assets/lab.jpg";
import studentsImg from "../assets/students.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — The Brain College Bhakkar" },
      { name: "description", content: "Campus, labs, events, and student moments at The Brain College Bhakkar." },
      { property: "og:title", content: "Gallery — The Brain College Bhakkar" },
      { property: "og:description", content: "A look inside our campus and classrooms." },
    ],
  }),
  component: GalleryPage,
});

const IMAGES = [
  { src: heroImg, alt: "Campus at golden hour", span: "md:col-span-2 md:row-span-2" },
  { src: labImg, alt: "Computer lab" },
  { src: studentsImg, alt: "Students in class" },
  { src: heroImg, alt: "Front entrance" },
  { src: labImg, alt: "Practice session" },
  { src: studentsImg, alt: "Class portrait", span: "md:col-span-2" },
];

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>Moments from our <span className="text-gradient-gold">campus life</span></>}
        subtitle="A visual walkthrough of our facilities, labs, and student community."
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {IMAGES.map((img, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-card ${img.span ?? ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <figcaption className="absolute bottom-3 left-4 right-4 text-white text-sm font-semibold opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
