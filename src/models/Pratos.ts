class Pratos {
  imgPrato: string
  title: string
  description: string
  id: number

  constructor(
    imgPrato: string,
    title: string,
    description: string,
    id: number
  ) {
    this.imgPrato = imgPrato
    this.title = title
    this.description = description
    this.id = id
  }
}

export default Pratos
