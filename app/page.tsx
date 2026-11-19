import Link from "next/link";
import { ArrowRight, ArrowUpRight, MoveUpRight, Sparkles, ShieldCheck, Compass, HeartHandshake } from "lucide-react";
import BusinessCard from "@/components/BusinessCard";

const divisions = [
  {number:"01",title:"DownToEarth",category:"RECRUITMENT",description:"Connecting people with meaningful employment opportunities through a thoughtful, professional recruitment experience.",href:"/businesses/downtoearth",image:"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85"},
  {number:"02",title:"RV Film Production",category:"FILM & CREATIVE",description:"Creative production for films, advertising, brand stories, promotional content and visual campaigns.",href:"/businesses/rv-film-production",image:"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1100&q=85"},
  {number:"03",title:"RV Spa & Salon",category:"WELLNESS & BEAUTY",description:"Spa, massage therapy, salon and beauty wellness experiences in Lucknow.",href:"/businesses/rv-spa",image:"https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1100&q=85"},
  {number:"04",title:"RV Villa",category:"STAYS & CELEBRATIONS",description:"A private setting for stays, family time and special celebrations. Enquire about availability.",href:"/businesses/rv-villa",image:"https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1100&q=85"},
  {number:"05",title:"Hotel Management",category:"HOSPITALITY",description:"Hospitality operations, guest experience and hotel management services.",href:"/businesses/hotel-management",image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1100&q=85"},
  {number:"06",title:"Real Estate",category:"PROPERTY SERVICES",description:"Property services and project enquiries, supported by clear and verified information.",href:"/businesses/real-estate",image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=85"},
  {number:"07",title:"RV Foundation",category:"SOCIAL WELFARE",description:"A social-impact vision focused on child welfare, elderly care and community support initiatives.",href:"/businesses/rv-foundation",image:"https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1100&q=85"}
];
export default function Home() {
  return <>
    <main>
      <section className="hero">
        <div className="hero-image"/>
        <div className="hero-content container">
          <div className="eyebrow"><span/> A DIVERSIFIED BUSINESS GROUP</div>
          <h1>Building Businesses.<br/><em>Creating Opportunities.</em><br/>Transforming Lives.</h1>
          <p className="hero-sub">One Group. Multiple Businesses. One Vision.</p>
          <p className="hero-desc">A growing portfolio across recruitment, entertainment, wellness, hospitality, real estate and social welfare — connected by a shared vision for meaningful progress.</p>
          <div className="hero-actions"><Link href="/businesses" className="btn btn-gold">Explore our businesses <ArrowUpRight size={17}/></Link><Link href="/about" className="btn btn-outline">Discover RV Multiventures <ArrowRight size={17}/></Link></div>
          <div className="hero-foot"><span>01 / 07 &nbsp; BUSINESS DIVISIONS</span><span>LUCKNOW · INDIA</span></div>
        </div>
      </section>

      <section className="intro section container">
        <div className="section-kicker">01 — WHO WE ARE</div>
        <div className="intro-grid"><h2>A group built around<br/><em>possibility.</em></h2><div><p className="lead">RV MULTIVENTURES brings diverse business interests together under one forward-looking identity.</p><p className="body-copy">From connecting talent to creating memorable experiences, our divisions work across different sectors with a focus on professional service, responsible growth and long-term relationships.</p><Link href="/about" className="text-link">Know our story <ArrowUpRight size={16}/></Link></div></div>
      </section>

      <section className="business-section section">
        <div className="container">
          <div className="section-heading"><div><div className="section-kicker">02 — OUR PORTFOLIO</div><h2>Different sectors.<br/><em>Shared ambition.</em></h2></div><p>Explore the businesses and initiatives that make up the RV MULTIVENTURES portfolio.</p></div>
          <div className="business-grid">{divisions.map(d=><BusinessCard key={d.number} {...d}/>)}</div>
        </div>
      </section>

      <section className="principles section container">
        <div className="section-kicker">03 — OUR APPROACH</div><div className="section-heading"><div><h2>Progress with<br/><em>purpose.</em></h2></div><p>Our approach is grounded in practical values that guide how we build, serve and grow.</p></div>
        <div className="principle-grid">
          <div className="principle"><Compass/><h3>Vision-led</h3><p>Building with a clear direction and an open outlook toward new opportunities.</p></div>
          <div className="principle"><ShieldCheck/><h3>Professional</h3><p>Valuing transparency, dependable service and responsible business practices.</p></div>
          <div className="principle"><Sparkles/><h3>Quality-minded</h3><p>Creating thoughtful experiences and maintaining high standards in every interaction.</p></div>
          <div className="principle"><HeartHandshake/><h3>People-focused</h3><p>Recognising the role of people, opportunity and community in lasting progress.</p></div>
        </div>
      </section>

      <section className="statement">
        <div className="container statement-inner"><div className="section-kicker">04 — THE RV MULTIVENTURES VISION</div><h2>Business is more than<br/>what we build. It is<br/><em>what we make possible.</em></h2><Link href="/contact" className="btn btn-gold">Start a conversation <ArrowUpRight size={17}/></Link></div>
      </section>

      <section className="careers-strip container">
        <div><div className="section-kicker">05 — GROW WITH US</div><h2>Good people build<br/><em>great possibilities.</em></h2><p>Explore opportunities across our business divisions or connect with us about a potential collaboration.</p></div>
        <div className="careers-actions"><Link href="/careers" className="btn btn-dark">Explore careers <ArrowUpRight size={17}/></Link><Link href="/contact" className="text-link">Business enquiries <ArrowUpRight size={16}/></Link></div>
      </section>
    </main>
  </>;
}
