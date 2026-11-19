import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: { default: "RV MULTIVENTURES | One Group. Multiple Businesses. One Vision.", template: "%s | RV MULTIVENTURES" },
  description: "Discover RV MULTIVENTURES's business divisions across recruitment, film production, wellness, hospitality, real estate and social welfare.",
  metadataBase: new URL("https://rvmultiventures.in"),
  openGraph: {
    title: "RV MULTIVENTURES – One Group. Multiple Businesses. One Vision.",
    description: "Building Businesses. Creating Opportunities. Transforming Lives.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
