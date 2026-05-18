import { gerarLinkWhats } from '../utils/whatsapp'

export default function BotaoWhatsapp({ produto }) {
  return (
    <a href={gerarLinkWhats(produto)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
      <span style={{ fontSize: '1.1rem' }}>💬</span> Quero esse pelo WhatsApp
    </a>
  )
}
