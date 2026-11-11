import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const dynamic = "force-static";
export const alt = "Zenith Capital: Berkeley's student-run investment fund.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage("Berkeley's student-run investment fund.");
}
