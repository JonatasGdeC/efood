import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import ListaRestaurante from '../../components/ListaRestaurantes'

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      id: number
      foto: string
      preco: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const [restaurantes, setResturantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setResturantes(res))
  })

  return (
    <>
      <Header type="home" />
      <div className="container">
        <ListaRestaurante restaurantes={restaurantes} />
      </div>
    </>
  )
}

export default Home
