import defaultTheme from './theme'

import styled from 'styled-components'

const ButtonElement = styled.button`
  border: none;
  background: ${({ theme }) => theme.secondary};
  padding: 10px 20px;
  text-transform: uppercase;
  cursor: pointer;
  color: ${({ theme }) => theme.white};
  font-weight: bold;

  &:hover {
    opacity: 0.8;
  }
`

export default ButtonElement
