import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { close } from '../../store/reducers/cart'

import Button from '../Button'
import * as S from './styles'
import imgExcluir from '../../assets/images/lixeira.svg'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <S.CartContainer className={isOpen ? 'is--open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Cart>
        <S.Lista>
          {items.map((restaurante) => (
            <li key={restaurante.id}>
              {restaurante.cardapio.map((prato) => (
                <S.Item key={prato.id}>
                  <img src={prato.foto} alt={prato.nome} />
                  <div>
                    <h4>{prato.nome}</h4>
                    <p>{prato.preco}</p>
                  </div>
                  <button title="Clique aqui para excluir este produto">
                    <img src={imgExcluir} alt="Excluir" />
                  </button>
                </S.Item>
              ))}
            </li>
          ))}
        </S.Lista>
        <S.Total>
          <p>Valor total</p>
          <p>R$ 60,90</p>
        </S.Total>
        <Button type="button" width="all">
          Continuar com a entrega
        </Button>
      </S.Cart>
    </S.CartContainer>
  )
}

export default Cart
