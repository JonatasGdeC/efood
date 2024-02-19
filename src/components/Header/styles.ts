import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

import { Props } from '.'
import { Link } from 'react-router-dom'

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

    @media (max-width: ${breakpoints.desktop}) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
      max-width: 100%;
    }
  }

  h2 {
    margin-top: 138px;
    font-size: 36px;
  }

  button {
    background-color: transparent;
    border: none;
    font-size: 18px;
    font-weight: bold;
    color: ${cores.rosa};
    cursor: pointer;
  }
`

export const LinkHome = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rosa};
`
