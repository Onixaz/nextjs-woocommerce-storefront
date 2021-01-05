import styled from 'styled-components'

export const Container = styled.section<{ customWidth: number }>`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: ${({ customWidth }) => `${customWidth}%`};
  margin: auto;
`
