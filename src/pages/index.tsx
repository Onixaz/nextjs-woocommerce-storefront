import { NextPage } from 'next'
import CustomHead from '../components/CustomHead'
import Hero from '../components/Hero'
import { BasicGrid, Container } from '../styles/utils'

interface IndexPageProps {}

const IndexPage: NextPage<IndexPageProps> = () => {
  return (
    <>
      <CustomHead
        title="Unofficial starter | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
      <Hero />
      <Container id="Categories">
        <p>Shop by Category</p>
      </Container>
    </>
  )
}

export default IndexPage
