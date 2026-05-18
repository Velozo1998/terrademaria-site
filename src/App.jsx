import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import Produto from './pages/Produto'
import Sobre from './pages/Sobre'
import NaoEncontrado from './pages/NaoEncontrado'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/"              element={<Home />} />
          <Route path="/catalogo"      element={<Catalogo />} />
          <Route path="/produto/:slug" element={<Produto />} />
          <Route path="/sobre"         element={<Sobre />} />
          <Route path="*"              element={<NaoEncontrado />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
