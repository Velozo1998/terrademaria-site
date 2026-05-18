import { useParams, Link } from 'react-router-dom'
import { useProduto } from '../hooks/useProduto'
import Galeria from '../components/Galeria'
import BotaoWhatsapp from '../components/BotaoWhatsapp'
import { formatarPreco } from '../utils/slug'

export default function Produto() {
  const { slug } = useParams()
  const { produto, loading } = useProduto(slug)

  if (loading) return (
    <div className="produto-page"><div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3xl)' }}>
        <div className="skeleton" style={{ aspectRatio: '4/5', borderRadius: 'var(--raio-card)' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          <div className="skeleton" style={{ height: 16, width: '40%', borderRadius: 4 }} />
          <div className="skeleton" style={{ height: 40, width: '80%', borderRadius: 4 }} />
        </div>
      </div>
    </div></div>
  )

  if (!produto) return (
    <div className="nao-encontrado">
      <div className="nao-encontrado-num">404</div>
      <h2 className="section-title">Produto não encontrado</h2>
      <Link to="/catalogo" className="btn btn-terra" style={{ marginTop: 'var(--space-md)' }}>Ver catálogo</Link>
    </div>
  )

  return (
    <div className="produto-page page-enter">
      <div className="container">
        <nav className="produto-breadcrumb">
          <Link to="/">Início</Link><span>›</span>
          <Link to="/catalogo">Catálogo</Link><span>›</span>
          <span style={{ color: 'var(--bark)' }}>{produto.nome}</span>
        </nav>
        <div className="produto-layout">
          <Galeria imagens={produto.imagens_publicas || []} nomeAlt={produto.nome} />
          <div className="produto-info">
            <p className="produto-categoria">{produto.categoria_site}</p>
            <h1 className="produto-nome">{produto.nome}</h1>
            {produto.preco && <p className="produto-preco">{formatarPreco(produto.preco)}</p>}
            {produto.descricao_publica && <p className="produto-descricao">{produto.descricao_publica}</p>}
            <div className="produto-cta">
              <BotaoWhatsapp produto={produto} />
              <Link to="/catalogo" className="btn btn-outline" style={{ justifyContent: 'center' }}>← Ver mais produtos</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
