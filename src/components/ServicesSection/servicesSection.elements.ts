import styled from 'styled-components'

export const ServicesContainer = styled.div`
  background: ${({ theme }) => theme.primaryBlack};
  padding: 12rem 2rem 8rem 2rem;
  /* padding-bottom: 12rem; */
  display: flex;
  min-height: 50vh;
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
  justify-content: center;
  align-items: center;
  margin: 1.5rem;
  border: none;
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
export const RedLine = styled.div`
  height: 5px;
  width: 100%;
  &::after {
    content: '';
    height: 1px;
    width: 100%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(255, 36, 88, 0.9) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    display: block;
    margin-top: 5rem;
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
`
