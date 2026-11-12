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
      "Long and short positions in individual stocks, picked on fundamentals and kept close to market-neutral.",
    detail:
      "The largest pod. Members research individual companies, value them on earnings and cash flow, and pair long and short positions so the pod has little exposure to the overall market.",
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
      "ETF positions in sectors where the pod expects growth, based on macroeconomic research.",
    detail:
      "When the view is about an industry rather than one company, the pod buys a sector ETF. Holdings are reviewed and rotated as economic conditions change.",
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
      "U.S. Treasuries, CDs, and investment-grade bonds that provide steady yield and keep the fund liquid.",
    detail:
      "The pod holds high-quality, easy-to-sell bonds and manages the cash reserve the fund keeps for margin and withdrawals.",
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
      "Options used to hedge the stock positions and to earn income from covered calls.",
    detail:
      "The pod buys protective puts against risks the Long/Short pod cannot diversify away, and sells covered calls on stocks the fund already owns.",
    instruments: ["Protective puts", "Covered calls", "Portfolio hedges"],
    color: "var(--gold)",
  },
];

export const mandate = [
  {
    figure: "5%",
    title: "Position Limit",
    body: "No single investment may exceed 5% of total portfolio value at entry.",
  },
  {
    figure: "30%",
    title: "Sector Cap",
    body: "Exposure to any one sector is capped at 30% of the portfolio.",
  },
  {
    figure: "|β| < 0.2",
    title: "Market Neutrality",
    body: "The Long/Short pod keeps its absolute beta below 0.2 to limit the effect of market cycles.",
  },
  {
    figure: "10%",
    title: "Liquidity Floor",
    body: "At least 10% of assets stay in cash or short-duration Treasuries to cover margin and withdrawals.",
  },
  {
    figure: "±10%",
    title: "Allocation Drift",
    body: "Each pod’s share can move up to 10 points from its target, based on how the pod performs.",
  },
];

export const principles = [
  {
    title: "Fundamental Research",
    body: "Stock picks start with the company: its earnings, cash flow, and what it is worth. Share price comes last.",
  },
  {
    title: "Defined Risk Limits",
    body: "Position sizes, sector exposure, and cash levels have hard limits. Pods work inside them, and the VP of Investments enforces them.",
  },
  {
    title: "Written Pitches",
    body: "Every idea goes to the committee as a written pitch that states the thesis, the valuation, and what would make it wrong.",
  },
];

export const process = [
  {
    step: "01",
    title: "Training and Endorsement",
    body: "Brothers complete pod training and are endorsed by their Pod Leader before they work on live ideas.",
  },
  {
    step: "02",
    title: "Research",
    body: "The pod sources an idea within its strategy, builds the model, and identifies what would prove the thesis wrong.",
  },
  {
    step: "03",
    title: "Written Pitch",
    body: "Every recommendation is submitted as a written pitch of at least half a page, reviewed by the Pod Leader.",
  },
  {
    step: "04",
    title: "Committee Vote",
    body: "The Investment Committee, the VP of Investments and the Alumni Advisory Council, votes on every pitch.",
  },
  {
    step: "05",
    title: "Monitor and Report",
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
