import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function NotFound() {
  return (
    <>
      <PageHeader eyebrow="404" title="This page isn't in the portfolio." lead="The link may be old, or the page may have moved." />
      <div className="container-z py-16">
        <Link href="/" className="btn btn-primary">Back to home</Link>
      </div>
    </>
  );
}
