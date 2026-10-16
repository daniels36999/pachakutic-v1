import { useEffect, useState } from 'react'
import { X, GraduationCap, BriefcaseBusiness, MapPin, UserRound, ArrowUpRight } from 'lucide-react'
import { candidates } from '../data/candidates'
import SectionHeading from './SectionHeading'

function CandidateModal({ person, onClose }) {
  useEffect(() => {
    if (!person) return
    const handleKey = (event) => { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', handleKey); document.body.style.overflow = '' }
  }, [person, onClose])
  if (!person) return null
  return <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose() }}>
    <section className="candidate-modal" role="dialog" aria-modal="true" aria-labelledby="modal-name">
      <button className="modal-close" onClick={onClose} aria-label="Cerrar perfil"><X size={20} /></button>
      <div className="modal-topline"><span>{person.area === 'urbano' ? 'REPRESENTACIÓN URBANA' : 'REPRESENTACIÓN RURAL'}</span><span>{person.type}</span></div>
      <div className="modal-profile">
        <div className="candidate-avatar large"><UserRound size={42} /></div>
        <div><h2 id="modal-name">{person.name}</h2><p>{person.role}</p>{person.origin && <span className="modal-origin"><MapPin size={14} />{person.origin}</span>}</div>
      </div>
      <div className="modal-info-block"><h3><GraduationCap size={17} /> Formación</h3><p>{person.education}</p></div>
      <div className="modal-info-block"><h3><BriefcaseBusiness size={17} /> Experiencia</h3>
        {person.experience.length ? <ul>{person.experience.map(item => <li key={item}>{item}</li>)}</ul> : <p>Información de experiencia no especificada en el documento proporcionado.</p>}
      </div>
      <p className="modal-note">Perfil elaborado únicamente con la información disponible en el documento proporcionado.</p>
    </section>
  </div>
}

function PersonCard({ person, onOpen }) {
  return <article className="person-card">
    <div className="person-photo">
      {person.photo ? <img className="person-real-photo" src={person.photo} alt={`Fotografía de ${person.name}`} loading="lazy" /> : <div className="candidate-avatar"><UserRound size={29} /></div>}
      <span className="person-type">{person.type}</span>
      <span className="person-area">{person.area === 'urbano' ? 'URBANO' : 'RURAL'}</span>
    </div>
    <div className="person-info"><span className="person-role">{person.role}</span><h3>{person.name}</h3>
      <p>{person.education.split('.')[0]}.</p>
      <button className="person-link" onClick={() => onOpen(person)}>Ver perfil completo <ArrowUpRight size={15} /></button>
    </div>
  </article>
}

export default function Candidates() {
  const [area, setArea] = useState('todos')
  const [selected, setSelected] = useState(null)
  const shown = candidates.filter(p => area === 'todos' || p.area === area)
  return <section className="section section-white" id="equipo">
    <div className="section-wrap">
      <SectionHeading eyebrow="05 / EQUIPO" title={<>Personas y perfiles<br /><em>al servicio de Guamote.</em></>} text="Conoce la información de los perfiles urbanos y rurales incluidos en el documento." />
      <div className="team-topline"><div className="team-count"><strong>{candidates.length.toString().padStart(2, '0')}</strong><span>perfiles incluidos<br />en el documento</span></div>
        <div className="team-filter" aria-label="Filtrar equipo">
          {[['todos','Todo el equipo'],['urbano','Urbanos'],['rural','Rurales']].map(([value,label]) => <button key={value} className={area === value ? 'active' : ''} onClick={() => setArea(value)}>{label}</button>)}
        </div>
      </div>
      <div className="people-grid">{shown.map(person => <PersonCard key={person.id} person={person} onOpen={setSelected} />)}</div>
      <div className="team-note"><span className="note-dot" /> Las fotografías no se han incorporado porque no se proporcionaron archivos de imagen individuales. Los datos faltantes se identifican en cada perfil.</div>
      <CandidateModal person={selected} onClose={() => setSelected(null)} />
    </div>
  </section>
}
