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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  z-index: 1;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const HeaderModal = styled.header`
  text-align: right;
  background-color: ${cores.rosa};
  img {
    margin: 8px;
    cursor: pointer;
  }
`

export const BodyModal = styled.div`
  z-index: 1;
  background-color: ${cores.rosa};
  display: flex;
  gap: 24px;
  padding: 0 32px 32px;
  color: ${cores.branco};

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
`

export const InfosModal = styled.div`
  h4 {
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: bold;
  }

  p {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 22px;
  }
`
