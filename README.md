# Zenith Capital website

Five-page static site for Zenith Capital, the student-run investment fund of Alpha Epsilon Zeta at UC Berkeley. Built from `SPEC.md`.

Next.js (App Router, static export) · TypeScript · Tailwind CSS v4 · Zod-validated JSON content.

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out (deploy this folder to Vercel/Netlify)
npm run lint     # type-check
```

## Updating content (no code changes needed)

Everything editable lives in `content/`. Each file is validated against `lib/schema.ts` at build time, so a typo fails the build instead of shipping.

| File | What it holds |
| --- | --- |
| `site.json` | Name, founding year, emails, links, stats band, footer disclosures, `showPortfolio` switch |
| `strategy.json` | Philosophy, the two approach cards and their chips, process steps, coverage groups, semester roadmap, sample pitch |
| `holdings.json` | Portfolio summary tiles, as-of date, benchmark, holdings table (`showReturns: false` hides the return tile) |
| `pitches.json` | Pitch archive (`recommendation` is `Buy` or `Pass`; optional `deck` path) |
| `team.json` | Leadership and analysts (analysts need a `group` matching a coverage group name) |
| `alumni.json` | Alumni list |
| `logos.json` | Firms on the home-page logo wall |

Setting `showPortfolio` to `false` removes `/portfolio` from the nav and sitemap and shows "Selected pitches" on `/strategy` instead.

## Images (optional; the site falls back gracefully)

- `public/images/campanile.webp`: hero photo (under 200 KB). Without it, the hero uses a navy gradient.
- `public/images/team/<first-last>.jpg`: square team photos, paths set in `team.json`. Without them, cards show initials.
- `public/logos/<firm-slug>.svg`: e.g. `houlihan-lokey.svg`. Without them, firm names are set in type.
- `public/pitches/*.pdf`: sample pitch / archive decks.

## Before launch

Find every remaining placeholder:

```bash
grep -rn "\[" content/
```

Then work through the launch checklist and "Inputs needed" list in `SPEC.md`. In particular, confirm `linkedin` and `aezUrl` in `site.json` (both are guesses) and the university independence wording.
