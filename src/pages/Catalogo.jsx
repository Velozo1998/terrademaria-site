import { useState, useCallback } from 'react'
import { useProdutos, useCategorias } from '../hooks/useProdutos'
import ProdutoCard from '../components/ProdutoCard'
import FiltroCategorias from '../components/FiltroCategorias'
import Busca from '../components/Busca'

function SkeletonCard() {
  return <div className="skeleton skeleton-card" />
}

export default function Catalogo() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos')
  const [busca, setBusca] = useState('')
  const categorias = useCategorias()
  const { produtos, loading, erro } = useProdutos({ categoria: categoriaAtiva, busca })
  const handleBusca = useCallback((valor) => { setBusca(valor); if (valor) setCategoriaAtiva('Todos') }, [])

  return (
    <div className="catalogo-page page-enter">
      <section style={{ background: 'var(--bark)', padding: 'var(--space-2xl) 0', textAlign: 'center', backgroundImage: 'radial-gradient(ellipse at 50% 100%, rgba(200,169,106,0.12), transparent 60%)' }}>
        <div className="container">
          <p className="eyebrow" style={{ color: 'var(--terra-light)', marginBottom: 'var(--space-sm)' }}>Nossa coleção</p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 300, color: 'var(--branco)' }}>Catálogo</h1>
        </div>
      </section>
      <div className="filtros-wrap">
        <div className="container filtros-inner">
          <FiltroCategorias categorias={categorias} ativa={categoriaAtiva} onChange={cat => { setCategoriaAtiva(cat); setBusca('') }} />
          <Busca onChange={handleBusca} total={loading ? undefined : produtos.length} />
        </div>
      </div>
      <div className="catalogo-grid-wrap">
        <div className="container">
          {erro && <div className="empty-state"><p className="empty-state-title">Erro ao carregar produtos</p></div>}
          {!erro && loading && <div className="produtos-grid">{Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)}</div>}
          {!erro && !loading && produtos.length === 0 && <div className="empty-state"><div className="empty-state-icon">🕊️</div><p className="empty-state-title">Nenhum produto encontrado</p></div>}
          {!erro && !loading && produtos.length > 0 && <div className="produtos-grid">{produtos.map(p => <ProdutoCard key={p.id} produto={p} />)}</div>}
        </div>
      </div>
    </div>
  )
}
