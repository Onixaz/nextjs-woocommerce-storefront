import styled from 'styled-components'
import { FaHandHoldingHeart, FaGift, FaCommentMedical } from 'react-icons/fa'

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

export const CustomFaHandHoldingHeart = styled(FaHandHoldingHeart)`
  color: ${({ theme }) => theme.primaryRed};
`

export const CustomFaCommentMedical = styled(FaCommentMedical)`
  color: ${({ theme }) => theme.primaryRed};
`

export const CustomFaGift = styled(FaGift)`
  color: ${({ theme }) => theme.primaryRed};
`

export const ServicesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem;
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
      transition: all 1.5s ease;
      cursor: pointer;
      transform: scale(1.05);

      background: linear-gradient(to top, rgba(255, 36, 88, 0.2), rgb(13, 13, 13, 1));
      box-shadow: 0 0 20px rgba(255, 36, 88, 0.5);
      ${CustomFaGift}, ${CustomFaCommentMedical}, ${CustomFaHandHoldingHeart} {
        color: #fff;
      }
    }

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 0;

      border: 2px solid transparent;
    }

    &:hover::before {
      /* transition: all 0.3s;
      opacity: 1; */

      //animation: animate 0.3s linear forwards;
      width: 100%;
      height: 100%;
      border: 2px solid ${({ theme }) => theme.primaryRed};
      border-right: none;
      border-bottom: none;
      transition: height 0.2s linear, width 0.2s linear 0.2s;
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      height: 0;
      width: 0;
      border: 2px solid transparent;
    }

    &:hover::after {
      /* transition: all 0.3s;
      opacity: 1; */

      //animation: animate 0.3s linear forwards;
      width: 100%;
      height: 100%;
      border: 2px solid ${({ theme }) => theme.primaryRed};
      border-left: none;
      border-top: none;
      transition: height 0.2s linear, width 0.2s linear 0.2s;
    }
  }
`

export const ServicesP = styled.p`
  max-width: 440px;
  padding: 10px;
  font-size: calc(0.95rem + 0.1vw);
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #fff;
`

export const CardHeader = styled.p`
  color: #fff;
  font-size: calc(1.5rem + 0.1vw);
  font-weight: 600;
  padding-top: 2rem;
  text-align: center;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`

export const BtnWrapper = styled.div`
  padding: 50px;
`
