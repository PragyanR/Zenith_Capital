import { z } from "zod";

/** A value that is either real copy or a [bracketed placeholder]. */
const Text = z.string().min(1);

export const Stat = z.object({ value: Text, label: Text });

export const Site = z.object({
  name: Text,
  founded: z.number().int().min(1900), // used everywhere the year appears
  tagline: Text,
  description: Text,
  url: z.url(),
  email: z.email(),
  location: Text,
  parent: Text,
  linkedin: z.url(),
  aezUrl: z.url(),
  paradigmUrl: z.url(),
  /** false = drop /portfolio and show "Selected pitches" on /strategy instead. */
  showPortfolio: z.boolean(),
  stats: z.array(Stat).max(8),
  disclosures: z.object({ educational: Text, performance: Text, university: Text }),
});

export const Approach = z.object({
  title: Text,
  accent: z.enum(["blue", "red"]),
  body: Text,
  chips: z.array(Text).min(1),
});

export const Strategy = z.object({
  philosophy: z.array(z.object({ title: Text, body: Text })).length(3),
  approaches: z.array(Approach).length(2),
  process: z.array(z.object({ title: Text, body: Text })).length(4),
  groups: z.array(z.object({ name: Text, focus: Text, lead: Text })).min(1),
  analystsPerGroup: Text,
  roadmap: z
    .array(
      z
        .object({ label: Text, start: z.number().int().min(1).max(12), end: z.number().int().min(1).max(12) })
        .refine((r) => r.end >= r.start, "roadmap: end week must be on or after start week"),
    )
    .min(1),
  samplePitch: z.object({
    company: Text,
    ticker: Text,
    semester: Text,
    thesis: Text,
    outcome: Text,
    file: z.string().optional(), // e.g. /pitches/sample.pdf
  }),
});

export const Holding = z.object({
  company: Text,
  ticker: Text,
  group: Text,
  added: Text, // ISO date
  thesis: z.string().max(140),
});

export const Holdings = z.object({
  asOf: Text,
  benchmark: Text,
  showReturns: z.boolean(),
  reviewCadence: Text,
  summary: z.object({
    holdings: Text,
    sectors: Text,
    returnSinceInception: Text,
    benchmarkReturn: Text,
  }),
  holdings: z.array(Holding),
});

export const Pitch = z.object({
  semester: Text,
  company: Text,
  ticker: Text,
  recommendation: z.enum(["Buy", "Pass"]),
  deck: z.string().optional(), // e.g. /pitches/fall-2026-aaaa.pdf
});

export const Member = z.object({
  name: Text,
  role: Text,
  group: z.string().optional(),
  major: Text,
  photo: Text,
  linkedin: z.url().optional(),
  email: z.email().optional(),
  bio: z.string().optional(),
});

export const Team = z.object({
  leadership: z.array(Member).min(1),
  analysts: z.array(Member),
});

// alumni.json can be copied from the AEZ alumni list
export const Alum = z.object({
  name: Text,
  classYear: Text,
  firm: Text,
  position: z.string().optional(),
});

export type SiteT = z.infer<typeof Site>;
export type StatT = z.infer<typeof Stat>;
export type HoldingT = z.infer<typeof Holding>;
export type MemberT = z.infer<typeof Member>;
export type PitchT = z.infer<typeof Pitch>;
export type ApproachT = z.infer<typeof Approach>;
