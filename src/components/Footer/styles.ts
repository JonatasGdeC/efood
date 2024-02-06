import styled from 'styled-components'
import { cores } from '../../styles'

export const Footer = styled.footer`
  background-color: ${cores.branco};
  color: ${cores.rosa};
  padding: 40px 0;

  .container {
    text-align: center;
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
