import { Link } from 'react-router-dom'
import { useProdutos } from '../hooks/useProdutos'
import ProdutoCard from '../components/ProdutoCard'
import { gerarLinkWhatsGeral } from '../utils/whatsapp'

function SkeletonCard() {
  return <div className="skeleton skeleton-card" />
}

export default function Home() {
  const { produtos: destaques, loading } = useProdutos({ apenasDestaques: true })
  return (
    <div className="page-enter">
      <section className="hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="hero-eyebrow">Artigos Católicos</p>
          <h1 className="hero-title">Terra de<em>Maria</em></h1>
          <img src="/nahui-ollin.svg" alt="Símbolo Nahui Ollin" className="hero-symbol" />
          <div className="hero-divider" />
          <p className="hero-subtitle">Marilândia do Sul · Paraná</p>
          <div className="hero-cta">
            <Link to="/catalogo" className="btn btn-terra">Ver Catálogo</Link>
            <a href={gerarLinkWhatsGeral()} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ color: 'rgba(255,255,255,0.75)', borderColor: 'rgba(255,255,255,0.25)' }}>💬 WhatsApp</a>
          </div>
        </div>
      </section>

      {(loading || destaques.length > 0) && (
        <section className="section">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">Coleção</p>
              <h2 className="section-title">Destaques</h2>
              <div className="section-divider"><span className="section-divider-symbol">✦</span></div>
            </div>
            <div className="produtos-grid">
              {loading ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />) : destaques.map(p => <ProdutoCard key={p.id} produto={p} />)}
            </div>
            {!loading && destaques.length > 0 && (
              <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
                <Link to="/catalogo" className="btn btn-outline">Ver catálogo completo</Link>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="section" style={{ background: 'var(--bege-card)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-3xl)', alignItems: 'center' }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: 'var(--space-sm)' }}>Nossa história</p>
              <h2 className="section-title" style={{ marginBottom: 'var(--space-lg)' }}>O nome que já era<em style={{ fontFamily: 'var(--script)', fontStyle: 'normal', display: 'block', color: 'var(--ouro)', fontSize: '1.5em', lineHeight: 0.9 }}>uma bênção</em></h2>
              <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.9, color: 'var(--marrom-suave)', marginBottom: 'var(--space-lg)' }}>Marilândia do Sul carrega em seu nome uma devoção: <em>Mari</em> — Maria — e <em>lândia</em> — terra. Literalmente, <strong>Terra de Maria</strong>. O nome da marca não foi criado. Ele já existia, esperando ser descoberto.</p>
              <Link to="/sobre" className="btn btn-outline">Conheça mais</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-lg)', textAlign: 'center' }}>
              <img src="/nahui-ollin.svg" alt="Símbolo Nahui Ollin" style={{ width: 120, height: 120, opacity: 0.2 }} />
              <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'var(--text-base)', color: 'var(--marrom-suave)', lineHeight: 1.7, maxWidth: 260 }}>O símbolo Nahui Ollin aparece no manto de Nossa Senhora de Guadalupe — sinal da presença de Maria no coração das Américas.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="whats-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 'var(--space-md)' }}>Atendimento pessoal</p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--branco)', fontWeight: 400, marginBottom: 'var(--space-md)' }}>Tem alguma dúvida?</h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'var(--text-base)', marginBottom: 'var(--space-2xl)' }}>Fale conosco pelo WhatsApp. Respondemos com atenção e carinho.</p>
          <a href={gerarLinkWhatsGeral()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"><span style={{ fontSize: '1.25rem' }}>💬</span> Falar pelo WhatsApp</a>
        </div>
      </section>
    </div>
  )
}
