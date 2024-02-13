import Button from '../Button'
import * as S from './styles'

import imgTeste from '../../assets/images/prato-pizza.png'
import imgExcluir from '../../assets/images/lixeira.svg'

const Cart = () => {
  return (
    <S.CartContainer>
      <S.Overlay />
      <S.Cart>
        <S.Lista>
          <S.Item>
            <img src={imgTeste} alt="" />
            <div>
              <h4>Nome do produto</h4>
              <p>R$ 60,90</p>
            </div>
            <button title="Clique aqui para excluir este produto">
              <img src={imgExcluir} alt="Excluir" />
            </button>
          </S.Item>
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
