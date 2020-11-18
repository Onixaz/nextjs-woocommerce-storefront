import styled from 'styled-components'

const FooterElement = styled.footer`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  color: ${({ theme }) => theme.primaryWhite};
  font-weight: bold;
  font-size: 1.3em;
`

export default FooterElement
