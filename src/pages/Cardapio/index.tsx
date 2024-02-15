import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import ListaPratos from '../../components/ListaPratos'

import { useGetPratosQuery } from '../../services/api'

const Cardapio = () => {
  const { id } = useParams()
  const { data: cardapio } = useGetPratosQuery(id!)

  if (!cardapio) {
    return <h4>Carregando...</h4>
  }

  return (
    <>
      <Header type="cardapio" />
      <ListaPratos pratos={cardapio} />
    </>
  )
}

export default Cardapio
