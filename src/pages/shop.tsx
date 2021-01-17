import { NextPage } from 'next'
import CustomHead from '../components/CustomHead'
import useSWR from 'swr'
import ProductItem from '../components/Product'
import { Container, BasicGrid, Loader } from '../styles/utils'

interface ShopPageProps {}

const ShopPage: NextPage<ShopPageProps> = () => {
  const { data } = useSWR(`https://elementor.local/wp-json/wc/v3/products`)

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
