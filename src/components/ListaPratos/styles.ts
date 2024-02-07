import styled from 'styled-components'

export const Lista = styled.ul`
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 56px;
  margin-bottom: 120px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 796px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`
