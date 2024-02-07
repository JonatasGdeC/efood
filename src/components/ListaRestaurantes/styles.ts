import styled from 'styled-components'

export const Lista = styled.ul`
  display: grid;
  column-gap: 80px;
  row-gap: 48px;
  grid-template-columns: 1fr 1fr;
  margin-top: 80px;
  margin-bottom: 120px;

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 40px 10px 80px;
  }
`
