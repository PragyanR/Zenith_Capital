// Everything the page says lives here and in fund.ts.

export const site = {
  name: "Zenith Capital",
  description:
    "Zenith Capital is the student-run investment fund of Alpha Epsilon Zeta at UC Berkeley.",
  // Public address, no trailing slash. Update when the site moves to a custom domain.
  url: "https://pragyanr.github.io/Zenith_Capital",
  email: "aezberkeley@gmail.com",
  parent: {
    name: "Alpha Epsilon Zeta",
    url: "https://www.aezberkeley.org",
  },
  links: {
    linkedin: "https://www.linkedin.com/company/alpha-epsilon-zeta/",
    instagram: "https://www.instagram.com/aezberkeley/",
  },
} as const;

export const disclosure =
  "Zenith Capital invests Alpha Epsilon Zeta's own funds and does not take outside money. Nothing on this site is investment advice. AEZ is a registered student organization at UC Berkeley and acts independently of the University.";
