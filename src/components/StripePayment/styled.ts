import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 1rem;
`
export const Info = styled.p`
  font-weight: 400;

  max-width: 340px;
  font-size: calc(0.9rem + 0.1vw);
  letter-spacing: 0.5px;
  padding: 1rem;

  color: ${({ theme }) => theme.primaryText};
`

export const CardElementWrapper = styled.div`
  height: 50px;
  margin: 1rem;
  background: #fff;
  border-radius: 5px;
  max-width: 320px;
  width: 100%;
  display: flex;
  align-items: center;

  & .StripeElement {
    width: 100%;
    padding: 15px;
  }
`

export const ImgHolder = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CreditImg = styled.img`
  width: 20%;
  height: auto;
  padding: 0.5rem;
`
