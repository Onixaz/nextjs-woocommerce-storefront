import { NextPage } from 'next'
import CustomHead from '../components/CustomHead'
import useSWR from 'swr'
import ProductItem from '../components/Product'
import { Container, BasicGrid, Loader } from '../styles/utils'
import axios from 'axios'

interface ShopPageProps {}

const fetcher = (url: string) =>
  axios({
    method: 'get',
    url,
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    auth: {
      username: process.env.NEXT_PUBLIC_WOO_CONSUMER_KEY,
      password: process.env.NEXT_PUBLIC_WOO_CONSUMER_SECRET,
    },
  }).then((response) => response.data)

const ShopPage: NextPage<ShopPageProps> = () => {
  const { data } = useSWR(`https://elementor.local/wp-json/wc/v3/products`, fetcher)

  return (
    <>
      <CustomHead
        title="Shop | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />

      <Container id="Products">
        <BasicGrid cols={4}>
          {!data ? (
            <Loader>Loading products...</Loader>
          ) : (
            data?.slice(2, 10).map((product) => {
              return <ProductItem key={product.id} product={product} />
            })
          )}
        </BasicGrid>
      </Container>
    </>
  )
}

export default ShopPage
