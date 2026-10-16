import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [
  ['Inicio', '#inicio'], ['Perfil', '#perfil'], ['Trayectoria', '#trayectoria'],
  ['Propuestas', '#propuestas'], ['Equipo', '#equipo'], ['Contacto', '#contacto'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Juan Altamirano, ir al inicio" onClick={() => setOpen(false)}>
        <span className="brand-mark"><span /><span /><span /></span>
        <span className="brand-copy"><strong>JUAN ALTAMIRANO</strong><small>GUAMOTE · CHIMBORAZO</small></span>
      </a>
      <button className="menu-toggle" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Navegación principal">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#propuestas" onClick={() => setOpen(false)}>Plan de trabajo <ArrowUpRight size={15} /></a>
      </nav>
    </header>
  )
}
