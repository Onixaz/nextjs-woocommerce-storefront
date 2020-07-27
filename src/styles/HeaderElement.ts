import styled from 'styled-components'

const HeaderElement = styled.header`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
  }
  a {
    padding: 0 0.5em;
  }
  a:hover {
    text-decoration: underline;
  }
`

export default HeaderElement
