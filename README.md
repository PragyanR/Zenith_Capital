# Zenith Capital

The investment fund of Alpha Epsilon Zeta at UC Berkeley.

**Visit the site: https://pragyanr.github.io/Zenith_Capital/**

Nothing needs to be installed to view the site; it is hosted on GitHub Pages. The rest of this page is for officers who maintain it.

---

## For maintainers

Static site built with Next.js (App Router, static export), TypeScript, and Tailwind CSS v4. Figures come from the *Zenith Capital Overview* deck (Sep 2025).

### Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
npm run lint     # type-check
```

### Editing

The site is one page (`app/page.tsx`) with sections for Approach, Portfolio, Risk, Process, Structure, Alumni, and Contact. Text lives in `content/`:

| File | What it holds |
| --- | --- |
| `site.ts` | Name, URL, contact email, links, footer disclosure |
| `fund.ts` | Pods and target allocations, risk limits, principles, process steps, roles, alumni firms |

The hero photo is `public/images/members.jpg`. Replace that file to change it.

### Deploying (free, GitHub Pages)

The site is served from the `gh-pages` branch at https://pragyanr.github.io/Zenith_Capital/.

```bash
npm run deploy   # builds with BASE_PATH=/Zenith_Capital and pushes ./out to gh-pages
```

Pages must stay set to **Settings → Pages → Source: Deploy from a branch → `gh-pages` / root**. Pointing it at `main` publishes this README instead of the site.

Pages serves the repo under `/Zenith_Capital`, so the Pages build sets `BASE_PATH`. Local `npm run dev` and `npm run build` use no base path. If the site moves to a custom domain or Vercel, deploy the plain build and update `url` in `content/site.ts`.
