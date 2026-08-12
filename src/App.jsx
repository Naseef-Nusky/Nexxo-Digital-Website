import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import WebDesign from './pages/WebDesign'
import Seo from './pages/Seo'
import Ppc from './pages/Ppc'
import Quote from './pages/Quote'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/seo" element={<Seo />} />
          <Route path="/ppc" element={<Ppc />} />
          <Route path="/quote" element={<Quote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
