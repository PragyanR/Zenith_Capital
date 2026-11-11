Zenith Capital website: technical script
Nov 10, 2026 · @Rama T
This script specifies a five-page marketing site for Zenith Capital, the student-run investment fund of Alpha Epsilon Zeta at UC Berkeley, built as a sibling of berkeleyparadigm.org. Copy in [brackets] is a placeholder for a fact that is not public yet.
Brief
Zenith Capital is a nonprofit, student-run investment fund that operates as an arm of Alpha Epsilon Zeta (AEZ) at UC Berkeley, the same fraternity that runs Paradigm Consulting. The site's job is to make the fund look as established as Paradigm does, and to give alumni and sponsors one link to send.
The LinkedIn page could not be read directly (it blocks automated access), so the Zenith facts below come from a third-party company listing that mirrors the fund's description. Confirm each one against the LinkedIn page before launch.
Fact
Value used in this script
Status
What it is
Nonprofit, student-run investment fund
From the RocketReach listing; confirm
Parent organization
Alpha Epsilon Zeta, UC Berkeley; sibling of Paradigm Consulting
Confirmed by you
Membership
AEZ members only, so the site does not recruit
Confirmed by you
Alumni
Zenith's alumni are AEZ and Paradigm alumni: 200+ people, 100% placement, $500M+ raised by alumni-founded startups
Figures from the Paradigm site and the AEZ alumni page
Founded
2017
RocketReach listing; its sidebar says 2003, which is AEZ's founding year. Confirm
Mission
Give members real investing experience using creative and fundamental approaches
Same listing; confirm wording
Fund size, holdings, returns
[placeholder]
Not public; no Paradigm equivalent
Team and roles
Same leads as Paradigm: Om Awate, Sreekar Nagulapalli, Aadi Agrawal, Sashank Gadisetti
Names from the Paradigm contact page; Zenith titles to confirm
Audience, in priority order:
1. Alumni and sponsors: people who may contribute capital, mentorship, or a guest talk.
2. Recruiters: firms checking what a candidate's "Zenith Capital" line means.
3. AEZ members: brothers deciding whether to get involved with the fund.
Site map
The site has five routes and one shared layout. Paradigm's site runs on three nav items (About, Services, Contact Us) with a stats-led home page; Zenith keeps that skeleton and swaps Services for the fund's own material.
Route
Nav label
Purpose
Sections, in order
/
(logo)
Establish credibility in one scroll
Hero, stats band, about, strategy preview, process, alumni, contact banner
/strategy
Strategy
Explain how the fund invests
Philosophy, coverage groups, pitch process, sample pitch
/portfolio
Portfolio
Show the work
Holdings table, performance summary, pitch archive
/team
Team
Put faces to the fund
Leadership, analysts by coverage group, alumni
/contact
Contact
Route inquiries
Contact cards, general inbox
Navigation rules:
• Header: logo left, links right (Strategy, Portfolio, Team), with Contact as a filled dark-red button at the far right. It stays fixed and gains a solid background after 40px of scroll.
• Mobile, under 768px: links collapse into a full-screen menu behind a hamburger button.
• Footer: "Alpha Epsilon Zeta • UC Berkeley", general email, Berkeley, California, LinkedIn link, cross-links to Paradigm Consulting and AEZ, and the disclosures.
• There is no Join page. Membership runs through AEZ, so the footer's AEZ link is the only path for prospective members.
• If Portfolio data is not ready at launch, ship without that route and fold a short "Selected pitches" block into Strategy.
Home page script
The home page runs seven sections top to bottom and should make the case without a single click. Each section lists its layout, its copy, and its behavior.
1. Hero
• Layout: full viewport height. Background is the Campanile photo under a near-black navy overlay at 80% opacity, the same treatment as the Paradigm deck cover. A short dark-red bar sits above the headline. Content is left-aligned and capped at 720px wide.
• Eyebrow: UC BERKELEY • EST. 2017
• Headline (H1): Berkeley's student-run investment fund.
• Subhead: Zenith Capital trains undergraduates to research, pitch, and manage real positions, with the discipline of a professional fund.
• Primary button: Our strategy → /strategy
• Secondary button: Meet the team → /team
• Behavior: headline and subhead fade up 16px over 600ms on load. A thin light-blue line chart draws left to right behind the text over 2 seconds, once. Both are skipped when the visitor has reduced motion turned on.
2. Stats band
• Layout: one row of four large numbers on a royal-blue band; two by two on mobile.
• Copy: 2017 Founded · 40+ Active members · <10% Acceptance rate · 100% Placement
• Second row: 200+ Alumni · $500M+ Raised by alumni-founded startups · [$XX,000] Under management, if the fund publishes it
• Source: member count, acceptance rate, placement, and alumni figures are Paradigm's own, carried over because the two groups share people. Swap in Zenith-specific numbers when they exist.
• Behavior: numbers count up from zero over 1.2 seconds when the band first scrolls into view.
3. About
• Layout: two columns. Left has the heading and two paragraphs; right has three stacked feature blocks, each with an icon.
• Heading (H2): About Zenith
• Paragraph 1: Zenith Capital is a nonprofit, student-run investment fund and the investing arm of Alpha Epsilon Zeta at UC Berkeley. Since 2017, our members have learned to invest by doing it: building a thesis, defending it in front of the fund, and living with the result.
• Paragraph 2: Our analysts come from Business, Engineering, Computer Science, Economics, and beyond. That range shapes how we look at companies, and it is why our pitches rarely sound alike.
• Feature 1, Real experience: Every member covers companies, builds models, and pitches to the full fund.
• Feature 2, Fundamental and creative: We pair classic valuation work with less conventional sources of insight.
• Feature 3, A lasting network: Members join 200+ AEZ alumni across finance, technology, and consulting.
4. Strategy preview
• Layout: two cards side by side, each with a heading, one sentence, and a row of tag-style chips (the same pattern as Paradigm's Services section).
• Heading (H2): How we invest
• Card 1, Fundamental research: We start with the business: what it earns, what it is worth, and what the market is missing. Chips: Financial modeling · DCF and comparables · Industry analysis · Earnings coverage · Risk assessment · Position sizing
• Card 2, Creative approaches: We look for an edge where a standard model stops. Chips: Thematic theses · Alternative data · Event-driven ideas · Quantitative screens · Cross-disciplinary research · Special situations
• Link: See our full strategy → /strategy
• Note: the chips are proposed. Replace them with the methods the fund really uses.
5. Process
• Layout: four numbered steps in a horizontal row joined by a thin line; stacked vertically on mobile.
• Heading (H2): From idea to position
1. Source. Analysts screen their coverage group for mispriced companies.
2. Research. A team of [3 to 4] builds the model, the thesis, and the risks over [X] weeks.
3. Pitch. The team presents to the full fund and takes questions.
4. Vote and monitor. Members vote. Approved ideas enter the portfolio and are reviewed [each semester].
6. Alumni placements
• Layout: heading plus a grid of white logos on the dark background, five per row on desktop and three on mobile, in the style of the alumni section on Paradigm's site.
• Heading (H2): Where our alumni work
• Line: Zenith is part of Alpha Epsilon Zeta, and its alumni are AEZ's: 200+ people across investment banking, private equity, hedge funds, and technology.
• Logos: finance firms from the AEZ alumni page first: Jefferies, TPG, Houlihan Lokey, Moelis, Guggenheim Securities, Wells Fargo, Needham, Squarepoint. Reuse the logo files already on the Paradigm site where they overlap.
7. Contact banner
• Layout: full-width dark-red band, centered white text, one button.
• Heading (H2): Talk to the fund.
• Line: Alumni, speakers, and sponsors: we would like to hear from you.
• Button: Get in touch → /contact
Inner pages script
The four inner pages reuse the home page's components and borrow their structure from the Paradigm pitch deck: its "Why Paradigm?" grid, team structure diagram, 12-week roadmap, and contact cards. Each opens with a short page header: eyebrow, H1, and one sentence on a navy band.
Strategy (/strategy)
• Header: HOW WE INVEST / Research first. Conviction second. / Every position in the fund starts as a student's thesis and survives a room full of questions.
• Philosophy: three short blocks. Own businesses, not tickers. We value companies on what they can earn. Look where others don't. A fund of engineers, scientists, and economists reads a company differently. Write it down. Every thesis states what would prove it wrong.
• Coverage groups: a grid of cards, one per group, each with a name, a one-line focus, and its lead. Proposed groups: [Technology], [Healthcare], [Consumer], [Financials], [Industrials and Energy].
• Team structure: a small diagram in the style of the Paradigm deck's SA, PM, CT chart: one Portfolio Manager, one Lead per coverage group, [3 to 4] Analysts per group.
• Semester roadmap: a 12-week horizontal bar chart modeled on the deck's engagement roadmap. Weeks 1 to 3: training and coverage assignment. Weeks 3 to 6: idea screening. Weeks 5 to 9: research and modeling. Week 10: pitch day. Weeks 11 to 12: vote and portfolio review. Adjust to the fund's real calendar.
• Sample pitch: one embedded slide or a one-page PDF download, with the company, the thesis in two sentences, and the outcome.
Portfolio (/portfolio)
• Header: PORTFOLIO / What we own and why. / Positions are sized by conviction and reviewed [each semester].
• Summary tiles: [Number of holdings] · [Sectors covered] · [Return since inception] vs. [benchmark] · as-of date.
• Holdings table: columns are Company, Ticker, Coverage group, Date added, and Thesis in one line. Sortable by column; a search box above it.
• Pitch archive: cards by semester, each with a company, a recommendation (Buy, Pass), and a link to the deck.
• Rule: every performance number shows its as-of date and benchmark next to it. If the fund would rather not publish returns, drop the tile and keep the holdings and archive.
Team (/team)
• Header: TEAM / The people behind the positions.
• Leadership: a row of four large cards with photo, name, role, major, and LinkedIn link. Same people as Paradigm's leadership: Om Awate, Sreekar Nagulapalli, Aadi Agrawal, Sashank Gadisetti. Reuse their photos from the Paradigm contact page. Each card shows the person's Zenith title, [to confirm].
• Analysts: smaller cards grouped under each coverage group, drawn from the same 40+ member roster.
• Alumni: a compact list of name, class, and current firm, copied from the AEZ alumni list.
• Behavior: photos are square, grayscale by default, and full color on hover. Each card's bio opens in a small overlay on click.
Contact (/contact)
• Header: CONTACT / Get in touch with our team members.
• Contact cards: the same four cards as Paradigm's contact page, each with photo, name, and email: Om Awate (omawate1@berkeley.edu), Sreekar Nagulapalli (sreekar_nagul@berkeley.edu), Aadi Agrawal (aadia12@berkeley.edu), Sashank Gadisetti (sgadisetti@berkeley.edu).
• General inquiries: aezparadigm@gmail.com, the shared Paradigm inbox, until Zenith has its own. Add a line for sponsors and alumni who want to speak or contribute.
• Footer strip: Alpha Epsilon Zeta • UC Berkeley • Berkeley, California.
Design system
Zenith uses Paradigm's palette: a near-black navy base with dark red and royal blue accents, white headings, and the Campanile photo under a dark overlay. The values below were sampled from the Paradigm pitch deck, because the live site's stylesheet was not readable from outside; swap in the exact hex codes from the Paradigm codebase when you have it open.
Color
Token
Hex (approximate)
Use
--ink
#0A0E1A
Page background, hero overlay, footer
--panel
#111827
Cards, table rows, page-header bands
--line
#243049
Card borders, dividers, connector lines
--red
#8B0000
Primary buttons, accent bars, contact banner
--blue
#1E3A8A
Secondary buttons, card edge accents, stats band
--red-bright
#E84040
Highlighted words in headings, as in "Why Paradigm?"
--blue-bright
#60A5FA
Links, chart line, highlighted phrases in body text
--white
#FFFFFF
Headings
--mist
#C9D1DC
Body text
--up / --down
#34D399 / #F87171
Positive and negative figures on Portfolio only
The site is dark throughout, like the deck. Paradigm uses red for Strategy and blue for Tech; Zenith keeps the pairing, with blue for Fundamental research and red for Creative approaches. Dark red and royal blue are fills only: text on the dark background uses the bright variants, which meet contrast.
Type
Role
Face
Size (desktop / mobile)
Weight
H1
Inter, uppercase on the hero only
64px / 40px
700
H2
Inter
40px / 28px
700
H3
Inter
20px / 18px
600
Body
Inter
17px / 16px
400
Eyebrow
Inter, uppercase, 0.12em tracking
13px
600
Stats and tickers
IBM Plex Mono, tabular figures
56px / 36px
500
Wordmark
Cormorant Garamond, uppercase, wide tracking
20px
500
Layout and components
• Grid: 12 columns, 1200px maximum content width, 24px gutters. Sections have 120px vertical padding on desktop and 72px on mobile.
• Breakpoints: 640px, 768px, 1024px, 1280px.
• Buttons: 48px tall with a 4px radius. Primary is dark-red fill with white text; secondary is a 1px white outline. Hover lightens the fill over 150ms.
• Cards: --panel fill, 1px --line border, 6px radius, and a 4px vertical accent bar on one edge in red or blue, as on the deck's "Why Paradigm?" slide.
• Section headings: a short dark-red vertical bar to the left of each H2, with one word in --red-bright.
• Chips: 32px tall pills with a 1px --line border, 14px text, and wrapping rows.
• Stat: white mono numeral with a 14px uppercase --mist label beneath it.
• Motion: elements fade up 16px as they enter the viewport, once, staggered 80ms. All motion is off under prefers-reduced-motion.
• Imagery: real photos of members and campus over stock, each under the navy overlay. Team photos use a shared crop and background.
• Logo: a serif wordmark, "ZENITH" over "CAPITAL" between two thin rules, matching the Paradigm Consulting lockup, until the fund supplies its own.
Technical spec
Build a statically generated Next.js site with all content in typed JSON files, so each semester's officers can update numbers and names without touching components. No database or CMS is needed at this size.
Stack
Layer
Choice
Why
Framework
Next.js (App Router) with TypeScript, statically exported
Paradigm's site already runs on Next.js, so its layout, header, and footer can be forked
Styling
Tailwind CSS, with the design tokens above as CSS variables
One source for color and spacing
Content
JSON files in /content, validated with Zod at build time
A wrong or missing field fails the build instead of shipping
Animation
CSS transitions plus one IntersectionObserver hook
No animation library to maintain
Hosting
Vercel or Netlify, deploying from the main branch
Preview link on every pull request
Domain
[berkeleyzenith.org], to pair with berkeleyparadigm.org
Check availability
Analytics
A cookieless tool such as Plausible or Vercel Analytics
No consent banner needed
File structure
zenith-site/
  app/
    layout.tsx          # header, footer, fonts, metadata defaults
    page.tsx            # home
    strategy/page.tsx
    portfolio/page.tsx
    team/page.tsx
    contact/page.tsx
    sitemap.ts
    robots.ts
  components/
    Header.tsx  Footer.tsx  PageHeader.tsx
    Hero.tsx  StatBand.tsx  FeatureGrid.tsx  ChipCard.tsx
    ProcessSteps.tsx  LogoWall.tsx  ContactBanner.tsx
    HoldingsTable.tsx  TeamCard.tsx  Timeline.tsx
  content/
    site.json           # name, founded year, emails, links, stats
    strategy.json  holdings.json  pitches.json
    team.json  alumni.json
  lib/
    schema.ts           # Zod schemas for every content file
    useInView.ts
  public/
    images/  logos/  pitches/
Content model
// lib/schema.ts
export const Site = z.object({
  name: z.string(),
  founded: z.number(),            // used everywhere the year appears
  tagline: z.string(),
  email: z.string().email(),
  linkedin: z.string().url(),
  aezUrl: z.string().url(),
  paradigmUrl: z.string().url(),
  stats: z.array(z.object({ value: z.string(), label: z.string() })).max(8),
});

export const Holding = z.object({
  company: z.string(),
  ticker: z.string(),
  group: z.string(),
  added: z.string(),              // ISO date
  thesis: z.string().max(140),
});

export const Member = z.object({
  name: z.string(),
  role: z.string(),
  group: z.string().optional(),
  major: z.string(),
  photo: z.string(),
  linkedin: z.string().url().optional(),
});

// alumni.json can be copied from the AEZ alumni list
export const Alum = z.object({
  name: z.string(),
  classYear: z.string(),
  firm: z.string(),
  position: z.string().optional(),
});
Every fact that appears more than once (founding year, member count, email) is read from site.json. Paradigm's site shows why: its page says founded 2003 while its meta description says "since 2000".
SEO and sharing
• Title template: {Page} | Zenith Capital at Berkeley. Home is Zenith Capital | UC Berkeley's Student-Run Investment Fund.
• Meta description, home: Zenith Capital is a student-run investment fund at UC Berkeley and part of Alpha Epsilon Zeta. Members research, pitch, and manage real positions.
• Open Graph: one 1200 by 630 image per page, with navy background, wordmark, and page title.
• Structured data: JSON-LD Organization on the home page with name, URL, logo, founding date, parent organization, and sameAs pointing to LinkedIn.
• Files: generated sitemap.xml and robots.txt, and a canonical URL on every page.
Performance and accessibility targets
• Lighthouse scores of 95 or higher for Performance, Accessibility, Best Practices, and SEO on mobile.
• Largest Contentful Paint under 2.5 seconds on a throttled 4G profile. The hero image is served as AVIF or WebP under 200 KB with priority set.
• Fonts are self-hosted through next/font with display: swap, limited to three families and five weights in total.
• WCAG 2.2 AA: 4.5:1 text contrast, visible focus rings, full keyboard access to the menu, accordion, and table sorting, and alt text on every photo and logo.
• The site works with JavaScript disabled, apart from count-up numbers and table sorting, which fall back to static values.
Launch checklist
[ ] Every [bracketed] placeholder is replaced or its section removed
[ ] Founding year, stats, and emails match the LinkedIn page
[ ] Logo permissions are confirmed for every firm on the logo wall
[ ] Disclosures appear in the footer of every page
[ ] Paradigm and AEZ sites link to Zenith, and Zenith links back
[ ] LinkedIn page's website field points to the new domain
Disclosures
A fund site needs three short statements in the footer of every page, in 13px --mist text. This is drafting guidance and not legal advice; have an AEZ advisor or the campus student-organization office review the final wording.
• Educational purpose: Zenith Capital is a student organization. Content on this site is for educational purposes only and is not investment advice or an offer to buy or sell any security.
• Performance: Past performance does not guarantee future results. All figures are unaudited and shown as of the date stated.
• University independence: the standard statement Berkeley student groups carry, saying the group acts independently of the University of California and is responsible for its own site. The AEZ site footer has the current wording.
The fund's public description says it aims for "superior returns". Keep that phrase off the site unless a dated, benchmarked figure sits next to it; the script's copy talks about training and process instead.
Inputs needed
Nine items stand between this script and a launchable site. The first four change the copy the most. Alumni data and brand colors are off the list: both come from AEZ and Paradigm.
[ ] Is the fund's capital real money or a paper portfolio? The hero says "real positions".
[ ] Founding year: 2017 or another year?
[ ] Fund size, and whether it can be published
[ ] Whether to publish holdings and returns, and against which benchmark
[ ] Coverage groups and their leads
[ ] Investment methods, to replace the proposed chips
[ ] Semester calendar and one sample pitch that can be shown publicly
[ ] Zenith titles for the four leads carried over from Paradigm
[ ] A screenshot of the Zenith LinkedIn banner, to match its colors, plus logo files and the domain
Rule for anything else that comes up: when Zenith has no answer of its own, use Paradigm's.
Sources
• Paradigm Consulting home page: navigation, hero, stats, services layout, footer
• Paradigm Consulting contact page: contact-card layout
• Paradigm Pitch Deck (PDF, 22 pages, uploaded): "Why Paradigm?" grid, team structure, 12-week roadmap, stats
• RocketReach listing for Zenith Capital: fund description, founding year, AEZ affiliation (search-result summary)
• AEZ alumni page: alumni firms and network figures (search-result summary)
• AEZ student organization site: university independence statement
• Zenith Capital on LinkedIn: not readable by automated tools; check by hand