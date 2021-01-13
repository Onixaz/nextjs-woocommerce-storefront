import styled from 'styled-components'

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
