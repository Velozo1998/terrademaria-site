import { useState } from 'react'
import { getImageUrl } from '../lib/supabase'

export default function Galeria({ imagens = [], nomeAlt = '' }) {
  const [ativa, setAtiva] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const urls = imagens.map(getImageUrl)
  if (urls.length === 0) return (
    <div className="galeria"><div className="galeria-principal" style={{ cursor: 'default', display:'flex', alignItems:'center', justifyContent:'center' }}><span style={{ fontSize:'4rem', opacity:0.15 }}>📿</span></div></div>
  )
  return (
    <>
      <div className="galeria">
        <div className="galeria-principal" onClick={() => setLightbox(true)}>
          <img src={urls[ativa]} alt={`${nomeAlt} — foto ${ativa + 1}`} />
        </div>
        {urls.length > 1 && (
          <div className="galeria-thumbs">
            {urls.map((url, i) => (
              <button key={i} className={`galeria-thumb ${i === ativa ? 'ativo' : ''}`} onClick={() => setAtiva(i)}>
                <img src={url} alt={`Miniatura ${i + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(false)}>
          <button className="lightbox-close" onClick={() => setLightbox(false)}>✕</button>
          <img className="lightbox-img" src={urls[ativa]} alt={nomeAlt} onClick={e => e.stopPropagation()} />
        </div>
      )}
    </>
  )
}
