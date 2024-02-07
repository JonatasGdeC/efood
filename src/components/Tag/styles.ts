import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const TagContainer = styled.div`
  display: inline-block;
  margin-left: 8px;
  padding: 6px 4px;
  background-color: ${cores.rosa};
  color: ${cores.branco};
  font-size: 12px;
  font-weight: bold;
`
export const LinkCardapio = styled(Link)`
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
