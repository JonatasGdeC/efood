import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.li`
  position: relative;
  max-width: 472px;
  width: 100%;
  border: 1px solid ${cores.rosa};
  transition: all ease 0.3s;

  & > img {
    width: 100%;
  }

  &:hover {
    scale: 1.03;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Informacoes = styled.div`
  padding: 8px 8px 12px 8px;
  color: ${cores.rosa};
`
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`
export const Description = styled.p`
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 22px;
`
