import React from 'react'
import { NextPage } from 'next'
import CustomHead from '../components/CustomHead'
import { Container, Loader, FlexGrid, BasicGrid } from '../styles/utils'
import { fetcher, API_KEY, API_SECRET } from '../utils/functions'
import SingleProduct from '../components/Product'

interface ShopPageProps {
  products: any
}

const ShopPage: NextPage<ShopPageProps> = ({ products }) => {
  return (
    <>
      <CustomHead
        title="Shop | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />

      <Container id="Products">
        <BasicGrid lg={4} md={3} sm={2} xs={1}>
          {products.map((product: any) => {
            return (
              <React.Fragment key={product.id}>
                <SingleProduct product={product} />
              </React.Fragment>
            )
          })}
        </BasicGrid>
      </Container>
    </>
  )
}

export default ShopPage

export async function getStaticProps() {
  const res = await fetcher('https://elementor.local/wp-json/wc/v3/products', API_KEY, API_SECRET)
  const products = await res.json()

  return {
    props: { products },
  }
}
