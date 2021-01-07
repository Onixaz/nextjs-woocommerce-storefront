import styled from 'styled-components'

export const Container = styled.section<{ customWidth: number; customHeight: number }>`
  min-height: ${({ customHeight }) => `${customHeight}vh`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: ${({ customWidth }) => `${customWidth}%`};
  margin: auto;
`
