import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  padding: 8px;
  background-color: ${cores.rosa};
  color: ${cores.branco};
  transition: all ease 0.3s;

  &:hover {
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    scale: 1.03;
  }
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  margin-top: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 8px 0;
`

export const Buttom = styled.button`
  width: 100%;
  border: none;
  background-color: ${cores.branco};
  color: ${cores.rosa};
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    opacity: 0.8;
  }
`
