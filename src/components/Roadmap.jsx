import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { roadmap } from '../data/proposals'
import SectionHeading from './SectionHeading'

export default function Roadmap() {
  return <section className="section section-light roadmap-section">
    <div className="section-wrap">
      <SectionHeading eyebrow="04 / VISIÓN DE CONJUNTO" title={<>Ocho líneas de trabajo.<br /><em>Un cantón conectado.</em></>} text="Vista rápida de los ocho programas que integran el plan de trabajo de alcaldía." />
      <div className="roadmap">
        {roadmap.map(({ n, title, detail, icon: Icon }, index) => <div className={`roadmap-node node-${index + 1}`} key={n}>
          <div className="roadmap-top"><span>{n}</span><Icon size={21} /></div>
          <h3>{title}</h3><p>{detail}</p>
          <div className="roadmap-connector">{index < roadmap.length - 1 ? <ArrowDownRight size={16} /> : <ArrowUpRight size={16} />}</div>
        </div>)}
      </div>
      <div className="areas-diagram">
        <div className="diagram-head"><span className="diagram-kicker">MAPA DE ÁREAS</span><h3>El plan, visto como un sistema</h3><p>Las propuestas se agrupan en áreas relacionadas entre sí.</p></div>
        <div className="diagram-center"><span>PLAN DE<br />TRABAJO</span><small>GUAMOTE</small></div>
        <div className="diagram-branches">
          <div className="branch branch-services"><span className="branch-dot" /><small>SERVICIOS</small><strong>Agua y saneamiento</strong><p>Cobertura y calidad de servicios básicos</p></div>
          <div className="branch branch-territory"><span className="branch-dot" /><small>TERRITORIO</small><strong>Vialidad y catastro</strong><p>Conectividad y planificación cantonal</p></div>
          <div className="branch branch-growth"><span className="branch-dot" /><small>DESARROLLO</small><strong>Economía y ambiente</strong><p>Producción local y sostenibilidad</p></div>
          <div className="branch branch-governance"><span className="branch-dot" /><small>GOBERNANZA</small><strong>Digital y participación</strong><p>Gestión pública y organización comunitaria</p></div>
        </div>
      </div>
    </div>
  </section>
}
