import { Lista } from './styles'
import CardPrato from '../CardPrato'
import Pratos from '../../models/Pratos'

export type Props = {
  pratos: Pratos[]
}

const ListaPratos = ({ pratos }: Props) => {
  return (
    <Lista>
      {pratos.map((prato) => (
        <CardPrato
          key={prato.toString()}
          imgPrato={prato.imgPrato}
          title={prato.title}
          description={prato.description}
        />
      ))}
    </Lista>
  )
}

export default ListaPratos
