import { useEffect, useRef, useState, type ReactNode } from "react";
import { X, Inbox, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

/* ---------- Scroll reveal ---------- */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ---------- Buttons ---------- */
const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";

export function Btn({
  variant = "gold",
  size = "md",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "gold" | "navy" | "outline" | "ghost" | "danger";
  size?: "sm" | "md";
}) {
  const variants = {
    gold: "gradient-gold text-gold-foreground shadow-gold hover:scale-[1.03] active:scale-95",
    navy: "bg-navy text-white hover:bg-navy/90 hover:shadow-elegant active:scale-95",
    outline: "border border-border bg-card text-foreground hover:border-navy/40 hover:bg-muted active:scale-95",
    ghost: "text-foreground/80 hover:bg-muted hover:text-navy",
    danger: "bg-destructive text-destructive-foreground hover:opacity-90 active:scale-95",
  };
  const sizes = { sm: "px-3.5 py-2 text-xs", md: "px-5 py-2.5" };
  return <button className={cn(btnBase, variants[variant], sizes[size], className)} {...props} />;
}

/* ---------- Card ---------- */
export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ---------- Badge ---------- */
export function Badge({
  tone = "muted",
  children,
}: {
  tone?: "muted" | "success" | "warn" | "danger" | "info";
  children: ReactNode;
}) {
  const tones = {
    muted: "bg-muted text-muted-foreground",
    success: "bg-emerald-500/12 text-emerald-700",
    warn: "bg-gold/20 text-navy",
    danger: "bg-destructive/12 text-destructive",
    info: "bg-royal/12 text-royal",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, "success" | "warn" | "danger" | "muted"> = {
    approved: "success",
    pending: "warn",
    rejected: "danger",
  };
  return <Badge tone={map[status] ?? "muted"}>{status}</Badge>;
}

/* ---------- Form fields ---------- */
export function Field({
  label,
  error,
  children,
  hint,
}: {
  label: string;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">{label}</span>
      {children}
      {hint && !error && <span className="mt-1 block text-xs text-muted-foreground">{hint}</span>}
      {error && (
        <span className="mt-1 flex items-center gap-1 text-xs font-medium text-destructive">
          <AlertCircle className="h-3.5 w-3.5" /> {error}
        </span>
      )}
    </label>
  );
}

export const inputCls =
  "w-full rounded-xl border border-input bg-card px-3.5 py-2.5 text-sm outline-none transition-all duration-200 placeholder:text-muted-foreground focus:border-royal focus:ring-2 focus:ring-ring/30";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(inputCls, props.className)} />;
}
export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn(inputCls, "min-h-28 resize-y", props.className)} />;
}
export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={cn(inputCls, "cursor-pointer", props.className)} />;
}

/* ---------- Alerts ---------- */
export function Alert({ tone = "success", children }: { tone?: "success" | "error"; children: ReactNode }) {
  return (
    <div
      role="status"
      className={cn(
        "flex items-start gap-2 rounded-xl border px-4 py-3 text-sm animate-in fade-in slide-in-from-top-2",
        tone === "success"
          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-800"
          : "border-destructive/30 bg-destructive/10 text-destructive",
      )}
    >
      {tone === "success" ? (
        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
      ) : (
        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
      )}
      <div className="min-w-0">{children}</div>
    </div>
  );
}

export function Spinner({ label = "Loading…" }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-2 py-10 text-sm text-muted-foreground">
      <Loader2 className="h-4 w-4 animate-spin" /> {label}
    </div>
  );
}

export function EmptyState({ title, body }: { title: string; body?: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-14 text-center">
      <Inbox className="h-8 w-8 text-muted-foreground" />
      <div className="mt-3 font-display font-semibold text-navy">{title}</div>
      {body && <p className="mt-1 max-w-sm text-sm text-muted-foreground">{body}</p>}
    </div>
  );
}

/* ---------- Modal ---------- */
export function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4">
      <div
        className="absolute inset-0 bg-navy/50 backdrop-blur-sm animate-in fade-in"
        onClick={onClose}
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-2xl border border-border bg-card p-5 shadow-elegant animate-in fade-in slide-in-from-bottom-4 sm:zoom-in-95"
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <h3 className="font-display text-lg font-bold text-navy">{title}</h3>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-navy"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

/* ---------- Table shell ---------- */
export function TableWrap({ children }: { children: ReactNode }) {
  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
      <table className="w-full min-w-[640px] text-left text-sm">{children}</table>
    </div>
  );
}
export function Th({ children, className }: { children?: ReactNode; className?: string }) {
  return (
    <th
      className={cn(
        "whitespace-nowrap border-b border-border bg-muted/60 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground",
        className,
      )}
    >
      {children}
    </th>
  );
}
export function Td({ children, className }: { children?: ReactNode; className?: string }) {
  return <td className={cn("border-b border-border/70 px-4 py-3 align-middle", className)}>{children}</td>;
}
export function Tr({ children }: { children: ReactNode }) {
  return <tr className="transition-colors hover:bg-muted/50">{children}</tr>;
}

/* ---------- Stat card ---------- */
export function Stat({
  icon: Icon,
  label,
  value,
  tone = "navy",
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: ReactNode;
  tone?: "navy" | "gold" | "royal" | "muted";
}) {
  const tones = {
    navy: "bg-navy/10 text-navy",
    gold: "bg-gold/20 text-navy",
    royal: "bg-royal/12 text-royal",
    muted: "bg-muted text-muted-foreground",
  };
  return (
    <div className="group rounded-2xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant">
      <div className={cn("inline-flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110", tones[tone])}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-4 font-display text-3xl font-bold text-navy">{value}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
