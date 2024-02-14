import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

// import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import * as S from './styles'
import imgHeader from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

export type Props = {
  type: 'home' | 'cardapio'
  nameRestaurante?: string
  imgRestaurante?: string
  categoryRestaurante?: string
}

const Header = ({
  type,
  nameRestaurante,
  imgRestaurante,
  categoryRestaurante
}: Props) => {
  const dispatch = useDispatch()
  // const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  if (type === 'home') {
    return (
      <S.Header type="home" style={{ backgroundImage: `url(${imgHeader})` }}>
        <div className="container">
          <img src={logo} alt="efood" />
          <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
        </div>
      </S.Header>
    )
  }

  return (
    <>
      <S.Header
        type="cardapio"
        style={{ backgroundImage: `url(${imgHeader})` }}
      >
        <div className="container">
          <h3>Restaurantes</h3>
          <Link to={'/'}>
            <img src={logo} alt="efood" />
          </Link>
          <h3 onClick={openCart}>0 produto(s) no carrinho</h3>
        </div>
        <div style={{ backgroundImage: `url(${imgRestaurante})` }}>
          <div className="container">
            <p>{categoryRestaurante}</p>
            <h3>{nameRestaurante}</h3>
          </div>
        </div>
      </S.Header>
    </>
  )
}

export default Header
