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
  //border-radius: 10px;
  object-fit: cover;
  //transition: filter 1s ease-in-out;
  //border: 3px solid #fff;
  top: 0;
  left: 0;
`

export const PhotoText = styled.p`
  text-align: center;
  position: relative;
  z-index: 3;
  transform: translateY(-50px);
  opacity: 0;
  transition: 1s all;
  color: #fff;
  font-size: calc(0.8rem + 0.075vw);
  font-weight: 400;
  //ont-style: italic;
  line-height: 1.8;
  padding: 0.5rem;
  letter-spacing: 0.5px;
`
export const PhotoAnimHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  box-shadow: 0 0 10px #000;
  border-bottom-color: ${({ theme }) => theme.primaryRed};

  &:hover {
    box-shadow: 0 0 15px rgba(255, 36, 88, 1);
    transition: 1s all;
    cursor: pointer;
    ${PhotoText} {
      opacity: 1;
      transform: translateY(50px);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 100%;
    border: 1px solid transparent;
    background: rgb(0, 0, 0, 0.9);

    z-index: 2;

    opacity: 0;
  }

  &:hover:before {
    opacity: 0.95;

    animation: animatePhoto1 0.5s linear forwards;

    @keyframes animatePhoto1 {
      0% {
        width: 0;
        height: 0;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
      }
      50% {
        width: 100%;
        height: 0%;
        border-top-color: ${({ theme }) => theme.primaryRed};
        border-right-color: ${({ theme }) => theme.primaryRed};
        border-bottom-color: transparent;
        border-left-color: ${({ theme }) => theme.primaryRed};
      }
      100% {
        width: 100%;
        height: 100%;
        border-top-color: ${({ theme }) => theme.primaryRed};
        border-right-color: ${({ theme }) => theme.primaryRed};
        border-bottom-color: ${({ theme }) => theme.primaryRed};
        border-left-color: ${({ theme }) => theme.primaryRed};
      }
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 100%;
    border: 1px solid transparent;

    z-index: 2;
    transition: 1s all;
    opacity: 0;
  }

  &:hover:after {
    opacity: 0.95;

    animation: animatePhoto2 0.5s linear forwards;

    @keyframes animatePhoto2 {
      0% {
        width: 0;
        height: 0;
        border-top-color: ${({ theme }) => theme.primaryRed};
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
      }
      50% {
        width: 100%;
        height: 0%;
        border-top-color: ${({ theme }) => theme.primaryRed};
        border-right-color: ${({ theme }) => theme.primaryRed};
        border-bottom-color: transparent;
        border-left-color: ${({ theme }) => theme.primaryRed};
      }
      100% {
        width: 100%;
        height: 100%;
        border-top-color: ${({ theme }) => theme.primaryRed};
        border-right-color: ${({ theme }) => theme.primaryRed};
        border-bottom-color: ${({ theme }) => theme.primaryRed};
        border-left-color: ${({ theme }) => theme.primaryRed};
      }
    }
  }
`
