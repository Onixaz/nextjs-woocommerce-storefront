import React from 'react'
import { NextPage } from 'next'
import CustomHead from '../components/CustomHead'
import { Container, BasicGrid } from '../styles/Global/utils'
import { fetcher } from '../utils/functions'
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
  const res = await fetcher(
    `${process.env.WOO_API_URL}/wp-json/wc/v3/products?per_page=30`,
    process.env.WOO_CONSUMER_KEY!,
    process.env.WOO_CONSUMER_SECRET!,
  )
  let products = await res.json()
  products = products.filter((item: { [key: string]: string }) => {
    return item.status === 'publish'
  })

  return {
    props: { products },
  }
}
