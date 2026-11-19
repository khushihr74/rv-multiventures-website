import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function BusinessCard({number, title, category, description, href, image, imagePosition="center"}: {
  number:string; title:string; category:string; description:string; href:string; image:string; imagePosition?:string
}) {
  return <article className="business-card">
    <div className="business-image" style={{backgroundImage:`linear-gradient(180deg,rgba(5,12,23,.05),rgba(5,12,23,.75)),url("${image}")`, backgroundPosition:imagePosition}}>
      <span className="business-number">{number}</span><span className="business-category">{category}</span>
    </div>
    <div className="business-content"><h3>{title}</h3><p>{description}</p><Link href={href} className="text-link">Explore division <ArrowUpRight size={16}/></Link></div>
  </article>;
}
