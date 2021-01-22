import { NextPage } from 'next'
import CustomHead from '../components/CustomHead'
import useSWR from 'swr'
import ProductItem from '../components/Product'
import { Container, BasicGrid, Loader } from '../styles/utils'
import axios from 'axios'
import { fetcher } from '../utils/functions'

//node-fetch self signed cert fix for getStaticProps
//https://stackoverflow.com/questions/10888610/ignore-invalid-self-signed-ssl-certificate-in-node-js-with-https-request/21961005#21961005
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const username: any = process.env.NEXT_PUBLIC_WOO_CONSUMER_KEY
const password: any = process.env.NEXT_PUBLIC_WOO_CONSUMER_SECRET

interface ShopPageProps {
  data: any
}

const ShopPage: NextPage<ShopPageProps> = ({ data }) => {
  return (
    <>
      <CustomHead
        title="Shop | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />

      <Container id="Products">
        <BasicGrid cols={4}>
          {!data ? (
            <Loader>Loading Products</Loader>
          ) : (
            data?.slice(2, 10).map((product: any) => {
              return <ProductItem key={product.id} product={product} />
            })
          )}
        </BasicGrid>
      </Container>
    </>
  )
}

export default ShopPage

export async function getStaticProps() {
  const res = await fetcher('https://elementor.local/wp-json/wc/v3/products', username, password)
  const data = await res.json()

  return {
    props: { data },
  }
}
