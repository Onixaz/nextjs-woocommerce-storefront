import { useEffect } from 'react'
import { AppProps } from 'next/app'
import AOS from 'aos'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import GlobalStyle from '../styles/Global'
import 'aos/dist/aos.css'

interface CustomAppProps extends AppProps {}

const CustomApp: React.FC<CustomAppProps> = ({ Component, pageProps }) => {
  const animateConfig = { easing: 'ease-out-cubic', once: true, offset: 50, duration: 1500 }

  useEffect(() => {
    AOS.init(animateConfig)
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default CustomApp
