import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { gerarLinkWhatsGeral } from '../utils/whatsapp'

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false)
  const fecharMenu = () => setMenuAberto(false)
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <Link to="/" className="header-logo" onClick={fecharMenu}>
            <img src="/nahui-ollin.svg" alt="Símbolo Nahui Ollin" />
            <div className="header-logo-text">
              <span className="header-logo-terra">Terra de</span>
              <span className="header-logo-maria">Maria</span>
            </div>
          </Link>
          <nav className="header-nav">
            <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Início</NavLink>
            <NavLink to="/catalogo" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Catálogo</NavLink>
            <NavLink to="/sobre" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Sobre</NavLink>
          </nav>
          <a href={gerarLinkWhatsGeral()} target="_blank" rel="noopener noreferrer" className="header-whats">💬 WhatsApp</a>
          <button className="hamburger" onClick={() => setMenuAberto(v => !v)}>
            <span style={menuAberto ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
            <span style={menuAberto ? { opacity: 0 } : {}} />
            <span style={menuAberto ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
          </button>
        </div>
      </header>
      <nav className={`mobile-nav ${menuAberto ? 'open' : ''}`}>
        <Link to="/" className="mobile-nav-link" onClick={fecharMenu}>Início</Link>
        <Link to="/catalogo" className="mobile-nav-link" onClick={fecharMenu}>Catálogo</Link>
        <Link to="/sobre" className="mobile-nav-link" onClick={fecharMenu}>Sobre</Link>
        <a href={gerarLinkWhatsGeral()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ marginTop: '1rem' }} onClick={fecharMenu}>💬 Falar pelo WhatsApp</a>
      </nav>
    </>
  )
}
