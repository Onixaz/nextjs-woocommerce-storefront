import Layout from '../components/Layout'
import { NextPage } from 'next'
import Section from '../components/Section'
import Hero from '../components/Hero'
import products from '../../products.json'
import LatestProducts from '../components/Latest'

interface IndexPageProps {}

const IndexPage: NextPage<IndexPageProps> = () => {
  return (
    <>
      <Layout pageTitle="Pradžia">
        <Section width={100} id="Hero">
          <Hero />
        </Section>
        <Section width={90} id="Latest">
          <LatestProducts products={products} />
        </Section>
      </Layout>
    </>
  )
}

export default IndexPage
