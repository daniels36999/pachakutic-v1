import { MapPin, GraduationCap, BriefcaseBusiness, Compass, ArrowUpRight } from 'lucide-react'
import { candidate } from '../data/candidate'
import SectionHeading from './SectionHeading'

const facts = [
  { icon: GraduationCap, label: 'Formación', value: 'Ingeniería Civil', detail: 'Universidad Nacional de Chimborazo' },
  { icon: BriefcaseBusiness, label: 'Experiencia', value: 'Obra pública y riego', detail: 'Fiscalización, planificación e infraestructura' },
  { icon: Compass, label: 'Origen', value: 'Tipin Tablas Pamba', detail: 'Cantón Guamote, Chimborazo' },
]

export default function Profile() {
  return <section className="section section-light" id="perfil">
    <div className="section-wrap">
      <SectionHeading eyebrow="01 / PERFIL" title={<>Raíces locales.<br /><em>Experiencia técnica.</em></>} text="Una presentación visual de la formación, el origen y la experiencia que constan en su trayectoria." />
      <div className="profile-layout">
        <div className="profile-quote">
          <span className="quote-mark">“</span>
          <p>Mi nombre es Juan Patricio Altamirano Marcatoma. Nací en la comunidad Tipin Tablas Pamba del cantón Guamote, provincia de Chimborazo.</p>
          <div className="quote-rule" />
          <span className="quote-caption">PRESENTACIÓN PERSONAL · INFORMACIÓN BIOGRÁFICA</span>
        </div>
        <div className="profile-facts">
          {facts.map(({ icon: Icon, label, value, detail }, i) => <div className="fact-row" key={label}>
            <div className={`fact-icon accent-${i + 1}`}><Icon size={21} /></div>
            <div><span className="fact-label">{label}</span><h3>{value}</h3><p>{detail}</p></div>
            <span className="fact-index">0{i + 1}</span>
          </div>)}
          <a className="text-link" href="#trayectoria">Ver trayectoria completa <ArrowUpRight size={16} /></a>
        </div>
      </div>
    </div>
  </section>
}
