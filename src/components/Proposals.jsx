import { useState } from 'react'
import { ArrowUpRight, ChevronDown, Check } from 'lucide-react'
import { mayorProposals, councilProposals } from '../data/proposals'
import SectionHeading from './SectionHeading'

function ProposalItem({ proposal, index, expanded, onToggle }) {
  const Icon = proposal.icon
  return <article className={`proposal-item ${expanded ? 'expanded' : ''}`}>
    <button className="proposal-main" onClick={onToggle} aria-expanded={expanded}>
      <span className="proposal-index">{proposal.id}</span>
      <span className="proposal-icon"><Icon size={22} strokeWidth={1.7} /></span>
      <span className="proposal-title-wrap"><small>{proposal.area}</small><strong>{proposal.title}</strong>{proposal.subtitle && <em>{proposal.subtitle}</em>}</span>
      <span className="proposal-toggle"><ChevronDown size={18} /></span>
    </button>
    <div className="proposal-body">
      <p>{proposal.objective}</p>
      {proposal.actions?.length > 0 && <ul>{proposal.actions.map(action => <li key={action}><Check size={14} />{action}</li>)}</ul>}
    </div>
  </article>
}

export default function Proposals() {
  const [plan, setPlan] = useState('alcaldia')
  const [expanded, setExpanded] = useState('P1')
  const items = plan === 'alcaldia' ? mayorProposals : councilProposals
  return <section className="section section-dark" id="propuestas">
    <div className="section-wrap">
      <SectionHeading eyebrow="03 / PLANES DE TRABAJO" title={<>Ideas organizadas.<br /><em>Áreas conectadas.</em></>} text="Consulta las líneas de trabajo descritas en el material entregado. Selecciona una propuesta para explorar su objetivo y acciones." dark />
      <div className="plan-switcher" role="tablist" aria-label="Seleccionar plan de trabajo">
        <button role="tab" aria-selected={plan === 'alcaldia'} className={plan === 'alcaldia' ? 'active' : ''} onClick={() => { setPlan('alcaldia'); setExpanded('P1') }}>Plan de Alcaldía <span>08 programas</span></button>
        <button role="tab" aria-selected={plan === 'concejalia'} className={plan === 'concejalia' ? 'active' : ''} onClick={() => { setPlan('concejalia'); setExpanded('P1') }}>Plan de Concejales <span>07 programas</span></button>
      </div>
      <div className="proposal-layout">
        <div className="proposal-aside">
          <span className="aside-number">{plan === 'alcaldia' ? '08' : '07'}</span>
          <p>PROGRAMAS<br />DE TRABAJO</p>
          <div className="aside-line" />
          <span className="aside-note">Selecciona cada línea para ver más información.</span>
          <div className="aside-legend"><i className="legend-red" /><i className="legend-orange" /><i className="legend-green" /><i className="legend-blue" /></div>
        </div>
        <div className="proposal-list">
          {items.map((proposal, index) => <ProposalItem key={`${plan}-${proposal.id}`} proposal={proposal} index={index} expanded={expanded === proposal.id} onToggle={() => setExpanded(expanded === proposal.id ? '' : proposal.id)} />)}
        </div>
      </div>
      <p className="source-note">Las propuestas son informativas y se transcriben del documento proporcionado. Su implementación dependerá de las competencias, procesos y recursos correspondientes.</p>
    </div>
  </section>
}
