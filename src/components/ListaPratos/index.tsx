import { Lista } from './styles'
import CardPrato from '../CardPrato'
import { Restaurante } from '../../pages/Home'

export type Props = {
  pratos: Restaurante
}

const ListaPratos = ({ pratos }: Props) => {
  return (
    <Lista>
      {pratos.cardapio.map((prato) => (
        <CardPrato
          key={prato.toString()}
          id={prato.id}
          title={prato.nome}
          description={prato.descricao}
          imgPrato={prato.foto}
        />
      ))}
    </Lista>
  )
}

export default ListaPratos
