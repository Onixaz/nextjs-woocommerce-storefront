import { NextPage } from 'next'
import { Product } from '../../types'
import { fetcher } from '../../utils/functions'
import { GetStaticProps } from 'next'
import ProductPageContainer from '../../containers/Product'

interface ProductPageProps {
  product: Product
}

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  return <ProductPageContainer product={product} />
}

export default ProductPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productsRes = await fetcher(`/wp-json/wc/v3/products?slug=${params?.slug}`)

  const found = await productsRes.json()

  return {
    props: {
      product: found[0],
    },
  }
}

export const getStaticPaths = async () => {
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
