import React from 'react'
import { NextPage } from 'next'
import SingleCategory from '../components/Category'
import SingleProduct from '../components/Product'
import CustomHead from '../components/CustomHead'
import Hero from '../components/Hero'
import { BasicGrid, Container, SectionTitle } from '../styles/Global/utils'
import { fetcher } from '../utils/functions'

interface IndexPageProps {
  categories: any
  featured: any
}

const IndexPage: NextPage<IndexPageProps> = ({ categories, featured }) => {
  return (
    <>
      <CustomHead
        title="Unofficial starter | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
      <Hero />

      <Container id="Categories">
        <SectionTitle>Shop by Category</SectionTitle>
        <BasicGrid lg={3} md={3} sm={2} xs={1}>
          {categories?.map((category: any) => {
            return <SingleCategory key={category.id} category={category} />
          })}
        </BasicGrid>
        <SectionTitle>Featured Products</SectionTitle>
        <BasicGrid lg={4} md={3} sm={2} xs={1}>
          {featured?.map((featured: any) => {
            return (
              <React.Fragment key={featured.id}>
                <SingleProduct product={featured} />
              </React.Fragment>
            )
          })}
        </BasicGrid>
      </Container>
    </>
  )
}

export default IndexPage

export async function getStaticProps() {
  const categoriesRes = await fetcher(
    `${process.env.WOO_API_URL}/wp-json/wc/v3/products/categories`,
    process.env.WOO_CONSUMER_KEY!,
    process.env.WOO_CONSUMER_SECRET!,
  )
  let categories = await categoriesRes.json()
  categories = categories.filter((item: { [key: string]: string }) => {
    return item.name !== 'Uncategorized'
  })
  const productsRes = await fetcher(
    `${process.env.WOO_API_URL}/wp-json/wc/v3/products?per_page=30`,
    process.env.WOO_CONSUMER_KEY!,
    process.env.WOO_CONSUMER_SECRET!,
  )
  const products = await productsRes.json()

  const featured = products.filter((item: { [key: string]: boolean | string }) => {
    if (item.featured === true && item.status === 'publish') {
      return item.featured
    } else {
      return null
    }
  })

  return {
    props: { categories, featured },
  }
}
