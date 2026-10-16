import { useState } from 'react'
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from 'lucide-react'
import { candidate } from '../data/candidate'

export default function Hero() {
  const [photoAvailable, setPhotoAvailable] = useState(true)
  return <section className="hero section-wrap" id="inicio">
    <div className="hero-copy">
      <div className="hero-kicker"><span className="status-dot" /> INFORMACIÓN DE CANDIDATURA <span className="kicker-line" /></div>
      <h1>Experiencia para<br /><em>construir futuro.</em></h1>
      <p className="hero-name">{candidate.fullName}</p>
      <p className="hero-role">{candidate.role}</p>
      <p className="hero-intro">{candidate.intro}</p>
      <div className="hero-actions">
        <a className="button button-primary" href="#propuestas">Explorar el plan <ArrowUpRight size={17} /></a>
        <a className="button button-quiet" href="#trayectoria">Conocer trayectoria <ArrowDown size={16} /></a>
      </div>
      <div className="hero-location"><MapPin size={16} /><span>{candidate.origin}</span></div>
    </div>
    <div className="hero-art" aria-label="Espacio reservado para fotografía oficial del candidato">
      <div className="art-grid" />
      <div className="art-ring ring-one" /><div className="art-ring ring-two" />
      <div className="portrait-frame">
        {candidate.photo && photoAvailable ? <img className="hero-photo" src={candidate.photo} alt={`Fotografía oficial de ${candidate.fullName}`} onError={() => setPhotoAvailable(false)} /> :
          <div className="portrait-placeholder">
            <div className="placeholder-symbol"><Sparkles size={27} /></div>
            <strong>Fotografía oficial</strong>
            <span>Agregar imagen real del candidato</span>
            <small>public/images/candidato/juan-altamirano.jpg</small>
          </div>}
      </div>
      <div className="hero-side-label">GUAMOTE <span>·</span> CHIMBORAZO</div>
      <div className="hero-stamp"><span>JA</span><small>GESTIÓN<br />CON PROPÓSITO</small></div>
      <div className="color-ruler"><i /><i /><i /><i /><i /></div>
      <div className="art-caption"><span>01 / PRESENTACIÓN</span><span>PERFIL PÚBLICO</span></div>
    </div>
    <div className="hero-bottomline"><span>UN PERFIL · UNA TRAYECTORIA · UN PLAN</span><span className="scroll-cue">DESLIZA PARA EXPLORAR <ArrowDown size={14} /></span></div>
  </section>
}
