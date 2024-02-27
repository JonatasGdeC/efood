import Tag from '../Tag'
import Button from '../Button'

import Estrela from '../../assets/images/estrela.png'
import * as S from './styles'

type Props = {
  id: number
  destaque: boolean
  infos: string
  imagem: string
  title: string
  nota: number
  description: string
  to?: string
}

const CardRestaurante = ({
  id,
  destaque,
  infos,
  imagem,
  title,
  nota,
  description
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 247) + '...'
    }
    return descricao
  }
  return (
    <S.Card>
      <img src={imagem} alt={title} />
      <S.Infos>
        {destaque === true && <Tag>Destaque da semana</Tag>}
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
        <S.Description>{getDescricao(description)}</S.Description>
        <Button to={`/cardapio/${id}`} assignment="link">
          Saiba mais
        </Button>
      </S.Informacoes>
    </S.Card>
  )
}

export default CardRestaurante
