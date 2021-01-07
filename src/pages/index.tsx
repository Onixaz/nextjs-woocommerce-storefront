import Layout from '../components/Layout'
import { NextPage } from 'next'
import Section from '../components/Section'
import Hero from '../components/Hero'
import products from '../../products.json'
import LatestProducts from '../components/Latest'
import Categories from '../components/Categories'

interface IndexPageProps {}

const IndexPage: NextPage<IndexPageProps> = () => {
  return (
    <>
      <Section id="Hero" height={100} width={100}>
        <Hero />
      </Section>
      <Section id="Categories" height={30} width={90}>
        <Categories />
      </Section>
    </>
  )
}

export default IndexPage
