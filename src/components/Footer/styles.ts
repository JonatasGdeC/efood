import styled from 'styled-components'
import { cores } from '../../styles'

export const Footer = styled.footer`
  padding: 40px 0;
  background-color: ${cores.branco};
  color: ${cores.rosa};

  .container {
    text-align: center;

    p {
      font-size: 10px;
    }
  }
`

export const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
  margin-bottom: 80px;
`
