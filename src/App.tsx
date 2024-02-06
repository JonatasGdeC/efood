import { EstiloGlobal } from './styles'

import Header from './components/Header'
import ListaCardapios from './components/ListaCardapios'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <div className="container">
        <ListaCardapios />
      </div>
    </>
  )
}

export default App
