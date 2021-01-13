import styled from 'styled-components'

export const Container = styled.section`
  height: 100vh;
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

export const BasicGrid = styled.div<{ cols: number; height: number }>`
  display: grid;
  grid-template-columns: ${({ cols }) => `repeat(${cols}, 1fr)`};
  width: 100%;
  height: ${({ height }) => `${height}%`};

  @media screen and (max-width: 768px) {
    grid-template-columns: ${({ cols }) => `repeat(${cols / 2}, 1fr)`};
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: ${({ cols }) => `repeat(${cols / cols}, 1fr)`};
  }
`
