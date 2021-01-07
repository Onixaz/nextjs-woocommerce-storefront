import styled from 'styled-components'

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  width: 100%;
`
export const CardPhotoWrapper = styled.div`
  height: 320px;
  width: 100%;
`

export const CardPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s all;
  border-radius: 10px;
`

export const CardPrice = styled.p`
  font-size: calc(1rem + 0.1vw);
  font-weight: 600;
  letter-spacing: 3px;
  opacity: 0.9;
  line-height: 1.7;
`

export const CardName = styled.p`
  color: ${({ theme }) => theme.primaryText};
  font-size: calc(0.9rem + 0.1vw);
  margin-top: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  opacity: 0.9;
  padding: 0.25rem 0;
`
