import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../CardPrato'

import Button from '../Button'
import * as S from './styles'
import imgExcluir from '../../assets/images/lixeira.svg'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPreco = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is--open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Cart>
        <S.Lista>
          {items.map((prato) => (
            <S.Item key={prato.id}>
              <img src={prato.foto} alt={prato.nome} />
              <div>
                <h4>{prato.nome}</h4>
                <p>{formataPreco(prato.preco)}</p>
              </div>
              <button
                title="Clique aqui para excluir este produto"
                onClick={() => removeItem(prato.id)}
              >
                <img src={imgExcluir} alt="Excluir" />
              </button>
            </S.Item>
          ))}
        </S.Lista>
        <S.Total>
          <p>Valor total</p>
          <p>{formataPreco(getTotalPreco())}</p>
        </S.Total>
        <Button type="button" width="all">
          Continuar com a entrega
        </Button>
      </S.Cart>
    </S.CartContainer>
  )
}

export default Cart
