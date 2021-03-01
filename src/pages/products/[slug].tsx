import { NextPage } from 'next'
import { Product } from '../../types'
import React from 'react'
import { fetcher } from '../../utils/functions'
import { Params } from 'next/dist/next-server/server/router'
import { BasicContainer } from '../../styles/Global/utils'
import ProductPageContent from '../../components/Product/ProductPageContent'

interface ProductPageProps {
  product: Product
}

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  return (
    <BasicContainer>
      <ProductPageContent product={product} />
    </BasicContainer>
  )
}

export default ProductPage

export async function getStaticProps({ params: { slug } }: Params) {
  const productsRes = await fetcher(`/wp-json/wc/v3/products?slug=${slug}`)
  const found = await productsRes.json()

  return {
    props: {
      product: found[0],
    },
  }
}

export async function getStaticPaths() {
  const productsRes = await fetcher(`/wp-json/wc/v3/products?per_page=30`)
  const products = await productsRes.json()
  const publishedProducts = products.filter((product: { [key: string]: string }) => {
    return product.status === 'publish'
  })

  const paths = publishedProducts.map((product: Product) => ({
    params: { slug: String(product.slug) },
  }))

  return { paths, fallback: false }
}
