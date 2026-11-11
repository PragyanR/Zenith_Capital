# Zenith Capital website

Static site for Zenith Capital, the investment fund of Alpha Epsilon Zeta at UC Berkeley. Content is drawn from the *Zenith Capital Overview* deck (Sep 2025): four strategy pods, the Investment Committee, and the risk mandate.

Next.js (App Router, static export) · TypeScript · Tailwind CSS v4.

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
npm run lint     # type-check
```

## Pages

| Route | What it covers |
| --- | --- |
| `/` | Hero with target allocation, key facts, principles, the four pods, risk mandate, process, membership, alumni firms |
| `/approach/` | Philosophy, allocation by pod, pod detail, risk management, investment process |
| `/structure/` | Governance diagram, roles, and current officers (hidden until `officers` has entries) |
| `/letters/` | Semester investor letters (shows a request-a-copy message until `letters` has entries) |
| `/contact/` | Alumni, recruiter, and brother inquiries |

## Updating content (no component changes needed)

Everything editable lives in `content/`, typed so a mistake fails the build:

| File | What it holds |
| --- | --- |
| `site.ts` | Name, URL, contact email, AEZ/Paradigm/Innovate links, footer disclosure |
| `fund.ts` | Pods and target allocations, risk mandate, principles, process, roles, alumni firms |
| `people.ts` | Current officers and published investor letters, updated each semester |

To publish a letter, put the PDF in `public/letters/` and add an entry to `letters` in `content/people.ts`.

## Deploying (free, GitHub Pages)

The site is served from the `gh-pages` branch at https://pragyanr.github.io/Zenith_Capital/.

```bash
npm run deploy   # builds with BASE_PATH=/Zenith_Capital and pushes ./out to gh-pages
```

One-time setup by a repo admin: **Settings → Pages → Build and deployment → Source: Deploy from a branch → `gh-pages` / root**.

Pages serves the repo under `/Zenith_Capital`, so the Pages build sets `BASE_PATH`. Local `npm run dev` and `npm run build` use no base path. If the site moves to a custom domain or Vercel, deploy the plain build and update `url` in `content/site.ts`.
