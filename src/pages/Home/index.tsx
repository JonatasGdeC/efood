import Header from '../../components/Header'
import ListaRestaurante from '../../components/ListaRestaurantes'
import Loading from '../../components/Loading'

import { useGetRestaurantesQuery } from '../../services/api'
import { Cardapio } from '../Cardapio'

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Home = () => {
  const { data: restaurantes } = useGetRestaurantesQuery()

  if (restaurantes) {
    return (
      <>
        <Header type="home" />
        <div className="container">
          <ListaRestaurante restaurantes={restaurantes} />
        </div>
      </>
    )
  }

  return <Loading />
}

export default Home
