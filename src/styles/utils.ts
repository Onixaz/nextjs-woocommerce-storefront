import styled from 'styled-components'

export const Container = styled.section`
  min-height: 100vh;
  padding-top: 5rem;
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

export const BasicGrid = styled.div<{ cols: number }>`
  display: grid;
  grid-template-columns: ${({ cols }) => `repeat(${cols}, 1fr)`};
  width: 100%;
  height: 80%;

  @media screen and (max-width: 768px) {
    grid-template-columns: ${({ cols }) => `repeat(${cols / 2}, 1fr)`};
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: ${({ cols }) => `repeat(${cols / cols}, 1fr)`};
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
