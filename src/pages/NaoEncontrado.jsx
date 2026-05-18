import { Link } from 'react-router-dom'

export default function NaoEncontrado() {
  return (
    <div className="nao-encontrado page-enter">
      <div className="nao-encontrado-num">404</div>
      <img src="/nahui-ollin.svg" alt="" style={{ width: 64, height: 64, opacity: 0.12 }} />
      <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 400 }}>Página não encontrada</h1>
      <p style={{ color: 'var(--marrom-suave)', maxWidth: 360 }}>O endereço que você acessou não existe ou foi movido.</p>
      <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/" className="btn btn-terra">Voltar ao início</Link>
        <Link to="/catalogo" className="btn btn-outline">Ver catálogo</Link>
      </div>
    </div>
  )
}
