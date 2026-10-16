import { MapPin, Phone, Mail, ExternalLink, ArrowUpRight } from 'lucide-react'
import { candidate } from '../data/candidate'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const rows = [
    { icon: MapPin, label: 'Ubicación', value: candidate.contact.location },
    { icon: Phone, label: 'Teléfono', value: candidate.contact.phone || 'Agregar teléfono oficial' },
    { icon: Mail, label: 'Correo electrónico', value: candidate.contact.email || 'Agregar correo oficial' },
  ]
  return <section className="section section-light contact-section" id="contacto">
    <div className="section-wrap">
      <SectionHeading eyebrow="06 / CONTACTO" title={<>Información clara.<br /><em>Canales oficiales.</em></>} text="Los datos de contacto se completarán cuando se disponga de los canales oficiales." />
      <div className="contact-layout">
        <div className="contact-intro"><div className="contact-symbol"><ExternalLink size={24} /></div><h3>Conecta con el equipo</h3><p>Este espacio está preparado para añadir los canales de contacto verificados.</p><a href="#inicio" className="button button-primary">Volver al inicio <ArrowUpRight size={16} /></a></div>
        <div className="contact-details">{rows.map(({ icon: Icon, label, value }) => <div className="contact-row" key={label}><span className="contact-icon"><Icon size={19} /></span><div><small>{label}</small><strong>{value}</strong></div><span className="contact-row-index">/</span></div>)}
          <div className="contact-row"><span className="contact-icon"><ExternalLink size={19} /></span><div><small>Redes sociales</small><strong>Agregar enlace oficial</strong></div><span className="contact-row-index">/</span></div>
        </div>
      </div>
    </div>
  </section>
}
