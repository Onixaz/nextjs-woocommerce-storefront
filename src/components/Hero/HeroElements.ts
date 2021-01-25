import styled from 'styled-components'

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem 0.75rem 0 0.75rem;
  max-width: 1200px;
  margin: 0 auto;
`

export const HeroBg = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;

  background: url('./hero.jpg');
  background-position: center;
  background-size: cover;
  border-radius: 30px;
`

export const HeroHeading = styled.h1`
  font-size: calc(2.5rem + 0.6vw);
  position: absolute;
  letter-spacing: 1px;
  font-weight: 200;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const HeroSubheading = styled.h4`
  text-align: center;
  padding-top: 1rem;
  font-size: calc(0.75rem + 0.6vw);
  position: absolute;
  letter-spacing: 1px;
  font-weight: 200;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`
