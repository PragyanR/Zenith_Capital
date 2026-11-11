// Current officers and published letters. Edit each semester.
// Leave a list empty and the site shows a neutral message instead of placeholders.

export type Officer = {
  name: string;
  role: string; // e.g. "VP of Investments", "Pod Leader, Long/Short Equity"
  year?: string; // e.g. "Class of 2027"
  linkedin?: string;
};

export const officers: Officer[] = [];

export type Letter = {
  title: string; // e.g. "Spring 2027 Investor Letter"
  date: string; // ISO date, e.g. "2027-05-15"
  summary: string;
  href?: string; // path under /public, e.g. "/letters/spring-2027.pdf"
};

export const letters: Letter[] = [];
