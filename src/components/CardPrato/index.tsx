import Button from '../Button'
import btnClose from '../../assets/images/close.png'
import imgPizza from '../../assets/images/prato-pizza.png'

import * as S from './styles'
import { useState } from 'react'

type Props = {
  id: number
  imgPrato: string
  title: string
  description: string
}

interface ModalState {
  isVisible: boolean
}

const CardPrato = ({ imgPrato, title, description }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({ isVisible: false })
  }

  return (
    <>
      <S.Card>
        <img src={imgPrato} alt={title} />
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
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
            <img src={imgPizza} alt="Imagem do prato" />
            <S.InfosModal>
              <h4>Pizza Marguerita</h4>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião.
              </p>
              <p>
                Serve: <span>de 2 a 3 pessoas</span>
              </p>
              <Button type="button">Adicionar ao carrinho - R$ 60,90</Button>
            </S.InfosModal>
          </S.BodyModal>
        </div>
        <div className="overlay" onClick={() => closeModal()}></div>
      </S.Modal>
    </>
  )
}

export default CardPrato
