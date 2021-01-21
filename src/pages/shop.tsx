import { NextPage } from 'next'
import CustomHead from '../components/CustomHead'
import useSWR from 'swr'
import ProductItem from '../components/Product'
import { Container, BasicGrid, Loader } from '../styles/utils'
import axios from 'axios'

interface ShopPageProps {}

const username: any = process.env.NEXT_PUBLIC_WOO_CONSUMER_KEY
const password: any = process.env.NEXT_PUBLIC_WOO_CONSUMER_SECRET

const fetcher = (url: string, username: string, password: string) =>
  axios({
    method: 'GET',
    url,
    auth: {
      username,
      password,
    },
  })
    .then((response) => response.data)
    .catch((error) => console.log(error))

const ShopPage: NextPage<ShopPageProps> = () => {
  const { data } = useSWR(`https://elementor.local/wp-json/wc/v3/products`, (url: string) =>
    fetcher(url, username, password),
  )

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
