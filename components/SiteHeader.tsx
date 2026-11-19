"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight, Phone, MessageCircle } from "lucide-react";

const links = [
  ["About", "/about"], ["Businesses", "/businesses"], ["Careers", "/careers"],
  ["Gallery", "/gallery"], ["Contact", "/contact"]
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="header">
    <div className="nav-wrap">
      <Link href="/" className="brand" onClick={() => setOpen(false)}>
        <img className="brand-logo" src="/rv-multiventures-logo.svg" alt="RV Multiventures logo" />
      </Link>
      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <a className="nav-cta" href="tel:+918303892748"><Phone size={15}/> Call</a>
        <a className="nav-cta" href="https://wa.me/918303892748" target="_blank" rel="noreferrer"><MessageCircle size={15}/> WhatsApp</a>
        <Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Let’s Talk <ArrowUpRight size={15}/></Link>
      </nav>
      <button className="menu-btn" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div>
  </header>;
}
