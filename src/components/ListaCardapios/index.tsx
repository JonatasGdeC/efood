import Cardapios from '../../models/Cardapios'
import Cardapio from '../Cardapio'
import { Lista } from './styles'

export type Props = {
  cardapios: Cardapios[]
}

const ListaCardapios = ({ cardapios }: Props) => {
  return (
    <nav>
      <Lista>
        {cardapios.map((cardapio) => (
          <Cardapio
            key={cardapio.id}
            infos={cardapio.infos}
            imagem={cardapio.imagem}
            title={cardapio.title}
            nota={cardapio.nota}
            description={cardapio.description}
            to={cardapio.to}
          />
        ))}
      </Lista>
    </nav>
  )
}

export default ListaCardapios
