import Link from "next/link";
export default function SiteFooter() {
  return <footer className="footer">
    <div className="footer-top">
      <div><Link href="/" className="brand footer-brand"><img className="brand-logo" src="/rv-multiventures-logo.svg" alt="RV Multiventures logo" /></Link><p className="footer-note">Building Businesses. Creating Opportunities. Transforming Lives.</p></div>
      <div><h4>Explore</h4><Link href="/about">About us</Link><Link href="/businesses">Our businesses</Link><Link href="/careers">Careers</Link><Link href="/gallery">Gallery</Link></div>
      <div><h4>Get in touch</h4><Link href="/contact">Contact RV Multiventures</Link><a className="muted" href="tel:+918303892748">Phone: 8303892748</a><a className="muted" href="https://wa.me/918303892748" target="_blank" rel="noreferrer">WhatsApp: 8303892748</a><a className="muted" href="mailto:khushihr76@gmail.com">Email: khushihr76@gmail.com</a><span className="muted">Location: Lucknow, Uttar Pradesh</span></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} RV MULTIVENTURES. All rights reserved.</span><span><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></span></div>
  </footer>;
}
