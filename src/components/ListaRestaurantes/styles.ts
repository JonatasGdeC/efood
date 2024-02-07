import styled from 'styled-components'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 48px;
  margin-top: 40px;
  margin-bottom: 80px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 10px 80px;
  }
`
