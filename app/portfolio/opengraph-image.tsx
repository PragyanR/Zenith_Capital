import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const dynamic = "force-static";
export const alt = "Zenith Capital: What we own and why.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage("What we own and why.");
}
