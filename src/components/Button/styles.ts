import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const Button = styled.button<Props>`
  ${(prosp) => prosp.width === 'all' && 'width: 100%;'}
  padding: 4px 6px;
  background-color: ${cores.branco};
  border: none;
  color: ${cores.rosa};
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    opacity: 0.8;
  }
`

export const ButtonLink = styled(Link)`
  padding: 6px 4px;
  background-color: ${cores.rosa};
  color: ${cores.branco};
  font-size: 14px;
  font-weight: bold;
  transition: all ease 0.3s;

  &:hover {
    opacity: 0.8;
  }
`
