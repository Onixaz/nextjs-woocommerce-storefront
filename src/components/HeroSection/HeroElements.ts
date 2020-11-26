import styled from 'styled-components'
import { FaAngleDoubleDown } from 'react-icons/fa'

export const HeroContainer = styled.div`
  //background: ${({ theme }) => theme.primaryBlack};
  background: linear-gradient(15deg, #ce1b28 0%, #111111 70%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -80px;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
  :after {
    content: '';
    position: absolute;
    opacity: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, transparent 100%);
    z-index: 2;
  }
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeroH1 = styled.h1<{ hero?: boolean }>`
  display: inline-block;
  color: ${({ theme, hero }) => (hero ? theme.primaryWhite : theme.primaryBlack)};
  font-size: clamp(0.5rem, 2vw + 2vh + 0.5rem, 1.5rem);
  text-align: center;
`

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: clamp(0.5rem, 2vw + 0.5rem, 1.5rem);
  text-align: center;
  max-width: 600px;
`

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ScrollDownIconWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: calc(17rem + 3vw);
`

export const IconDown = styled(FaAngleDoubleDown)`
  color: ${({ theme }) => theme.primaryRed};
  cursor: pointer;
`

export const IconHolder = styled.span`
  font-size: 3rem;
  margin-top: 1rem;
  color: #fff;
  display: inline-block;
  /* animation: bounce 2s ease-in-out infinite;

  @keyframes bounce {
    0%,
    25%,
    55%,
    75%,
    100% {
      transform: translateY(0);
    }

    45% {
      transform: translateY(-20px);
    }

    65% {
      transform: translateY(-10px);
    }
    85% {
      transform: translateY(-5px);
    }
  } */
`
