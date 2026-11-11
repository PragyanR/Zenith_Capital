import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const dynamic = "force-static";
export const alt = "Zenith Capital: The people behind the positions.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage("The people behind the positions.");
}
