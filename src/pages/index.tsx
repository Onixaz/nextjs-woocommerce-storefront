import React from 'react'
import { NextPage } from 'next'
import SingleCategory from '../components/Category'
import SingleProduct from '../components/Product'
import CustomHead from '../components/CustomHead'
import Hero from '../components/Hero'
import { BasicGrid, Container, SectionTitle } from '../styles/utils'
import { fetcher, API_KEY, API_SECRET } from '../utils/functions'
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()

interface IndexPageProps {
  categories: any
  featured: any
}

const IndexPage: NextPage<IndexPageProps> = ({ categories, featured }) => {
  console.log(serverRuntimeConfig.consumerKey)
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
        <SectionTitle>New In</SectionTitle>
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
    'https://elementor.local/wp-json/wc/v3/products/categories',
    API_KEY,
    API_SECRET,
  )
  let categories = await categoriesRes.json()
  categories = categories.filter((item: { [key: string]: string }) => {
    return item.name !== 'Uncategorized'
  })
  const productsRes = await fetcher(
    'https://elementor.local/wp-json/wc/v3/products?per_page=30',
    API_KEY,
    API_SECRET,
  )
  let featured = await productsRes.json()
  featured = featured.filter((item: { [key: string]: boolean }) => {
    return item.featured === true
  })

  return {
    props: { categories, featured },
  }
}
