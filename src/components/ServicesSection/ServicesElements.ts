import styled from 'styled-components'

export const ServicesContainer = styled.div`
  padding-top: 10rem;
  /* padding-bottom: 12rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  @media screen and (max-width: 992px) {
    padding-top: 3rem;
  }
`

export const ServicesWrapper = styled.div`
  display: flex;
  min-height: 50vh;
  max-width: calc(85% - 6rem);
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
`

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.75rem;
  width: calc(25% + 1rem);
  border-radius: 15px;
  padding: 1rem 0.75rem 1rem 0.75rem;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 992px) {
    margin: 1rem;
    width: calc(80% + 2rem);
  }
`

export const ServicesP = styled.p`
  max-width: 440px;
  padding: 10px;
  font-size: calc(15px + 0.1vw);
  line-height: 24px;
  text-align: center;
  color: #555555;
`

export const CardHeader = styled.p`
  color: #555555;
  font-size: clamp(1.25rem, 5vw + 1rem, 1.5rem);
  font-weight: 500;
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
