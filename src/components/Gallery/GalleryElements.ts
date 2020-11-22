import styled from 'styled-components'

export const GalleryContainer = styled.div`
  padding-top: 10rem;
  padding-bottom: 8.5rem;
  min-height: 20vh;
  max-width: calc(50% + 30rem);
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
  margin: 0 auto;
  padding: 0 1.5rem 0 1.5rem;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 992px) {
    justify-content: space-evenly;
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 480px) {
    justify-content: space-evenly;
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(1, 1fr);
  }
`

export const PhotoCard = styled.div`
  flex: 1;
  height: 100%;
  //transition: all 1s ease-in-out;
  position: relative;
  margin: 2vmin;
  padding: 2rem;
`

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  object-fit: cover;
  transition: filter 1s ease-in-out;
  box-shadow: 0 0 3px #ff2458;
  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0);
  }
`
