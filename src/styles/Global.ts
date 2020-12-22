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
    font-family: 'Fira Sans',  sans-serif; //'Fira Sans', 'Lato',
  }


  body {
    
    font-family: 'Fira Sans', sans-serif; //'Fira Sans', 'Lato',
    line-height: 1.7;
    background: ${({ theme }) => theme.lightMediumBg};

    
     
     /* &::after{
      content: ' ';
      background-image: url('/full_back.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
      display: block;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.25;

    } */
  } 
  a {
    
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
