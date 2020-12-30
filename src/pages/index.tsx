import Layout from '../components/Layout'
import { NextPage } from 'next'

interface IndexPageProps {}

const IndexPage: NextPage<IndexPageProps> = () => {
  return (
    <>
      <Layout pageTitle="Pradžia">
        <h1>Hello</h1>
      </Layout>
    </>
  )
}

export default IndexPage
