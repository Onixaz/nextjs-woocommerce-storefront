import styled from 'styled-components'

export const LatestBg = styled.div`
  min-height: 75vh;
  //background: ${({ theme }) => theme.lightMediumBg};
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;

  /* &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.primaryGreen};
    mask-image: url('./leaf.svg');
    mask-position: center;
    mask-size: 100%;
    mask-repeat: no-repeat;
    opacity: 0.2;
    z-index: -1;
  } */
`
export const LatestHeader = styled.h1`
  padding: 2rem;
  font-size: calc(1.5rem + 0.5vw);
  letter-spacing: 2px;
  color: ${({ theme }) => theme.primaryText};
`
