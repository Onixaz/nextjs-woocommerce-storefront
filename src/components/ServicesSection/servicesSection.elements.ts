import styled from 'styled-components'

export const ServicesContainer = styled.div`
  background: ${({ theme }) => theme.primaryBlack};
  padding: 10rem 2rem;
  display: flex;
  min-height: 75vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 992px) {
    padding: 4rem 2rem;
  }
`

export const ServicesCard = styled.div`
  //background: #fff;
  display: flex;
  flex-direction: column;
  //justify-content: space-evenly;
  align-items: center;

  margin: 1.5rem;
  //border: 1px solid #fff;
  width: calc(25% + 1rem);
  border-radius: 5px;
  padding: 2rem 1rem 1rem 1rem;

  @media screen and (max-width: 992px) {
    margin: 1rem;
    width: calc(80% + 2rem);
  }
`

export const ServicesWrapper = styled.div`
  display: flex;
  padding: 4rem 1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  max-width: 1400px;
  margin: 0 auto;

  ${ServicesCard} {
    &:hover {
      cursor: pointer;
      transform: scale(1.05);
      transition: all 0.2s ease-in-out;
    }

    &:before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      width: 0;
      height: 0;
      background: transparent;

      border: 1px solid transparent;
    }

    &:hover::before {
      animation: animate 0.3s linear forwards;
    }

    @keyframes animate {
      0% {
        width: 0;
        height: 0;
        border-top-color: ${({ theme }) => theme.primaryRed};
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
      }
      50% {
        width: 100%;
        height: 0;
        border-top-color: ${({ theme }) => theme.primaryRed};
        border-right-color: ${({ theme }) => theme.primaryRed};
        border-bottom-color: transparent;
        border-left-color: transparent;
      }
      100% {
        width: 100%;
        height: 100%;
        border-top-color: ${({ theme }) => theme.primaryRed};
        border-right-color: ${({ theme }) => theme.primaryRed};
        border-bottom-color: transparent;
        border-left-color: transparent;
      }
    }
    &:after {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      width: 0;
      height: 0;
      background: transparent;

      border: 1px solid transparent;
    }

    &:hover::after {
      animation: animate2 0.3s linear forwards;
    }

    @keyframes animate2 {
      0% {
        width: 0;
        height: 0;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: ${({ theme }) => theme.primaryRed};
      }
      50% {
        width: 0;
        height: 100%;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: ${({ theme }) => theme.primaryRed};
        border-left-color: ${({ theme }) => theme.primaryRed};
      }
      100% {
        width: 100%;
        height: 100%;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: ${({ theme }) => theme.primaryRed};
        border-left-color: ${({ theme }) => theme.primaryRed};
      }
    }
  }
`

export const ServicesP = styled.p`
  max-width: 440px;
  padding: 10px;
  font-size: calc(15px + 0.1vw);
  line-height: 24px;
  text-align: center;
  color: #fff;
`

export const CardHeader = styled.p`
  color: #fff;
  font-size: clamp(1.25rem, 5vw + 1rem, 1.5rem);
  font-weight: 600;
  padding-top: 2rem;
  text-align: center;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`

export const BtnWrapper = styled.div`
  padding: 50px;
`
