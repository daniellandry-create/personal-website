// Central place for identity, nav, and social-link data used across the site.

export const siteConfig = {
  name: "Daniel Landry",
  initials: "DL",
  title: "Daniel Landry — EE & CS Student, Yale University",
  tagline: "I design and build hardware and software, from circuits to code.",
  description:
    "Daniel Landry is an Electrical Engineering & Computer Science student at Yale University who builds embedded systems, mechanical devices, and software -- from a dice-mosaic mural machine to a campus postcard-vending machine.",
  // Full deployed URL including the GitHub Pages project-site subpath.
  url: "https://daniellandry-create.github.io/personal-website/",
  locale: "en-US",
  email: "daniel.landry@yale.edu",
  location: "New Haven, CT",
  // Relative to the site base (no leading slash) -- combine with
  // import.meta.env.BASE_URL wherever this is used, e.g.
  // `${import.meta.env.BASE_URL}${siteConfig.resumePath}`.
  resumePath: "resume.pdf",
  // Set to a Formspree endpoint (https://formspree.io) to enable the
  // contact form without a backend. Leave blank to hide the form and
  // show the direct contact methods only.
  formspreeEndpoint: "",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/projects/", label: "Projects" },
  { href: "/resume/", label: "Resume" },
  { href: "/contact/", label: "Contact" },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/danielklandry", icon: "linkedin" },
  { label: "Email", href: "mailto:daniel.landry@yale.edu", icon: "mail" },
] as const;
