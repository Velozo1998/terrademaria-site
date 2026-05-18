import { Link } from 'react-router-dom'
import { gerarLinkWhatsGeral } from '../utils/whatsapp'

export default function Footer() {
  const ano = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div><span className="footer-logo-terra">Terra de</span><br/><span className="footer-logo-maria">Maria</span></div>
        <div className="footer-divider" />
        <p className="footer-tagline">Artigos Católicos · Marilândia do Sul, PR</p>
        <nav className="footer-links">
          <Link to="/" className="footer-link">Início</Link>
          <Link to="/catalogo" className="footer-link">Catálogo</Link>
          <Link to="/sobre" className="footer-link">Sobre</Link>
          <a href={gerarLinkWhatsGeral()} target="_blank" rel="noopener noreferrer" className="footer-link">WhatsApp</a>
        </nav>
        <p className="footer-copy">© {ano} Terra de Maria · Todos os direitos reservados</p>
      </div>
    </footer>
  )
}
