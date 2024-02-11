import * as S from './styles'
import CardPrato from '../CardPrato'
import { Restaurante } from '../../pages/Home'

export type Props = {
  pratos: Restaurante
}

const ListaPratos = ({ pratos }: Props) => {
  return (
    <>
      <S.Banner style={{ backgroundImage: `url(${pratos.capa})` }}>
        <div className="container">
          <p>{pratos.tipo}</p>
          <h2>{pratos.titulo}</h2>
        </div>
      </S.Banner>
      <div className="container">
        <S.Lista>
          {pratos.cardapio.map((prato) => (
            <CardPrato
              key={prato.toString()}
              id={prato.id}
              title={prato.nome}
              description={prato.descricao}
              imgPrato={prato.foto}
              portion={prato.porcao}
              price={prato.preco}
            />
          ))}
        </S.Lista>
      </div>
    </>
  )
}

export default ListaPratos
