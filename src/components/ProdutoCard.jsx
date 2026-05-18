import { Link } from 'react-router-dom'
import { getImageUrl } from '../lib/supabase'
import { formatarPreco } from '../utils/slug'

export default function ProdutoCard({ produto }) {
  const imagens = produto.imagens_publicas || []
  const primeiraImagem = imagens[0] ? getImageUrl(imagens[0]) : null
  return (
    <Link to={`/produto/${produto.slug}`} className="produto-card">
      <div className="produto-card-img">
        {primeiraImagem ? <img src={primeiraImagem} alt={produto.nome} loading="lazy" /> : <div className="produto-card-placeholder"><span>📿</span></div>}
        {produto.categoria_site && <span className="produto-card-badge">{produto.categoria_site}</span>}
        {produto.destaque && <span className="produto-card-destaque">Destaque</span>}
      </div>
      <div className="produto-card-body">
        <p className="produto-card-cat">{produto.categoria_site}</p>
        <h3 className="produto-card-nome">{produto.nome}</h3>
        {produto.preco && <p className="produto-card-preco">{formatarPreco(produto.preco)}</p>}
      </div>
    </Link>
  )
}
