import styled from 'styled-components'
import Image from 'next/image'
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
  max-width: 800px;
  margin: 1rem auto;
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
  display: grid;
  position: relative;
  border-radius: 15px;
  padding: 3rem;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);

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
  //border: 3px solid #fff;
  box-shadow: 0 0 10px #000;
`

export const TestimonialsContainer = styled.div`
  //display: flex;
  //justify-content: center;
  //align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem 2rem;
  min-height: 200px;
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
    margin-top: 1rem;
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
`
