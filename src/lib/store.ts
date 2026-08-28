import { useCallback, useEffect, useState } from "react";

export type Status = "pending" | "approved" | "rejected";

export type Admission = {
  id: string;
  name: string;
  fatherName: string;
  cnic: string;
  phone: string;
  email: string;
  course: string;
  qualification: string;
  address: string;
  status: Status;
  appliedAt: string;
};

export type Student = {
  id: string;
  rollNo: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  course: string;
  session: string;
  active: boolean;
};

export type Course = {
  id: string;
  name: string;
  duration: string;
  fee: string;
  level: string;
  description: string;
};

export type Faculty = {
  id: string;
  name: string;
  role: string;
  subject: string;
  email: string;
  experience: string;
};

export type Result = {
  id: string;
  rollNo: string;
  studentName: string;
  course: string;
  term: string;
  obtained: number;
  total: number;
  grade: string;
};

export type Post = {
  id: string;
  title: string;
  body: string;
  category: string;
  date: string;
  pinned: boolean;
};

export type Message = {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  body: string;
  date: string;
  read: boolean;
};

export type Settings = {
  collegeName: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  admissionOpen: boolean;
};

export type DB = {
  admissions: Admission[];
  students: Student[];
  courses: Course[];
  faculty: Faculty[];
  results: Result[];
  posts: Post[];
  messages: Message[];
  settings: Settings;
};

export const DB_KEY = "tbc_db_v1";
export const ADMIN_KEY = "tbc_admin_session";
export const STUDENT_KEY = "tbc_student_session";
export const ADMIN_USER = "admin";
export const ADMIN_PASS = "brain2026";

export function uid() {
  return Math.random().toString(36).slice(2, 10);
}

export function seed(): DB {
  return {
    admissions: [
      {
        id: "a1",
        name: "Ali Raza",
        fatherName: "Muhammad Aslam",
        cnic: "38101-1234567-1",
        phone: "0300-1234567",
        email: "ali.raza@example.com",
        course: "Advance IT (ACIT)",
        qualification: "Intermediate",
        address: "Jhang Road, Bhakkar",
        status: "approved",
        appliedAt: "2026-07-14",
      },
      {
        id: "a2",
        name: "Ayesha Noor",
        fatherName: "Abdul Rehman",
        cnic: "38101-7654321-2",
        phone: "0301-7654321",
        email: "ayesha.noor@example.com",
        course: "MS Office",
        qualification: "Matric",
        address: "Darya Khan, Bhakkar",
        status: "pending",
        appliedAt: "2026-08-02",
      },
      {
        id: "a3",
        name: "Hamza Tariq",
        fatherName: "Tariq Mehmood",
        cnic: "38101-1122334-5",
        phone: "0345-1122334",
        email: "hamza.tariq@example.com",
        course: "Spoken English",
        qualification: "BA",
        address: "Mankera, Bhakkar",
        status: "rejected",
        appliedAt: "2026-08-11",
      },
    ],
    students: [
      {
        id: "s1",
        rollNo: "TBC-2026-001",
        name: "Ali Raza",
        email: "student@brain.edu.pk",
        password: "student123",
        phone: "0300-1234567",
        course: "Advance IT (ACIT)",
        session: "2026",
        active: true,
      },
      {
        id: "s2",
        rollNo: "TBC-2026-002",
        name: "Fatima Zahra",
        email: "fatima@example.com",
        password: "student123",
        phone: "0302-9988776",
        course: "Computer Application",
        session: "2026",
        active: true,
      },
    ],
    courses: [
      { id: "c1", name: "MS Office", duration: "3 Months", fee: "Rs. 6,000", level: "Beginner", description: "Word, Excel, PowerPoint and practical office documentation." },
      { id: "c2", name: "Computer Application", duration: "6 Months", fee: "Rs. 12,000", level: "Intermediate", description: "Complete computer literacy with hardware and internet skills." },
      { id: "c3", name: "Advance IT (ACIT)", duration: "12 Months", fee: "Rs. 24,000", level: "Advanced", description: "Certificate program covering IT fundamentals, web and databases." },
      { id: "c4", name: "Typing English & Urdu", duration: "3 Months", fee: "Rs. 4,500", level: "Skill", description: "Speed typing with InPage and standard keyboard mastery." },
      { id: "c5", name: "Shorthand", duration: "6 Months", fee: "Rs. 8,000", level: "Professional", description: "Stenography training for government and office positions." },
      { id: "c6", name: "Spoken English", duration: "3 Months", fee: "Rs. 5,500", level: "Beginner", description: "Confident communication, grammar and interview practice." },
    ],
    faculty: [
      { id: "f1", name: "Muhammad Imran", role: "Principal", subject: "IT Management", email: "imran@brain.edu.pk", experience: "15 years" },
      { id: "f2", name: "Sadia Yousaf", role: "Senior Instructor", subject: "MS Office & Typing", email: "sadia@brain.edu.pk", experience: "9 years" },
      { id: "f3", name: "Bilal Ahmed", role: "Instructor", subject: "Web Development", email: "bilal@brain.edu.pk", experience: "6 years" },
      { id: "f4", name: "Nadia Kanwal", role: "Instructor", subject: "Spoken English", email: "nadia@brain.edu.pk", experience: "5 years" },
    ],
    results: [
      { id: "r1", rollNo: "TBC-2026-001", studentName: "Ali Raza", course: "Advance IT (ACIT)", term: "Term 1", obtained: 862, total: 1000, grade: "A" },
      { id: "r2", rollNo: "TBC-2026-002", studentName: "Fatima Zahra", course: "Computer Application", term: "Term 1", obtained: 744, total: 1000, grade: "B" },
    ],
    posts: [
      { id: "p1", title: "Admissions Open for Session 2026", body: "Apply online for all certified computer and vocational programs. Limited seats available in evening batches.", category: "Admission", date: "2026-08-01", pinned: true },
      { id: "p2", title: "Term 1 Results Announced", body: "Students can check their results online using their roll number on the Results page.", category: "Result", date: "2026-08-18", pinned: false },
      { id: "p3", title: "Free Career Counselling Session", body: "A career guidance session for new students will be held at the main campus auditorium.", category: "Event", date: "2026-08-25", pinned: false },
    ],
    messages: [
      { id: "m1", name: "Usman Ghani", email: "usman@example.com", phone: "0333-4455667", subject: "Fee structure", body: "Please share the fee structure for the ACIT program.", date: "2026-08-20", read: false },
      { id: "m2", name: "Hina Shahid", email: "hina@example.com", phone: "0311-2233445", subject: "Evening classes", body: "Are evening classes available for Spoken English?", date: "2026-08-22", read: true },
    ],
    settings: {
      collegeName: "The Brain College Bhakkar",
      tagline: "Building futures since 2009",
      phone: "+92 300 1234567",
      email: "info@braincollegebhakkar.edu.pk",
      address: "Jhang Road, Bhakkar, Punjab",
      admissionOpen: true,
    },
  };
}

export function readDB(): DB {
  if (typeof window === "undefined") return seed();
  try {
    const raw = localStorage.getItem(DB_KEY);
    if (!raw) {
      const fresh = seed();
      localStorage.setItem(DB_KEY, JSON.stringify(fresh));
      return fresh;
    }
    return { ...seed(), ...(JSON.parse(raw) as DB) };
  } catch {
    return seed();
  }
}

export function writeDB(db: DB) {
  if (typeof window === "undefined") return;
  localStorage.setItem(DB_KEY, JSON.stringify(db));
  window.dispatchEvent(new CustomEvent("tbc-db-change"));
}

/** Hydration-safe DB hook. Returns null until mounted on the client. */
export function useDB() {
  const [db, setDb] = useState<DB | null>(null);

  useEffect(() => {
    setDb(readDB());
    const onChange = () => setDb(readDB());
    window.addEventListener("tbc-db-change", onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener("tbc-db-change", onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  const update = useCallback((fn: (d: DB) => DB) => {
    const next = fn(readDB());
    writeDB(next);
    setDb(next);
  }, []);

  const reset = useCallback(() => {
    writeDB(seed());
    setDb(seed());
  }, []);

  return { db, update, reset };
}

export function useSession(key: string) {
  const [value, setValue] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setValue(localStorage.getItem(key));
    setReady(true);
    const onChange = () => setValue(localStorage.getItem(key));
    window.addEventListener("storage", onChange);
    return () => window.removeEventListener("storage", onChange);
  }, [key]);

  const signIn = useCallback(
    (v: string) => {
      localStorage.setItem(key, v);
      setValue(v);
    },
    [key],
  );
  const signOut = useCallback(() => {
    localStorage.removeItem(key);
    setValue(null);
  }, [key]);

  return { value, ready, signIn, signOut };
}
