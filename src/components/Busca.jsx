import { useState, useEffect } from 'react'

export default function Busca({ onChange, total }) {
  const [valor, setValor] = useState('')
  useEffect(() => {
    const timer = setTimeout(() => onChange(valor), 300)
    return () => clearTimeout(timer)
  }, [valor, onChange])
  return (
    <div className="busca-wrap">
      <input type="text" className="busca-input" placeholder="Buscar produto…" value={valor} onChange={e => setValor(e.target.value)} />
      {total !== undefined && <span className="busca-count">{total} {total === 1 ? 'produto' : 'produtos'}</span>}
    </div>
  )
}
