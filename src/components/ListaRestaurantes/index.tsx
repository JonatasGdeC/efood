import Restaurantes from '../../models/Restaurante'
import Restaurante from '../CardRestaurante'
import { Lista } from './styles'

export type Props = {
  restaurantes: Restaurantes[]
}

const ListaRestaurante = ({ restaurantes }: Props) => {
  return (
    <nav>
      <Lista>
        {restaurantes.map((restaurante) => (
          <Restaurante
            key={restaurante.id}
            infos={restaurante.infos}
            imagem={restaurante.imagem}
            title={restaurante.title}
            nota={restaurante.nota}
            description={restaurante.description}
            to={restaurante.to}
          />
        ))}
      </Lista>
    </nav>
  )
}

export default ListaRestaurante
