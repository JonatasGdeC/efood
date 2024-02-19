import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Card = styled.div`
  padding: 8px;
  max-width: 320px;
  background-color: ${cores.rosa};
  color: ${cores.branco};
  transition: all ease 0.3s;

  img {
    width: 304px;
    height: 167px;
    object-fit: cover;
  }

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
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
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
  display: flex;
  gap: 24px;
  z-index: 1;
  padding: 0 32px 32px;
  background-color: ${cores.rosa};
  color: ${cores.branco};

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;

    img {
      width: 100%;
    }
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
