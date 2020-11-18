import { createGlobalStyle } from 'styled-components'
import { ThemeType } from './theme'

interface Props {
  theme: ThemeType
}

const GlobalStyle = createGlobalStyle<Props>`
  *, *:after, *:before {
    box-sizing: border-box;
    margin: 0;
    outline: none;
    font-family: 'Fira Sans', 'Lato', sans-serif;
  }




  

  /* body {
    font-size: calc(14px + .2vw);
    font-family: 'Fira Sans', 'Lato', sans-serif;
    line-height: 1.7;
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.medium};
  }
  a {
    
    color: ${({ theme }) => theme.dark}
  }
  ul {
    list-style: none
  } */
`

export default GlobalStyle
