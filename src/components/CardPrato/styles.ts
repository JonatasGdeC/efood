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
  margin-top: 8px;
  font-size: 16px;
  font-weight: bold;
`

export const Description = styled.p`
  margin: 8px 0;
  font-size: 14px;
  line-height: 22px;
`

export const Buttom = styled.button`
  width: 100%;
  padding: 4px;
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
