import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../CardPrato'

import Button from '../Button'
import * as S from './styles'
import imgExcluir from '../../assets/images/lixeira.svg'
import Pagamento from '../Pagamento'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [entrega, setEntrega] = useState(false)
  const [pagamento, setPagamento] = useState(false)

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
        {!entrega ? (
          <>
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
            <Button type="button" width="all" onClick={() => setEntrega(true)}>
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <>
            {!pagamento ? (
              <>
                <Pagamento type="entrega" />
                <S.Buttons>
                  <Button
                    type="button"
                    width="all"
                    onClick={() => setPagamento(true)}
                  >
                    Continuar com pagamento
                  </Button>
                  <Button
                    type="button"
                    width="all"
                    onClick={() => setEntrega(false)}
                  >
                    Voltar para o carrinho
                  </Button>
                </S.Buttons>
              </>
            ) : (
              <>
                <Pagamento
                  type="pagamento"
                  total={formataPreco(getTotalPreco())}
                />
                <S.Buttons>
                  <Button type="button" width="all">
                    Finalizar pagamento
                  </Button>
                  <Button
                    type="button"
                    width="all"
                    onClick={() => setPagamento(false)}
                  >
                    Voltar para a edição de endereço
                  </Button>
                </S.Buttons>
              </>
            )}
          </>
        )}
      </S.Cart>
    </S.CartContainer>
  )
}

export default Cart
