import { GraduationCap, BriefcaseBusiness, MapPin, ArrowUpRight } from 'lucide-react'
import { candidate } from '../data/candidate'
import SectionHeading from './SectionHeading'

export default function Timeline() {
  return <section className="section section-white" id="trayectoria">
    <div className="section-wrap">
      <SectionHeading eyebrow="02 / FORMACIÓN Y EXPERIENCIA" title={<>Una trayectoria construida<br /><em>en el territorio.</em></>} text="Formación académica y experiencia profesional organizadas cronológicamente." />
      <div className="timeline">
        {candidate.education.slice().reverse().map((item, index) => <article className="timeline-item education-item" key={item.title}>
          <div className="timeline-node"><GraduationCap size={17} /></div>
          <div className="timeline-date">{item.year || 'FORMACIÓN'}</div>
          <div className="timeline-content"><span className="timeline-type">FORMACIÓN ACADÉMICA</span><h3>{item.title}</h3><p>{item.institution}</p><small>{item.detail}</small></div>
        </article>)}
        {candidate.experience.map((item, index) => <article className="timeline-item" key={item.period + item.title}>
          <div className="timeline-node"><BriefcaseBusiness size={17} /></div>
          <div className="timeline-date">{item.period}</div>
          <div className="timeline-content"><span className="timeline-type">EXPERIENCIA PROFESIONAL</span><h3>{item.title}</h3><p>{item.institution}</p><small>{item.detail}</small></div>
        </article>)}
      </div>
      <div className="timeline-footnote"><MapPin size={16} /><span>La información se presenta según los datos disponibles en el documento proporcionado.</span></div>
      <a className="text-link" href="#propuestas">Conectar experiencia con el plan <ArrowUpRight size={16} /></a>
    </div>
  </section>
}
