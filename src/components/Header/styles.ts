import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const Header = styled.header<Props>`
  width: 100%;
  padding-top: 64px;
  padding-bottom: 40px;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${cores.rosa};

  .container {
    display: ${(props) => (props.type === 'cardapio' ? 'flex' : '')};
    align-items: center;
    justify-content: space-between;
    max-width: ${(props) => (props.type === 'home' ? '560px' : '1024px')};
    text-align: center;
  }

  h2 {
    margin-top: 138px;
    font-size: 36px;
  }

  h3 {
    font-size: 18px;
  }
`
export const Banner = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    padding: 24px 0 32px;
    font-size: 32px;
    font-weight: 100;
    color: #fff;

    h2 {
      margin-top: 156px;
      font-size: 32px;
      font-weight: bold;
    }
  }
`
