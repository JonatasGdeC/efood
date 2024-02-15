import Button from '../Button'
import btnClose from '../../assets/images/close.png'

import * as S from './styles'
import { useState } from 'react'
import { Cardapio } from '../../pages/Cardapio'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  prato?: Cardapio
  id: number
  imgPrato: string
  title: string
  description: string
  portion: string
  price: number
}

interface ModalState {
  isVisible: boolean
}

const CardPrato = ({
  prato,
  imgPrato,
  title,
  description,
  portion,
  price
}: Props) => {
  const dispatch = useDispatch()
  const addPrato = () => {
    dispatch(add(prato!))
    dispatch(open())
  }

  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({ isVisible: false })
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 150) {
      return descricao.slice(0, 147) + '...'
    }
    return descricao
  }

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <>
      <S.Card>
        <img src={imgPrato} alt={title} />
        <S.Title>{title}</S.Title>
        <S.Description>{getDescricao(description)}</S.Description>
        <Button width="all" type="button">
          <p
            onClick={() => {
              setModal({ isVisible: true })
            }}
          >
            Mais detalhes
          </p>
        </Button>
      </S.Card>
      <S.Modal className={modal.isVisible ? 'visivel' : ''}>
        <div className="container">
          <S.HeaderModal>
            <img src={btnClose} alt="Fechar" onClick={() => closeModal()} />
          </S.HeaderModal>
          <S.BodyModal>
            <img src={imgPrato} alt="Imagem do prato" />
            <S.InfosModal>
              <h4>{title}</h4>
              <p>{description}</p>
              <p>Serve: {portion}</p>
              <Button type="button">
                <span
                  onClick={addPrato}
                >{`Adicionar ao carrinho - ${formataPreco(price)}`}</span>
              </Button>
            </S.InfosModal>
          </S.BodyModal>
        </div>
        <div className="overlay" onClick={() => closeModal()}></div>
      </S.Modal>
    </>
  )
}

export default CardPrato
