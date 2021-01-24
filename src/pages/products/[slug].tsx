import { NextPage } from 'next'
import { Params } from 'next/dist/next-server/server/router'
import React from 'react'
import { fetcher, API_KEY, API_SECRET } from '../../utils/functions'

interface Product {
  name: string
  slug?: string
  id: number
  images: Array<{
    src: string
    alt: string
  }>
  price: string
  regular_price: string
  sale_price: string
}

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

export async function getStaticProps({ params }) {
  const productsRes = await fetcher(
    `https://elementor.local/wp-json/wc/v3/products?slug=${params.slug}`,
    API_KEY,
    API_SECRET,
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
    API_KEY,
    API_SECRET,
  )
  const products = await productsRes.json()

  const paths = products.map((product: Product) => ({
    params: { slug: String(product.slug) },
  }))

  return { paths, fallback: false }
}
