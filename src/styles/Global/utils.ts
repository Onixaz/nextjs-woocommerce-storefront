import styled from 'styled-components'

export const Container = styled.section`
  padding: 5rem 0;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
`

export const FlexGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > * {
    flex-basis: 20%;
    min-width: 15em;
    max-width: 25em;
    flex-grow: 1;
  }
`

export const BasicGrid = styled.div<{ lg: number; md: number; sm: number; xs: number }>`
  display: grid;
  grid-template-columns: ${({ lg }) => `repeat(${lg}, 1fr)`};
  width: 100%;
  height: 80%;

  @media screen and (max-width: 992px) {
    grid-template-columns: ${({ md }) => `repeat(${md}, 1fr)`};
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: ${({ sm }) => `repeat(${sm}, 1fr)`};
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: ${({ xs }) => `repeat(${xs}, 1fr)`};
  }
`

export const Loader = styled.h1`
  color: ${({ theme }) => theme.primaryText};
  letter-spacing: 1px;
  position: absolute;
  font-size: calc(1rem + 0.5vw);
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  overflow: hidden;
  letter-spacing: 1px;
  white-space: nowrap;
`

export const SectionTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-size: calc(2rem + 0.1vw);
  font-weight: 200;
  text-align: center;
  padding: 1rem;
  margin: 1rem;
`
