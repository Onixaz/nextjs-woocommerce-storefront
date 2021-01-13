import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import GlobalStyle from '../styles/Global'
import Layout from '../components/Layout'
import axios from 'axios'
import { SWRConfig } from 'swr'
import CartProvider from '../context/cart'

interface CustomAppProps extends AppProps {}

const CustomApp: React.FC<CustomAppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <SWRConfig
            value={{
              fetcher: (url: string) =>
                axios({
                  method: 'get',
                  url,
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  auth: {
                    username: process.env.NEXT_PUBLIC_WOO_CONSUMER_KEY,
                    password: process.env.NEXT_PUBLIC_WOO_CONSUMER_SECRET,
                  },
                }).then((response) => response.data),
            }}
          >
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <GlobalStyle />
          </SWRConfig>
        </ThemeProvider>
      </CartProvider>
    </>
  )
}

export default CustomApp
