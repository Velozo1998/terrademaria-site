import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export function useProdutos({ categoria, busca, apenasDestaques } = {}) {
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    let cancelled = false
    async function buscarProdutos() {
      setLoading(true)
      setErro(null)
      let query = supabase
        .from('produtos')
        .select('id, nome, slug, preco_venda, categoria_site, ordem_site, imagens_publicas, destaque, descricao_publica')
        .eq('publicar_site', true)
        .order('ordem_site', { ascending: true })
      if (categoria && categoria !== 'Todos') query = query.eq('categoria_site', categoria)
      if (busca && busca.trim()) query = query.ilike('nome', `%${busca.trim()}%`)
      if (apenasDestaques) query = query.eq('destaque', true)
      const { data, error } = await query
      if (!cancelled) {
        if (error) { setErro(error.message); setProdutos([]) }
        else setProdutos(data || [])
        setLoading(false)
      }
    }
    buscarProdutos()
    return () => { cancelled = true }
  }, [categoria, busca, apenasDestaques])

  return { produtos, loading, erro }
}

export function useCategorias() {
  const [categorias, setCategorias] = useState([])
  useEffect(() => {
    async function buscar() {
      const { data } = await supabase.from('produtos').select('categoria_site').eq('publicar_site', true).not('categoria_site', 'is', null)
      if (data) setCategorias([...new Set(data.map(p => p.categoria_site))].sort())
    }
    buscar()
  }, [])
  return categorias
}
