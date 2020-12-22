import { MdClose } from 'react-icons/md'
import styled from 'styled-components'

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    top: 50px;
  }
`

export const ModalContainer = styled.div<{ showDescription: boolean }>`
  max-width: 800px;
  //max-height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: ${({ showDescription }) => (showDescription ? `1fr 1fr` : '1fr')};
  grid-template-areas: 'img desc';
  position: relative;
  z-index: 10;

  @media screen and (max-width: 768px) {
    max-width: 360px;

    grid-template-areas:
      'img img'
      'desc desc';
  }
`
export const ModalImg = styled.img`
  width: 100%;
  height: auto;
  grid-area: img;

  //height: 75%;
`

export const ModalContent = styled.div<{ showDescription: boolean }>`
  display: ${({ showDescription }) => (showDescription ? 'flex' : 'none')};
  top: 0;
  left: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: ${({ theme }) => theme.primaryBlack};
  grid-area: desc;
`

export const ModalText = styled.p`
  text-align: center;
  //color: ${({ theme }) => theme.lightMediumBg};
  font-size: calc(0.85rem + 0.1vw);
  font-weight: 400;
  padding: 1rem;
  letter-spacing: 0.3px;
`

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  color: ${({ theme }) => theme.primaryBlack};
  top: 15px;
  right: 15px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`
