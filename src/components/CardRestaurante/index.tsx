import Tag from '../Tag'

import Estrela from '../../assets/images/estrela.png'
import * as S from './styles'

type Props = {
  infos: string[]
  imagem: string
  title: string
  nota: string
  description: string
  to: string
}

const CardRestaurante = ({
  infos,
  imagem,
  title,
  nota,
  description,
  to
}: Props) => {
  return (
    <S.Card>
      <img src={imagem} alt={title} />
      <S.Infos>
        {infos.map((infos) => (
          <Tag type="info" key={infos}>
            {infos}
          </Tag>
        ))}
      </S.Infos>
      <S.Informacoes>
        <S.Title>
          <h3>{title}</h3>
          <div>
            <p>{nota}</p>
            <img src={Estrela} alt="Estrela" />
          </div>
        </S.Title>
        <S.Description>{description}</S.Description>
        <Tag type="link" to={to}>
          Saiba mais
        </Tag>
      </S.Informacoes>
    </S.Card>
  )
}

export default CardRestaurante
