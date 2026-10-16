import { ArrowUpRight } from 'lucide-react'
import { candidate } from '../data/candidate'

const links = [['Inicio','#inicio'],['Perfil','#perfil'],['Trayectoria','#trayectoria'],['Propuestas','#propuestas'],['Equipo','#equipo'],['Contacto','#contacto']]

export default function Footer() {
  return <footer className="site-footer">
    <div className="footer-colorline"><i /><i /><i /><i /><i /></div>
    <div className="section-wrap">
      <div className="footer-main"><a className="brand footer-brand" href="#inicio"><span className="brand-mark"><span /><span /><span /></span><span className="brand-copy"><strong>JUAN ALTAMIRANO</strong><small>GUAMOTE · CHIMBORAZO</small></span></a>
        <p>Información sobre trayectoria, propuestas y equipo para el cantón Guamote.</p>
        <a className="footer-top" href="#inicio">Volver arriba <ArrowUpRight size={16} /></a></div>
      <div className="footer-bottom"><nav aria-label="Enlaces del pie de página">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav><span>© {new Date().getFullYear()} · {candidate.shortName}</span></div>
      <p className="legal-note">Sitio informativo. Verifica los datos y requisitos legales aplicables antes de publicar.</p>
    </div>
  </footer>
}
