import styled from 'styled-components'

export const GalleryContainer = styled.div`
  padding-top: 10rem;
  padding-bottom: 8.5rem;
  min-height: 20vh;
  max-width: 1400px;
  margin: 0 auto;

  @media screen and (max-width: 992px) {
    padding-top: 3rem;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const GalleryP = styled.p`
  margin-top: 24px;
  color: ${({ theme }) => theme.primaryBlack};
  font-size: clamp(0.5rem, 2vw + 0.5rem, 1.5rem);
  text-align: center;
  max-width: 600px;
`

export const CardContainer = styled.div`
  //background-color: ${({ theme }) => theme.primaryBlack};
  display: flex;
  padding: 2rem 5rem;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 992px) {
    justify-content: space-evenly;
    display: grid;
    padding: 3rem;

    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 480px) {
    justify-content: space-evenly;
    display: grid;
    padding: 3rem;
    grid-template-columns: repeat(1, 1fr);
  }
`

export const PhotoCard = styled.div`
  flex: 1;
  height: 100%;
  //transition: all 1s ease-in-out;
  position: relative;
  margin: 1vmin;
  padding: 1rem;
`

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  transition: filter 1s ease-in-out;
`
