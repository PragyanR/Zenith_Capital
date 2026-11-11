/** Square team photo; falls back to initials on a navy tile when the photo file is missing. */
export default function Avatar({ name, src, hasPhoto, className = "" }: { name: string; src: string; hasPhoto: boolean; className?: string }) {
  const initials = name.split(/\s+/).map((p) => p[0]).slice(0, 2).join("").toUpperCase();
  return (
    <div className={`relative aspect-square overflow-hidden border-b border-line bg-blue/40 ${className}`}>
      {hasPhoto ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={`Portrait of ${name}`} loading="lazy" className="photo-gray size-full object-cover" />
      ) : (
        <div role="img" aria-label={`${name} (photo coming soon)`} className="photo-gray grid size-full place-items-center">
          <span className="font-serif text-5xl font-medium tracking-wider text-white/90">{initials}</span>
        </div>
      )}
    </div>
  );
}
