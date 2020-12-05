import styled from 'styled-components'

export const PhotoContainer = styled.div`
  //background-color: ${({ theme }) => theme.primaryBlack};
  display: grid;

  margin: 0 auto;
  //position: relative;
  min-height: 100vh;
  //margin: 0 auto;
  padding: 3rem 1rem;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @media screen and (max-width: 992px) {
    display: grid;
    padding: 3rem;

    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
  @media screen and (max-width: 480px) {
    //justify-content: space-evenly;
    display: grid;
    padding: 3rem;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(8, 1fr);
  }
`

export const PhotoCard = styled.div`
  flex: 1;
  height: 340px;
  width: 100%;
  padding: 1rem;

  //transition: all 1s ease-in-out;
`

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 10px;
  object-fit: cover;
  //transition: filter 1s ease-in-out;
  //border: 3px solid #fff;
  top: 0;
  left: 0;
  box-shadow: 0 0 10px #000;
`

export const PhotoText = styled.p`
  text-align: center;
  position: relative;
  z-index: 3;
  transform: translateY(100px);
  opacity: 0;
  transition: 0.5s all;
  color: #fff;
  font-size: calc(1rem + 0.1vw);
  //font-weight: 300;
  font-style: italic;
  //letter-spacing: 0.5px;
`
export const PhotoAnimHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(255, 36, 88, 0.5), rgb(13, 13, 13, 1));
    z-index: 2;
    transition: 0.5s all;
    opacity: 0;
  }
  &:hover {
    ${PhotoText} {
      opacity: 1;
      transform: translateY(80px);
    }
  }

  &:hover:before {
    opacity: 1;
  }
`
