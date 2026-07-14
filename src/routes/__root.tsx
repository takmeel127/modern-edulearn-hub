import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import logo from "../assets/logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/faculty", label: "Faculty" },
  { to: "/gallery", label: "Gallery" },
  { to: "/notices", label: "Notices" },
  { to: "/contact", label: "Contact" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8 max-w-7xl">
        <Link to="/" className="flex min-w-0 items-center gap-3 group">
          <img
            src={logo}
            alt="The Brain College Bhakkar"
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 rounded-xl object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="min-w-0 leading-tight">
            <div className="truncate font-display text-base sm:text-lg font-bold text-navy">
              The Brain College
            </div>
            <div className="truncate text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Bhakkar · Est. 2009
            </div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-navy transition-colors"
              activeProps={{ className: "text-navy" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {({ isActive }) => (
                <>
                  <span>{n.label}</span>
                  <span
                    className={`absolute left-4 right-4 -bottom-0.5 h-0.5 gradient-gold rounded-full transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </>
              )}
            </Link>
          ))}
          <Link
            to="/courses"
            className="ml-3 inline-flex items-center gap-2 rounded-full gradient-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-gold transition-transform duration-200 hover:scale-[1.03]"
          >
            <GraduationCap className="h-4 w-4" />
            Apply Now
          </Link>
        </nav>
        <button
          type="button"
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-in fade-in slide-in-from-top-2">
          <nav className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium hover:bg-muted"
                activeProps={{ className: "bg-muted text-navy" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/courses"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full gradient-gold px-5 py-3 text-sm font-semibold text-gold-foreground shadow-gold"
            >
              <GraduationCap className="h-4 w-4" /> Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" width={40} height={40} className="h-10 w-10 rounded-lg object-contain" />
            <div className="font-display text-lg font-bold">The Brain College</div>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            A premier institute of computer education in Bhakkar. Building futures since 2009 with
            certified programs, modern labs, and dedicated faculty.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Facebook" className="rounded-full border border-white/20 p-2 hover:bg-gold hover:text-navy transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="rounded-full border border-white/20 p-2 hover:bg-gold hover:text-navy transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="YouTube" className="rounded-full border border-white/20 p-2 hover:bg-gold hover:text-navy transition-colors">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-gold">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {NAV.slice(0, 4).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-gold transition-colors">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-gold">Info</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {NAV.slice(4).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-gold transition-colors">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-gold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> Jhang Road, Bhakkar, Punjab</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> +92 300 1234567</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> info@braincollegebhakkar.edu.pk</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} The Brain College Bhakkar. All rights reserved.</div>
          <div>Designed with care · Admissions Open 2026</div>
        </div>
      </div>
    </footer>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-navy">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full gradient-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-gold"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white hover:bg-navy/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium hover:bg-muted"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Brain College Bhakkar — Admissions Open 2026" },
      {
        name: "description",
        content:
          "The Brain College Bhakkar — premier institute of computer education. Certified courses in MS Office, IT, Typing, Shorthand. Admissions Open 2026.",
      },
      { name: "author", content: "The Brain College Bhakkar" },
      { property: "og:title", content: "The Brain College Bhakkar — Admissions Open 2026" },
      {
        property: "og:description",
        content:
          "Certified computer education in Bhakkar. Modern labs, expert faculty, career-focused courses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=Noto+Nastaliq+Urdu:wght@400;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
