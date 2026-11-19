import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rvmultiventures.in";
  const paths = ["","/about","/businesses","/businesses/downtoearth","/businesses/rv-film-production","/businesses/rv-spa","/businesses/rv-villa","/businesses/hotel-management","/businesses/real-estate","/businesses/rv-foundation","/careers","/gallery","/contact","/privacy","/terms"];
  return paths.map(path => ({url: `${base}${path}`, lastModified: new Date(), changeFrequency: "monthly", priority: path === "" ? 1 : 0.7}));
}
