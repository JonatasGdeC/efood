import { Restaurante } from '../../pages/Home'

import { Lista } from './styles'
import CardRestaurante from '../CardRestaurante'

export type Props = {
  restaurantes: Restaurante[]
}

const ListaRestaurante = ({ restaurantes }: Props) => {
  return (
    <nav>
      <Lista>
        {restaurantes.map((restaurante) => (
          <CardRestaurante
            key={restaurante.toString()}
            id={restaurante.id}
            destaque={restaurante.destacado}
            infos={restaurante.tipo}
            imagem={restaurante.capa}
            title={restaurante.titulo}
            nota={restaurante.avaliacao}
            description={restaurante.descricao}
          />
        ))}
      </Lista>
    </nav>
  )
}

export default ListaRestaurante
