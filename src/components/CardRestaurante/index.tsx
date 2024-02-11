import Tag from '../Tag'
import Button from '../Button'

import Estrela from '../../assets/images/estrela.png'
import * as S from './styles'

type Props = {
  infos: string
  imagem: string
  title: string
  nota: number
  description: string
  to?: string
}

const CardRestaurante = ({
  infos,
  imagem,
  title,
  nota,
  description
}: Props) => {
  return (
    <S.Card>
      <img src={imagem} alt={title} />
      <S.Infos>
        <Tag>{infos}</Tag>
      </S.Infos>
      <S.Informacoes>
        <S.Title>
          <p>{title}</p>
          <div>
            <p>{nota}</p>
            <img src={Estrela} alt="Estrela" />
          </div>
        </S.Title>
        <S.Description>{description}</S.Description>
        <Button to="/cardapio" type="link">
          Saiba mais
        </Button>
      </S.Informacoes>
    </S.Card>
  )
}

export default CardRestaurante
