// Central place for identity, nav, and social-link data used across the site.
// Replace every [PLACEHOLDER] value with your own information.

export const siteConfig = {
  name: "[YOUR NAME]",
  initials: "YN",
  title: "[YOUR NAME] — Software Engineer",
  tagline: "I build fast, accessible products for the web.",
  description:
    "[YOUR NAME] is a software engineer who designs and builds fast, accessible, well-crafted products for the web. This is a portfolio of selected projects and writing.",
  // Full deployed URL including the GitHub Pages project-site subpath.
  url: "https://daniellandry-create.github.io/personal-website/",
  locale: "en-US",
  email: "hello@[YOURDOMAIN].com",
  location: "[YOUR CITY, COUNTRY]",
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
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
] as const;

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/[YOUR-GITHUB-USERNAME]", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/[YOUR-LINKEDIN]", icon: "linkedin" },
  { label: "X (Twitter)", href: "https://x.com/[YOUR-HANDLE]", icon: "x" },
  { label: "Email", href: "mailto:hello@[YOURDOMAIN].com", icon: "mail" },
] as const;
