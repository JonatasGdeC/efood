import Estrela from '../../assets/images/estrela.png'

import * as S from './styles'

const Cardapio = () => {
  return (
    <S.Card>
      <img src="https://via.placeholder.com/472x216" alt="" />
      <S.Infos>
        <S.Title>
          <h3>Nome do produto</h3>
          <div>
            <p>4.9</p>
            <img src={Estrela} alt="Estrela" />
          </div>
        </S.Title>
        <S.Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
          veritatis commodi sunt recusandae cum velit sit quaerat iste
          accusantium necessitatibus! Quidem quos accusamus optio neque itaque
          alias minima, sapiente numquam?
        </S.Description>
        <a href="#">Saiba mais</a>
      </S.Infos>
    </S.Card>
  )
}

export default Cardapio
