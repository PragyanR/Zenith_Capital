// Organization facts. Anything that appears in more than one place lives here.

export const site = {
  name: "Zenith Capital",
  tagline: "The investment fund of Alpha Epsilon Zeta at UC Berkeley.",
  description:
    "Zenith Capital is the student-run investment fund of Alpha Epsilon Zeta at UC Berkeley. Brothers research and pitch across four strategy pods, and an investment committee of officers and alumni votes on every position.",
  // Public address, no trailing slash. Update when the site moves to a custom domain.
  url: "https://pragyanr.github.io/Zenith_Capital",
  email: "aezberkeley@gmail.com",
  location: "Berkeley, California",
  parent: {
    name: "Alpha Epsilon Zeta",
    short: "AEZ",
    founded: 2003,
    url: "https://www.aezberkeley.org",
  },
  links: {
    linkedin: "https://www.linkedin.com/company/alpha-epsilon-zeta/",
    instagram: "https://www.instagram.com/aezberkeley/",
    paradigm: "https://berkeleyparadigm.org",
    innovate: "https://www.berkeleyinnovate.com",
  },
} as const;

export const nav = [
  { href: "/#approach", label: "Approach" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#process", label: "Process" },
  { href: "/#structure", label: "Structure" },
  { href: "/#contact", label: "Contact" },
] as const;

export const disclosure =
  "Zenith Capital is a student organization affiliated with Alpha Epsilon Zeta. It manages capital belonging to the organization only and does not accept outside investment. Nothing on this site is investment advice or an offer to buy or sell any security. Alpha Epsilon Zeta is a registered student organization at UC Berkeley; although its members are University of California students, it acts independently of the University, which is not responsible for its content.";
