import Layout from '../components/Layout'
import { NextPage } from 'next'
import HeroSection from '../components/Hero'

interface IndexPageProps {}

const IndexPage: NextPage<IndexPageProps> = () => {
  return (
    <>
      <Layout pageTitle="Pradžia">
        <HeroSection />
      </Layout>
    </>
  )
}

export default IndexPage
