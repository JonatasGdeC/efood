import { styled } from 'styled-components'
import { cores } from '../../styles'

export const CartContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 1;
  display: none;

  &.is--open {
    display: block;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${cores.preto};
  opacity: 0.8;
`

export const Cart = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0;
  height: 100%;
  background-color: ${cores.rosa};
  z-index: 1;
`

export const Lista = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Item = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  aling-items: center;
  padding: 8px;
  background-color: ${cores.branco};
  color: ${cores.rosa};

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
  }

  button {
    position: absolute;
    bottom: 8px;
    right: 8px;
    background-color: transparente;
    border: none;
    cursor: pointer;

    img {
      width: 16px;
      height: 16px;
    }
  }
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0 16px;
  font-size: 14px;
  font-weight: bold;
  color: ${cores.branco};
`

export const Buttons = styled.div`
  margin-top: 24px;

  button {
    margin-bottom: 8px;
  }
`
