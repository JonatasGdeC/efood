import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import { EstiloGlobal } from './styles'
import Footer from './components/Footer'
import Cart from './components/Cart'
import { store } from './store'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <EstiloGlobal />
          <Rotas />
          <Footer />
          <Cart />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
