import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  max-width: 472px;
  width: 100%;
  background-color: ${cores.branco};
  border: 1px solid ${cores.rosa};
`

export const Infos = styled.div`
  padding: 8px;
  color: ${cores.rosa};
`
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`
