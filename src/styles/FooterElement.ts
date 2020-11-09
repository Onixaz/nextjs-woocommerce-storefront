import styled from 'styled-components'

const FooterElement = styled.footer`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.dark};
  font-weight: bold;
  font-size: 1.3em;
`

export default FooterElement
