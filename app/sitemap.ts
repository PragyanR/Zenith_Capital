import type { MetadataRoute } from "next";
import { site } from "@/lib/content";
import { navLinks } from "@/lib/nav";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", ...navLinks.map((l) => `${l.href}/`), "/contact/"];
  return routes.map((r) => ({ url: new URL(r, site.url).toString(), changeFrequency: "monthly", priority: r === "/" ? 1 : 0.7 }));
}
