import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import GlobalStyle from '../styles/Global'
import Layout from '../components/Layout'

import CartProvider from '../context/cart'

interface CustomAppProps extends AppProps {}

const CustomApp: React.FC<CustomAppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CartProvider>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default CustomApp
