import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export function useProduto(slug) {
  const [produto, setProduto] = useState(null)
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    if (!slug) { setLoading(false); return }
    let cancelled = false
    async function buscarProduto() {
      setLoading(true)
      setErro(null)
      const { data, error } = await supabase.from('produtos').select('*').eq('slug', slug).eq('publicar_site', true).single()
      if (!cancelled) {
        if (error) { if (error.code !== 'PGRST116') setErro(error.message); setProduto(null) }
        else setProduto(data)
        setLoading(false)
      }
    }
    buscarProduto()
    return () => { cancelled = true }
  }, [slug])

  return { produto, loading, erro }
}
