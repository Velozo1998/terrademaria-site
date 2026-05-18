import { Link } from 'react-router-dom'
import { gerarLinkWhatsGeral } from '../utils/whatsapp'

export default function Sobre() {
  return (
    <div className="page-enter">
      <section className="sobre-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="eyebrow" style={{ color: 'var(--terra-light)', marginBottom: 'var(--space-md)' }}>Quem somos</p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 300, color: 'var(--branco)', lineHeight: 1.1 }}>
            Terra de <span style={{ fontFamily: 'var(--script)', fontSize: '1.4em', color: 'var(--terra-light)', display: 'block', lineHeight: 0.8 }}>Maria</span>
          </h1>
        </div>
      </section>
      <section className="sobre-content">
        <div className="container">
          <div className="sobre-grid">
            <div className="sobre-text">
              <p className="eyebrow" style={{ marginBottom: 'var(--space-md)' }}>A origem do nome</p>
              <h2 className="section-title" style={{ marginBottom: 'var(--space-xl)' }}>Uma bênção que já estava no mapa</h2>
              <p>Nossa cidade, Marilândia do Sul, carrega em seu nome uma devoção silenciosa: <em>Mari</em> vem de Maria, e <em>lândia</em> significa terra. Literalmente — <strong>Terra de Maria</strong>.</p>
              <p>O nome da nossa marca não foi uma criação. Foi uma descoberta. Já estava ali, escrito na história da cidade, esperando ser revelado.</p>
            </div>
            <div className="sobre-symbol-wrap">
              <img src="/nahui-ollin.svg" alt="Símbolo Nahui Ollin" className="sobre-symbol-img" />
              <p className="sobre-symbol-caption">"Marilândia" —<br/><em>Mari</em> (Maria) + <em>lândia</em> (terra).<br/>Terra de Maria.</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', margin: 'var(--space-2xl) 0' }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, var(--ouro), transparent)' }} />
            <span style={{ color: 'var(--ouro)', fontSize: '0.75rem' }}>✦</span>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, var(--ouro), transparent)' }} />
          </div>
          <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow" style={{ marginBottom: 'var(--space-md)' }}>Nossa missão</p>
            <h2 className="section-title" style={{ marginBottom: 'var(--space-xl)' }}>Fé no dia a dia</h2>
            <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.9, color: 'var(--marrom-suave)', marginBottom: 'var(--space-xl)' }}>Oferecemos instrumentos de devoção — peças escolhidas com atenção para acompanhar a vida de fé de cada pessoa.</p>
            <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/catalogo" className="btn btn-terra">Ver catálogo</Link>
              <a href={gerarLinkWhatsGeral()} target="_blank" rel="noopener noreferrer" className="btn btn-outline">💬 WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
