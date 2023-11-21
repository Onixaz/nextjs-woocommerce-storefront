import { BasicContainer, BasicGrid, SectionTitle } from '../styles/utils'
import { Category, Product } from '../types'
import Hero from '../components/Hero'
import { NextPage } from 'next'
import React from 'react'
import SingleCategory from '../components/Category'
import SingleProduct from '../components/Product/ProductCard'
import { fetcher } from '../utils/functions'
import PageTitle from '../components/PageTitle'

interface HomePageProps {
  categories: Category[]
  featured: Product[]
}

const HomePage: NextPage<HomePageProps> = ({ categories, featured }) => {
  return (
    <>
      <PageTitle
        title="Woo Storefront | Next.Js"
        description="Unofficial WooCommerce Storefront theme made with Next.Js and Styled-components"
      />
      {/* TODO refactor hero */}
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
          {featured?.map((product: Product) => {
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

export default HomePage

export async function getStaticProps() {
  const categoriesRes = await fetcher(`/wp-json/wc/v3/products/categories`)
  const categoriesJson = await categoriesRes.json()

  if (categoriesRes.status !== 200) {
    console.error('Home page error on getStaticProps', categoriesJson)
    return {
      props: { categories: [], featured: [] },
    }
  }

  const categories = categoriesJson.filter((item: Product) => {
    return item.name !== 'Uncategorized'
  })

  const productsRes = await fetcher(
    `/wp-json/wc/v3/products?per_page=4&status=publish&type=simple&featured=true`,
  )
  const featured = await productsRes.json()

  return {
    props: { categories, featured },
  }
}
