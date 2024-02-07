import * as S from './styles'

type Props = {
  imgPrato: string
  title: string
  description: string
}

const CardPrato = ({ imgPrato, title, description }: Props) => {
  return (
    <S.Card>
      <img src={imgPrato} alt={title} />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Buttom>Adicionar ao carrinho</S.Buttom>
    </S.Card>
  )
}

export default CardPrato
