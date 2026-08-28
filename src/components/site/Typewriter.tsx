import { useEffect, useState } from "react";

type Phrase = { text: string; className: string };

const DEFAULT_PHRASES: Phrase[] = [
  { text: "Brain College Bhakkar", className: "text-gradient-gold" },
  { text: "Admissions Open 2026", className: "text-white" },
  { text: "Certified IT Education", className: "text-royal-glow" },
];

export function Typewriter({
  phrases = DEFAULT_PHRASES,
  typeSpeed = 85,
  deleteSpeed = 40,
  holdTime = 1600,
}: {
  phrases?: Phrase[];
  typeSpeed?: number;
  deleteSpeed?: number;
  holdTime?: number;
}) {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const current = phrases[index % phrases.length];

  useEffect(() => {
    const full = current.text;
    if (!deleting && count === full.length) {
      const t = setTimeout(() => setDeleting(true), holdTime);
      return () => clearTimeout(t);
    }
    if (deleting && count === 0) {
      const t = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      }, 320);
      return () => clearTimeout(t);
    }
    const t = setTimeout(
      () => setCount((c) => c + (deleting ? -1 : 1)),
      deleting ? deleteSpeed : typeSpeed,
    );
    return () => clearTimeout(t);
  }, [count, deleting, current.text, holdTime, typeSpeed, deleteSpeed, phrases.length]);

  return (
    <span className="inline-flex items-baseline">
      <span className={`${current.className} transition-colors duration-500`}>
        {current.text.slice(0, count)}
      </span>
      <span
        aria-hidden
        className="ml-1 inline-block h-[0.9em] w-[3px] rounded-full bg-gold animate-caret-blink"
      />
      <span className="sr-only">{current.text}</span>
    </span>
  );
}
