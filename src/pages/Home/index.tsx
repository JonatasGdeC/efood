import Header from '../../components/Header'
import ListaCardapios from '../../components/ListaCardapios'
import Cardapios from '../../models/Cardapios'

import CardapioItaliano from '../../assets/images/cardapio-comida-italiana.png'
import CardapioJapones from '../../assets/images/cardapio-comida-japonesa.png'

const cardapios: Cardapios[] = [
  {
    id: 1,
    infos: ['Destaque da semana', 'Japonesa'],
    imagem: CardapioJapones,
    title: 'Hioki Sushi',
    nota: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    to: ''
  },
  {
    id: 2,
    infos: ['Italiana'],
    imagem: CardapioItaliano,
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    to: ''
  },
  {
    id: 3,
    infos: ['Destaque da semana', 'Japonesa'],
    imagem: CardapioJapones,
    title: 'Hioki Sushi',
    nota: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    to: ''
  },
  {
    id: 4,
    infos: ['Italiana'],
    imagem: CardapioItaliano,
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    to: ''
  },
  {
    id: 5,
    infos: ['Destaque da semana', 'Japonesa'],
    imagem: CardapioJapones,
    title: 'Hioki Sushi',
    nota: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    to: ''
  },
  {
    id: 6,
    infos: ['Italiana'],
    imagem: CardapioItaliano,
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    to: ''
  }
]

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <ListaCardapios cardapios={cardapios} />
      </div>
    </>
  )
}

export default Home
