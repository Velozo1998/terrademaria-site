const NUMERO = import.meta.env.VITE_WHATSAPP_NUMERO || '5500000000000'
const SITE_URL = 'https://terrademaria.com.br'

const EMOJIS = {
  'Terços': '📿', 'Escapulários': '✝️', 'Pulseiras': '🕊️', 'Medalhas': '⭐', 'Chaveiros': '🔑'
}

export function gerarLinkWhats(produto) {
  const url = `${SITE_URL}/produto/${produto.slug}`
  const emoji = EMOJIS[produto.categoria_site] || '🕊️'
  const codigo = produto.id ? ` (#${produto.id})` : ''
  const texto = encodeURIComponent(
    `Olá! Vim pelo site terrademaria.com.br\n` +
    `Quero saber mais sobre:\n\n` +
    `${emoji} ${produto.nome}${codigo}\n${url}\n\nObrigado(a)!`
  )
  return `https://wa.me/${NUMERO}?text=${texto}`
}

export function gerarLinkWhatsGeral(mensagem = 'Olá! Vim pelo site terrademaria.com.br e gostaria de mais informações.') {
  return `https://wa.me/${NUMERO}?text=${encodeURIComponent(mensagem)}`
}
