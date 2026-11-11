import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const dynamic = "force-static";
export const alt = "Zenith Capital: Research first. Conviction second.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage("Research first. Conviction second.");
}
