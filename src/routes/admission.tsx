import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHero } from "@/components/site/Section";
import { Alert, Btn, Field, Input, Reveal, Select, Textarea } from "@/components/site/UI";
import { uid, useDB, type Admission } from "@/lib/store";

export const Route = createFileRoute("/admission")({
  head: () => ({
    meta: [
      { title: "Online Admission Form — The Brain College Bhakkar" },
      { name: "description", content: "Apply online for certified computer and vocational courses at The Brain College Bhakkar. Session 2026 admissions open." },
      { property: "og:title", content: "Online Admission — The Brain College Bhakkar" },
      { property: "og:description", content: "Submit your admission application online in minutes. Session 2026 open now." },
    ],
  }),
  component: AdmissionPage,
});

const schema = z.object({
  name: z.string().trim().min(3, "Enter your full name").max(80),
  fatherName: z.string().trim().min(3, "Enter father's name").max(80),
  cnic: z.string().trim().regex(/^\d{5}-\d{7}-\d$/, "Format: 38101-1234567-1"),
  phone: z.string().trim().regex(/^0\d{3}-?\d{7}$/, "Format: 0300-1234567"),
  email: z.string().trim().email("Invalid email address").max(120),
  course: z.string().min(1, "Select a course"),
  qualification: z.string().min(1, "Select qualification"),
  address: z.string().trim().min(5, "Enter your address").max(200),
});

function AdmissionPage() {
  const { db, update } = useDB();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [ticket, setTicket] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const raw = Object.fromEntries(form.entries());
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[String(issue.path[0])] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    const id = `TBC-${new Date().getFullYear()}-${uid().slice(0, 4).toUpperCase()}`;
    const record: Admission = {
      id,
      ...parsed.data,
      status: "pending",
      appliedAt: new Date().toISOString().slice(0, 10),
    };
    setTimeout(() => {
      update((d) => ({ ...d, admissions: [record, ...d.admissions] }));
      setSubmitting(false);
      setTicket(id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 700);
  };

  return (
    <>
      <PageHero
        eyebrow="Session 2026"
        title="Online Admission Form"
        subtitle="Fill the form below and note your application ID. You can track your status any time from the Admission Status page."
      />
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14">
        {ticket ? (
          <Reveal>
            <Alert>
              <div className="font-semibold">Application submitted successfully.</div>
              <div className="mt-1">
                Your Application ID is <span className="font-mono font-bold">{ticket}</span>. Save it to
                check your admission status.
              </div>
            </Alert>
            <div className="mt-6 flex flex-wrap gap-3">
              <Btn variant="navy" onClick={() => setTicket(null)}>
                Submit another application
              </Btn>
              <a href="/admission-status">
                <Btn variant="outline">Check status</Btn>
              </a>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="grid gap-5 rounded-3xl border border-border bg-card p-6 shadow-card sm:grid-cols-2 sm:p-8"
            >
              <Field label="Full Name" error={errors.name}>
                <Input name="name" placeholder="Ali Raza" autoComplete="name" maxLength={80} />
              </Field>
              <Field label="Father's Name" error={errors.fatherName}>
                <Input name="fatherName" placeholder="Muhammad Aslam" maxLength={80} />
              </Field>
              <Field label="CNIC / B-Form" error={errors.cnic} hint="38101-1234567-1">
                <Input name="cnic" placeholder="38101-1234567-1" maxLength={15} />
              </Field>
              <Field label="Phone" error={errors.phone} hint="0300-1234567">
                <Input name="phone" placeholder="0300-1234567" maxLength={12} inputMode="tel" />
              </Field>
              <Field label="Email" error={errors.email}>
                <Input name="email" type="email" placeholder="you@example.com" maxLength={120} />
              </Field>
              <Field label="Course" error={errors.course}>
                <Select name="course" defaultValue="">
                  <option value="" disabled>
                    Select a course
                  </option>
                  {(db?.courses ?? []).map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name} · {c.duration}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label="Last Qualification" error={errors.qualification}>
                <Select name="qualification" defaultValue="">
                  <option value="" disabled>
                    Select qualification
                  </option>
                  {["Middle", "Matric", "Intermediate", "BA / BSc", "MA / MSc", "Other"].map((q) => (
                    <option key={q} value={q}>
                      {q}
                    </option>
                  ))}
                </Select>
              </Field>
              <div className="sm:col-span-2">
                <Field label="Address" error={errors.address}>
                  <Textarea name="address" placeholder="House, street, city" maxLength={200} />
                </Field>
              </div>
              <div className="sm:col-span-2 flex flex-wrap items-center gap-3">
                <Btn type="submit" disabled={submitting}>
                  {submitting ? "Submitting…" : "Submit Application"}
                </Btn>
                <span className="text-xs text-muted-foreground">
                  Your data is stored locally in this demo.
                </span>
              </div>
            </form>
          </Reveal>
        )}
      </section>
    </>
  );
}
