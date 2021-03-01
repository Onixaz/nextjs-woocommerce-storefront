import { BasicContainer, BasicGrid, SectionTitle } from '../styles/Global/utils'
import { Category, Product } from '../types'

import CustomHead from '../components/CustomHead'
import Hero from '../components/Hero'
import { NextPage } from 'next'
import React from 'react'
import SingleCategory from '../components/Category'
import SingleProduct from '../components/Product'
import { fetcher } from '../utils/functions'

interface IndexPageProps {
  categories: Category[]
  featured: Product[]
}

const IndexPage: NextPage<IndexPageProps> = ({ categories, featured }) => {
  return (
    <>
      <CustomHead
        title="Woo Storefront | Next.Js"
        description="Unofficial WooCommerce Storefront theme made with Next.Js and Styled-components"
      />
      <Hero />

      <BasicContainer id="Categories">
        <SectionTitle>Shop by Category</SectionTitle>

        <BasicGrid lg={3} md={3} sm={2} xs={1}>
          {categories?.map((category: Category) => {
            return <SingleCategory key={category.id} category={category} />
          })}
        </BasicGrid>
        <SectionTitle>Featured Products</SectionTitle>
        <BasicGrid lg={4} md={3} sm={2} xs={1}>
          {featured?.map((featured: Product) => {
            return (
              <React.Fragment key={featured.id}>
                <SingleProduct product={featured} />
              </React.Fragment>
            )
          })}
        </BasicGrid>
      </BasicContainer>
    </>
  )
}

export default IndexPage

export async function getStaticProps() {
  const categoriesRes = await fetcher(`/wp-json/wc/v3/products/categories`)
  let categories = await categoriesRes.json()
  categories = categories.filter((item: Product) => {
    return item.name !== 'Uncategorized'
  })

  const productsRes = await fetcher(`/wp-json/wc/v3/products?per_page=30`)
  const products = await productsRes.json()

  const featured = products.filter((item: Product) => {
    if (item.featured === true && item.status === 'publish' && item.type === 'simple') {
      return item.featured
    } else {
      return null
    }
  })

  return {
    props: { categories, featured },
  }
}
