import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import { EstiloGlobal } from './styles'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <EstiloGlobal />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
