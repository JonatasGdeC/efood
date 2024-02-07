import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const Header = styled.header<Props>`
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 64px;
  padding-bottom: 40px;
  color: ${cores.rosa};

  .container {
    max-width: ${(props) => (props.type === 'home' ? '560px' : '1024px')};
    text-align: center;
    display: ${(props) => (props.type === 'cardapio' ? 'flex' : '')};
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    font-size: 36px;
    margin-top: 138px;
  }
`
export const Banner = styled.div`
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;

  .container {
    padding: 24px 0 32px;
    color: #fff;
    font-size: 32px;

    h2 {
      font-weight: bold;
      margin-top: 156px;
    }
  }
`
