import styled from 'styled-components'

const FooterElement = styled.footer`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.primaryBlack};
  color: ${({ theme }) => theme.primaryWhite};
  font-weight: bold;
  font-size: 1.3em;
`

export default FooterElement
