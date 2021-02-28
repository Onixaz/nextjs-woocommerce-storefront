import { BasicContainer, BasicGrid } from '../styles/Global/utils'

import CustomHead from '../components/CustomHead'
import { NextPage } from 'next'
import { Product } from '../types/index'
import React from 'react'
import SingleProduct from '../components/Product'
import { fetcher } from '../utils/functions'

interface ShopPageProps {
  products: Product[]
}

const ShopPage: NextPage<ShopPageProps> = ({ products }) => {
  return (
    <>
      <CustomHead
        title="Shop | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />

      <BasicContainer id="Products">
        <BasicGrid lg={4} md={3} sm={2} xs={1}>
          {products.map((product: any) => {
            return (
              <React.Fragment key={product.id}>
                <SingleProduct product={product} />
              </React.Fragment>
            )
          })}
        </BasicGrid>
      </BasicContainer>
    </>
  )
}

export default ShopPage

export async function getStaticProps() {
  const res = await fetcher(`/wp-json/wc/v3/products?per_page=30`)
  //TODO: implement variable products
  let products = await res.json()
  products = products.filter((item: { [key: string]: string }) => {
    return item.status === 'publish' && item.type === 'simple'
  })

  return {
    props: { products },
  }
}
