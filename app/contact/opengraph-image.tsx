import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const dynamic = "force-static";
export const alt = "Zenith Capital: Get in touch with the fund.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage("Get in touch with the fund.");
}
