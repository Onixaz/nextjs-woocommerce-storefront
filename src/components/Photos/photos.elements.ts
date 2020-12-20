import styled from 'styled-components'

export const PhotoContainer = styled.div<{ rows: number }>`
  //background-color: ${({ theme }) => theme.primaryBlack};
  display: grid;
  position: relative;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(rows, 1fr);
  padding: 3rem 1rem;

  @media screen and (max-width: 992px) {
    display: grid;

    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(rows * 2, 1fr);
  }
  @media screen and (max-width: 768px) {
    //justify-content: space-evenly;
    display: grid;
    padding: 3rem;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(rows * 4, 1fr);
  }
`

export const PhotoCard = styled.div<{ gaps: number }>`
  height: 340px;
  width: 100%;
  padding: ${({ gaps }) => `${gaps}rem`};
`

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  transition: 0.5s all;
  top: 0;
  left: 0;
`

export const PhotoText = styled.p`
  text-align: center;
  position: relative;
  z-index: 3;
  transform: translateY(-100px);
  opacity: 0;
  transition: 1s all;
  color: ${({ theme }) => theme.lightMediumBg};
  font-size: calc(0.8rem + 0.075vw);
  font-weight: 400;
  padding: 0.5rem;
  letter-spacing: 0.3px;
`
export const PhotoAnimHolder = styled.div`
  display: flex;
  background: ${({ theme }) => theme.primaryBlack};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 1);
  //box-shadow: 0 0 10px #000;
  //border-bottom-color: ${({ theme }) => theme.primaryRed};

  &:hover {
    cursor: pointer;

    ${Photo} {
      transform: scale(1.05);
      opacity: 0.7;
    }
  }
`
