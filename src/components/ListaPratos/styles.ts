import styled from 'styled-components'
import { cores } from '../../styles'

export const Banner = styled.div`
  position: relative;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;

  .container {
    padding: 24px 0 32px;
    font-size: 32px;
    font-weight: 100;
    color: #fff;

    h2 {
      margin-top: 156px;
      font-size: 32px;
      font-weight: bold;
    }
  }

  &::after {
    position: absolute;
    z-index: -1;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${cores.preto};
    opacity: 0.5;
    content: '';
  }
`

export const Lista = styled.ul`
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 56px;
  margin-bottom: 120px;

  @media (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`
