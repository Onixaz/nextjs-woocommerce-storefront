import { AppProps } from 'next/app'
import { Provider as AuthProvider } from 'next-auth/client'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/Global/theme'
import GlobalStyle from '../styles/Global/main'
import Layout from '../components/Layout/Base'
import CartProvider from '../context/cart'

//node-fetch self signed cert fix for getStaticProps
//https://stackoverflow.com/questions/10888610/ignore-invalid-self-signed-ssl-certificate-in-node-js-with-https-request/21961005#21961005
//process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

interface CustomAppProps extends AppProps {}

const CustomApp: React.FC<CustomAppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <AuthProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CartProvider>
          <GlobalStyle />
        </ThemeProvider>
      </AuthProvider>
    </>
  )
}

export default CustomApp
