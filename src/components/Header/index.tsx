import * as S from './styles'
import imgHeader from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <S.Header style={{ backgroundImage: `url(${imgHeader})` }}>
      <div className="container">
        <img src={logo} alt="efood" />
        <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
      </div>
    </S.Header>
  )
}

export default Header
