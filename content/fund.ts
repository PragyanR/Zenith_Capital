// The fund's mandate, drawn from the Zenith Capital overview (Sep 2025).
// Allocations are targets; pods may drift +/- 10% based on performance.

export type Pod = {
  id: string;
  name: string;
  short: string;
  target: number; // percent of portfolio
  horizon: string;
  summary: string;
  detail: string;
  instruments: string[];
  color: string; // CSS variable name
};

export const pods: Pod[] = [
  {
    id: "long-short",
    name: "Long/Short Equity",
    short: "Long/Short",
    target: 50,
    horizon: "6 months to 5 years",
    summary:
      "Fundamental, value-based stock selection on both sides of the book, run close to market-neutral.",
    detail:
      "The core of the fund. Analysts build a thesis on a single company, value it on what it can earn, and size long and short positions so the book carries little exposure to the market as a whole.",
    instruments: ["Single-name equities", "Paired positions", "Net beta under 0.2"],
    color: "var(--navy)",
  },
  {
    id: "sector-etfs",
    name: "Sector ETFs",
    short: "Sector ETFs",
    target: 25,
    horizon: "Cyclical",
    summary:
      "Exposure to sectors with durable tailwinds and favorable macroeconomic conditions.",
    detail:
      "Where a view is about an industry rather than a company, the pod expresses it through exchange-traded funds, rotating as the macro picture changes.",
    instruments: ["Sector and thematic ETFs", "Macro research", "Rotation reviews"],
    color: "var(--maroon)",
  },
  {
    id: "fixed-income",
    name: "Fixed Income",
    short: "Fixed Income",
    target: 15,
    horizon: "Short to intermediate",
    summary:
      "U.S. Treasuries, certificates of deposit, and investment-grade bonds for stable yield and liquidity.",
    detail:
      "The fund’s ballast. The pod holds high-quality, liquid instruments and keeps the cash reserve the mandate requires for margin and withdrawals.",
    instruments: ["U.S. Treasuries", "Certificates of deposit", "Investment-grade credit"],
    color: "var(--slate)",
  },
  {
    id: "derivatives",
    name: "Derivatives",
    short: "Derivatives",
    target: 10,
    horizon: "Tactical",
    summary:
      "Protective puts and shorts to hedge the equity book, and covered calls for predictable income.",
    detail:
      "The pod works alongside the others: it hedges the risks the Long/Short book cannot diversify away and writes covered calls against existing holdings.",
    instruments: ["Protective puts", "Covered calls", "Portfolio hedges"],
    color: "var(--gold)",
  },
];

export const mandate = [
  {
    figure: "5%",
    title: "Position limit",
    body: "No single investment may exceed 5% of total portfolio value at entry.",
  },
  {
    figure: "30%",
    title: "Sector cap",
    body: "Exposure to any one sector is capped at 30% of the portfolio.",
  },
  {
    figure: "|β| < 0.2",
    title: "Market neutrality",
    body: "The Long/Short pod keeps its absolute beta below 0.2 to limit the effect of market cycles.",
  },
  {
    figure: "10%",
    title: "Liquidity floor",
    body: "At least 10% of assets stay in cash or short-duration Treasuries to cover margin and withdrawals.",
  },
  {
    figure: "±10%",
    title: "Allocation drift",
    body: "Pod allocations move up to ten points from target, rewarding the strategies that perform.",
  },
];

export const principles = [
  {
    title: "Own businesses, not tickers.",
    body: "Every equity position begins with what a company earns and what it is worth. Price is where the work ends, not where it starts.",
  },
  {
    title: "Risk before return.",
    body: "Diversification across four strategies, explicit hedges, and hard position limits come first. Returns are what is left after the risks are paid for.",
  },
  {
    title: "Write it down.",
    body: "No investment reaches the committee without a written pitch. A thesis that cannot be put on paper is not ready to be owned.",
  },
];

export const process = [
  {
    step: "01",
    title: "Training and endorsement",
    body: "Brothers complete pod training and are endorsed by their Pod Leader before they work on live ideas.",
  },
  {
    step: "02",
    title: "Research",
    body: "The pod sources an idea within its strategy, builds the model, and identifies what would prove the thesis wrong.",
  },
  {
    step: "03",
    title: "Written pitch",
    body: "Every recommendation is submitted as a written pitch of at least half a page, reviewed by the Pod Leader.",
  },
  {
    step: "04",
    title: "Committee vote",
    body: "The Investment Committee, the VP of Investments and the Alumni Advisory Council, votes on every pitch.",
  },
  {
    step: "05",
    title: "Monitor and report",
    body: "Approved positions are sized within the mandate, monitored by the pod, and reported in the semester investor letter.",
  },
];

export type Role = {
  title: string;
  term: string;
  body: string;
  duties: string[];
};

export const roles: Role[] = [
  {
    title: "Investment Committee",
    term: "Standing body",
    body: "The fund’s decision-making body. Votes on every pitch presented by the pods.",
    duties: ["VP of Investments", "Alumni Advisory Council", "Approves all positions"],
  },
  {
    title: "VP of Investments",
    term: "Annual, elected by the AEZ active body",
    body: "Owns the fund’s risk management and appoints the Pod Leaders each year.",
    duties: [
      "Enforces the risk mandate",
      "Selects Pod Leaders",
      "Writes the semester investor letter",
    ],
  },
  {
    title: "Alumni Advisory Council",
    term: "Alumni with investing industry experience",
    body: "Brings professional judgment to the committee and gives feedback on every pitch.",
    duties: ["Reviews and votes on pitches", "Mentors pods", "Receives investor letters"],
  },
  {
    title: "Pod Leaders",
    term: "Semesterly, appointed by the VP of Investments",
    body: "Run one of the four strategy pods and hold its work to the fund’s standard.",
    duties: [
      "Train and endorse pod members",
      "Ensure written pitches for every idea",
      "Present to the committee",
    ],
  },
  {
    title: "Pod Members",
    term: "Active brothers of AEZ",
    body: "Do the research. Any active brother can join a pod after training and endorsement.",
    duties: ["Source and research ideas", "Build models and theses", "Monitor positions"],
  },
];

// Firms where Alpha Epsilon Zeta alumni work, from the AEZ alumni roster.
export const alumniFirms = [
  "TPG",
  "Point72",
  "Moelis & Company",
  "Jefferies",
  "Houlihan Lokey",
  "Guggenheim Securities",
  "Squarepoint",
  "Surveyor Capital",
  "Needham & Company",
  "Wells Fargo",
  "Google",
  "Apple",
  "Stripe",
  "Coinbase",
  "Meta",
  "xAI",
];
