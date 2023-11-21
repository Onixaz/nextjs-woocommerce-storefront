import { NextPage } from 'next'
import { Product } from '../types/index'
import React from 'react'
import { fetcher } from '../utils/functions'
import ShopPageContainer from '../containers/Shop'

interface ShopPageProps {
  products: Product[]
}

const ShopPage: NextPage<ShopPageProps> = ({ products }) => {
  return <ShopPageContainer products={products} />
}

export default ShopPage

export async function getStaticProps() {
  //TODO: implement variable products
  const res = await fetcher(`/wp-json/wc/v3/products?per_page=100&status=publish&type=simple`)
  const products = await res.json()

  if (res.status !== 200) {
    console.error('Shop page error on getStaticProps', products)
    return {
      props: { products: [] },
    }
  }

  return {
    props: { products },
  }
}
