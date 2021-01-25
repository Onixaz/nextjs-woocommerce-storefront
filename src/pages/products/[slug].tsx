import { NextPage } from 'next'
import { Product } from '../../../types'
import React from 'react'
import { fetcher } from '../../utils/functions'
import { Params } from 'next/dist/next-server/server/router'

interface ProductPageProps {
  product: Product
}

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  return (
    <div>
      <p>{product.name}</p>
    </div>
  )
}

export default ProductPage

export async function getStaticProps({ params: { slug } }: Params) {
  const productsRes = await fetcher(
    `https://elementor.local/wp-json/wc/v3/products?slug=${slug}`,
    process.env.WOO_CONSUMER_KEY!,
    process.env.WOO_CONSUMER_SECRET!,
  )

  const found = await productsRes.json()

  return {
    props: {
      product: found[0],
    },
  }
}

export async function getStaticPaths() {
  const productsRes = await fetcher(
    `https://elementor.local/wp-json/wc/v3/products?per_page=30`,
    process.env.WOO_CONSUMER_KEY!,
    process.env.WOO_CONSUMER_SECRET!,
  )
  const products = await productsRes.json()
  const publishedProducts = products.filter((product: { [key: string]: string }) => {
    return product.status === 'publish'
  })

  const paths = publishedProducts.map((product: Product) => ({
    params: { slug: String(product.slug) },
  }))

  return { paths, fallback: false }
}
