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
    font-family: 'Fira Sans', 'Lato', sans-serif;
  }


  body {
    
    font-family: 'Fira Sans', 'Lato', sans-serif;
    line-height: 1.7;
    background: ${({ theme }) => theme.lightMediumBg};
    
    //color: ${({ theme }) => theme.medium};
    &::after{
      content: ' ';
      background-image: url('/cover_full.png');
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
      opacity: 0.025;

    }
  }
  a {
    
    color: ${({ theme }) => theme.dark}
  }
  ul {
    list-style: none
  }
`

export default GlobalStyle
