import styled from 'styled-components'

export const PhotoContainer = styled.div`
  //background-color: ${({ theme }) => theme.primaryBlack};
  display: grid;
  position: relative;
  border-radius: 15px;
  padding: 3rem 1rem;
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
