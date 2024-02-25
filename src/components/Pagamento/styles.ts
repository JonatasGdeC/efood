import styled from 'styled-components'
import { cores } from '../../styles'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${cores.branco};

  h3 {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: bold;
    line-height: none;
  }
`

export const InputGroup = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  width: 100%;
`

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  font-weight: bold;

  input {
    border: none;
    font-weight: bold;
    padding: 8px;
    width: 100%;

    &.cvv {
      width: 86px;
    }
  }
`
