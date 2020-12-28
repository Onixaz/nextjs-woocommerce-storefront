import { createGlobalStyle } from 'styled-components'
import { ThemeType } from './theme'

interface Props {
  theme: ThemeType
}

const GlobalStyle = createGlobalStyle<Props>`
  *, *:after, *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    font-family: 'Roboto',  sans-serif;
  }


  body {
    line-height: 1.7;
    
  } 
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primaryBlack}
  }
  ul {
    list-style: none
  }

  
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active  {
    box-shadow: inherit;
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.lightMediumBg} inset !important;
}
  
`

export default GlobalStyle
