import styled from 'styled-components'

export const HeroBg = styled.div`
  //max-width: 1200px;
  height: 75vh;
  //width: 90%;
  width: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.lightMediumBg};
  position: relative;
  margin: 0 auto;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;

    background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20zm79.32-55l-1 1.732-17.32-10L82 4l17.32 10zm-80 80l-1 1.732-17.32-10L2 84l17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32zM38.16 24.134l1 1.732-17.32 10-1-1.732 17.32-10zM60 29v2H40v-2h20zm19.32 5l-1 1.732-17.32-10L62 24l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM111 40h-2V20h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zM40 49v2H20v-2h20zm19.32 5l-1 1.732-17.32-10L42 44l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM91 60h-2V40h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM39.32 74l-1 1.732-17.32-10L22 64l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM71 80h-2V60h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM120 89v2h-20v-2h20zm-84.134 9.16l-1.732 1-10-17.32 1.732-1 10 17.32zM51 100h-2V80h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM100 109v2H80v-2h20zm19.32 5l-1 1.732-17.32-10 1-1.732 17.32 10zM31 120h-2v-20h2v20z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
  }

  &:after {
    content: '';
    position: absolute;

    top: -26%;
    left: -28%;
    opacity: 0.2;
    width: 50%;
    height: 75%;

    transform: rotate(191deg);
    background: ${({ theme }) => theme.primaryGreen};
    mask-image: url('./leaf.svg');
    mask-position: center;
    mask-size: 100%;
    mask-repeat: no-repeat;

    z-index: 1;
  }
`
export const HeroGrid = styled.div`
  display: grid;
  width: 90%;
  margin: 0 auto;
  height: 100%;
  grid-template-columns: 1fr 1fr;
`

export const TextCol = styled.div`
  display: flex;
  //max-width: 800px;
  padding-left: 3rem;
  margin: 0 auto;
  flex-direction: column;
  z-index: 2;
  justify-content: center;
`

export const HeroTextWrapper = styled.div`
  margin: 0 auto;
  padding: 0.5rem;
  max-width: 440px;
`

export const HeroHeader = styled.h1`
  color: ${({ theme }) => theme.primaryText};
  font-size: clamp(1rem, 0.5rem + 2.5vw, 3.2rem);
  line-height: 1.35;
  letter-spacing: 2px;
  opacity: 0.9;
`

export const HeroSubHeader = styled.p`
  text-transform: uppercase;
  font-size: calc(1rem + 0.5vw);
  padding: 0.5rem 0;
  font-weight: 600;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.primaryGreen};
`

export const HeroBtn = styled.button`
  max-width: 200px;
  //text-transform: uppercase;
  //background: rgb(237,255,227);
  background: linear-gradient(354deg, rgba(147, 255, 86, 1) 0%, rgba(0, 255, 4, 0.5) 100%);
  background: #98e26d;
  padding: 0.85rem 1.85rem;
  margin-top: 3rem;
  letter-spacing: 2px;
  font-size: calc(1rem + 0.1vw);
  border-radius: 10px;
  font-weight: 700;
  box-shadow: 0 0 2px #000;
  //opacity: 0.95;
  border: none;

  color: ${({ theme }) => theme.primaryText};

  &:hover {
    transition: color 0.3s ease-in-out;
    background: ${({ theme }) => theme.primaryText};
    color: ${({ theme }) => theme.primaryGreen};
    cursor: pointer;
  }
`

export const ImageCol = styled.div`
  display: flex;
  //max-width: 400px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  z-index: 2;
  opacity: 0.9;
`
export const Img = styled.img`
  //max-width: calc(100% - 10rem);
  max-width: calc(50% + 5vw);
  height: auto;
  border-radius: 10px;
`
