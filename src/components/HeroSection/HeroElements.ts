import styled from 'styled-components'

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
  font-size: 48px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 40px;
    @media screen and (max-width: 480px) {
      font-size: 32px;
    }
  }
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
