class Restaurante {
  infos: string[]
  imagem: string
  title: string
  nota: string
  description: string
  to: string
  id: number

  constructor(
    infos: string[],
    imagem: string,
    title: string,
    nota: string,
    description: string,
    to: string,
    id: number
  ) {
    this.infos = infos
    this.imagem = imagem
    this.title = title
    this.nota = nota
    this.description = description
    this.to = to
    this.id = id
  }
}

export default Restaurante
