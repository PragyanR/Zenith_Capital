import "server-only";
import fs from "node:fs";
import path from "node:path";
import { z } from "zod";
import * as S from "./schema";
import siteJson from "@/content/site.json";
import strategyJson from "@/content/strategy.json";
import holdingsJson from "@/content/holdings.json";
import pitchesJson from "@/content/pitches.json";
import teamJson from "@/content/team.json";
import alumniJson from "@/content/alumni.json";
import logosJson from "@/content/logos.json";

/** Parse at build time: a wrong or missing field fails the build instead of shipping. */
function load<T extends z.ZodType>(file: string, schema: T, data: unknown): z.infer<T> {
  const result = schema.safeParse(data);
  if (!result.success) {
    throw new Error(`content/${file} is invalid:\n${z.prettifyError(result.error)}`);
  }
  return result.data;
}

export const site = load("site.json", S.Site, siteJson);
export const strategy = load("strategy.json", S.Strategy, strategyJson);
export const holdings = load("holdings.json", S.Holdings, holdingsJson);
export const pitches = load("pitches.json", z.array(S.Pitch), pitchesJson);
export const team = load("team.json", S.Team, teamJson);
export const alumni = load("alumni.json", z.array(S.Alum), alumniJson);
export const logos = load("logos.json", z.array(z.string().min(1)), logosJson);

/** True when a file exists under /public, so components can fall back gracefully. */
export function publicFileExists(publicPath: string): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", publicPath));
}

export function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
