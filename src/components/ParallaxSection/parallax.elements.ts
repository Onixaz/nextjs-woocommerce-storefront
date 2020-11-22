import styled from 'styled-components'

export const ParallaxContainer = styled.div`
  min-height: 0.5vh;
  position: relative;
  background: ${({ theme }) => theme.secondaryRed};
  max-width: 1200px;
  margin: 0 auto;
  //background-image: linear-gradient(rgba(206, 27, 40, 1), rgba(206, 27, 40, 1));
  //background-image: linear-gradient(rgba(206, 27, 40, 0.25) 10%, rgba(0, 0, 0, 0.8) 100%);
  opacity: 1;
`
