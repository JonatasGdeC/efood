import logo from '../../assets/images/logo.png'
import logoInstagram from '../../assets/images/logo-instagram.png'
import logoFacebook from '../../assets/images/logo-facebook.png'
import logoTwitter from '../../assets/images/logo-twitter.png'
import * as S from './styles'

const Footer = () => {
  return (
    <S.Footer>
      <div className="container">
        <img src={logo} alt="efood" />
        <S.SocialLinks>
          <li>
            <a href="#">
              <img src={logoInstagram} alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={logoFacebook} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={logoTwitter} alt="Twitter" />
            </a>
          </li>
        </S.SocialLinks>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
          estabelecimento contratado.
        </p>
      </div>
    </S.Footer>
  )
}

export default Footer
