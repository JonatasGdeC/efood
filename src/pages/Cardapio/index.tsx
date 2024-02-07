import Header from '../../components/Header'
import ListaPratos from '../../components/ListaPratos'
import Pratos from '../../models/Pratos'

import imgPratoItaliano from '../../assets/images/prato-pizza.png'

const pratos: Pratos[] = [
  {
    id: 1,
    imgPrato: imgPratoItaliano,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    imgPrato: imgPratoItaliano,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    imgPrato: imgPratoItaliano,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    imgPrato: imgPratoItaliano,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    imgPrato: imgPratoItaliano,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    imgPrato: imgPratoItaliano,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Cardapio = () => {
  return (
    <>
      <Header type="cardapio" />
      <div className="container">
        <ListaPratos pratos={pratos} />
      </div>
    </>
  )
}

export default Cardapio
