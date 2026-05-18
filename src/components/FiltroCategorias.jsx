export default function FiltroCategorias({ categorias, ativa, onChange }) {
  return (
    <>
      <span className="filtro-label">Filtrar:</span>
      <button className={`filtro-btn ${ativa === 'Todos' ? 'ativo' : ''}`} onClick={() => onChange('Todos')}>Todos</button>
      {categorias.map(cat => (
        <button key={cat} className={`filtro-btn ${ativa === cat ? 'ativo' : ''}`} onClick={() => onChange(cat)}>{cat}</button>
      ))}
    </>
  )
}
