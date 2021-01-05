import styled from 'styled-components'

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  background: ${({ theme }) => theme.lightMediumBg};
  //border: 1px solid #000;
  width: 100%;
`
export const CardPhotoWrapper = styled.div`
  height: 340px;
  width: 100%;
`

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s all;
`
