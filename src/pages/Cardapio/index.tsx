import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import ListaPratos from '../../components/ListaPratos'
import { Restaurante } from '../Home'

const Cardapio = () => {
  const { id } = useParams()
  const [cardapio, setCardapio] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [id])

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
