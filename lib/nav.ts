import { site } from "./content";

export const navLinks = [
  { href: "/strategy", label: "Strategy" },
  ...(site.showPortfolio ? [{ href: "/portfolio", label: "Portfolio" }] : []),
  { href: "/team", label: "Team" },
];
