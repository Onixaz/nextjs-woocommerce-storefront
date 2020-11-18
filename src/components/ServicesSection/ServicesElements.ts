import styled from 'styled-components'

export const ServicesContainer = styled.div`
  min-height: 100vh;
  display: flex;
  padding-top: 150px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.lightMediumBg};
  //background: rgb(131, 58, 180);
  //background: rgb(63, 94, 251);

  //background: radial-gradient(circle, rgba(63, 94, 251, 0) 5%, rgba(252, 70, 107, 0.2) 100%);
`

export const ServicesWrapper = styled.div`
  //max-width: 1000px;
  margin: 0 auto;
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;

  @media screen and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  border-radius: 20px;
  width: 340px;
  height: 400px;
  padding: 30px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const ServicesH1 = styled.h1`
  font-size: 48px;
  color: ${({ theme }) => theme.primaryBlack};
  margin-bottom: 44px;
  margin-top: 64px;
  text-align: center;
`

export const ServicesH2 = styled.h2`
  color: ${({ theme }) => theme.primaryRed};
  font-size: 18px;
  line-height: 16px;
  margin: 10px auto;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  text-align: center;
`

export const ServicesSubtitle = styled.p`
  max-width: 640px;
  margin-bottom: 35px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
`

export const ServicesP = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: ${({ theme }) => theme.primaryBlack};
`

export const BtnWrapper = styled.div`
  padding-bottom: 50px;
  padding-top: 50px;
`
