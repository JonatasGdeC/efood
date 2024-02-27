import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import ListaPratos from '../../components/ListaPratos'

import { useGetPratosQuery } from '../../services/api'
import Loading from '../../components/Loading'

export type Cardapio = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

const Cardapio = () => {
  const { id } = useParams()
  const { data: cardapio } = useGetPratosQuery(id!)

  if (!cardapio) {
    return <Loading />
  }

  return (
    <>
      <Header type="cardapio" />
      <ListaPratos pratos={cardapio} />
    </>
  )
}

export default Cardapio
