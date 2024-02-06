import styled from 'styled-components'
import { cores } from '../../styles'

export const Header = styled.header`
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 64px;
  padding-bottom: 40px;
  color: ${cores.rosa};

  .container {
    max-width: 540px;
    text-align: center;
  }

  h2 {
    font-size: 36px;
    margin-top: 138px;
  }
`
