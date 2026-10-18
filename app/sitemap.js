import { siteUrl } from "./layout";

export default function sitemap() {
  const routes = ["", "/services", "/about", "/doctors", "/testimonials", "/faq", "/contact"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
